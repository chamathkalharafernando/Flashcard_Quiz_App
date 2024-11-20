import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert';
import AddCard from './components/AddCard';
import FlashcardList from './components/FlashcardList';
import Quiz from './components/Quiz';
import Statistics from './components/Statistics';
import { getFlashcards, createFlashcard, deleteFlashcard, saveQuizResult, getQuizResults } from './services/api';



const App = () => {
    const [currentMode, setCurrentMode] = useState('add');
    const [flashcards, setFlashcards] = useState([]);
    const [quizHistory, setQuizHistory] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFlashcards();
        if (currentMode === 'stats') {
            fetchQuizHistory();
        }
    }, [currentMode]);

    const fetchFlashcards = async () => {
        try {
            const response = await getFlashcards();
            setFlashcards(response.data);
        } catch (err) {
            setError('Failed to fetch flashcards');
        } finally {
            setLoading(false);
        }
    };

    const fetchQuizHistory = async () => {
        try {
            const response = await getQuizResults();
            setQuizHistory(response.data);
        } catch (err) {
            setError('Failed to fetch quiz history');
        }
    };

    const handleAddCard = async (cardData) => {
        try {
            const response = await createFlashcard(cardData);
            setFlashcards([response.data, ...flashcards]);
        } catch (err) {
            setError('Failed to add flashcard');
        }
    };

    const handleDeleteCard = async (id) => {
        try {
            await deleteFlashcard(id);
            setFlashcards(flashcards.filter(card => card._id !== id));
        } catch (err) {
            setError('Failed to delete flashcard');
        }
    };

    const handleQuizComplete = async (scores) => {
        try {
            const result = {
                totalQuestions: flashcards.length,
                correctAnswers: scores.correct,
                incorrectAnswers: scores.incorrect,
                score: Math.round((scores.correct / flashcards.length) * 100)
            };
            await saveQuizResult(result);
            setCurrentMode('stats');
        } catch (err) {
            setError('Failed to save quiz result');
        }
    };

    if (loading) {
        return <div className="text-center p-8">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            {error && (
                <Alert variant="destructive" className="mb-4">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        Flashcard Quiz App
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 mb-6">
                        <Button 
                            onClick={() => setCurrentMode('add')}
                            variant={currentMode === 'add' ? 'default' : 'outline'}
                        >
                            Add Cards
                        </Button>
                        <Button 
                            onClick={() => setCurrentMode('quiz')}
                            variant={currentMode === 'quiz' ? 'default' : 'outline'}
                            disabled={flashcards.length === 0}
                        >
                            Start Quiz
                        </Button>
                        <Button 
                            onClick={() => setCurrentMode('stats')}
                            variant={currentMode === 'stats' ? 'default' : 'outline'}
                        >
                            Statistics
                        </Button>
                    </div>

                    {currentMode === 'add' && (
                        <div className="space-y-6">
                            <AddCard onAdd={handleAddCard} />
                            <FlashcardList 
                                flashcards={flashcards}
                                onDelete={handleDeleteCard}
                            />
                        </div>
                    )}

                    {currentMode === 'quiz' && (
                        <Quiz 
                            flashcards={flashcards}
                            onComplete={handleQuizComplete}
                        />
                    )}

                    {currentMode === 'stats' && (
                        <Statistics quizHistory={quizHistory} />
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default App;