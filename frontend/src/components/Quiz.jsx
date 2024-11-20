import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Check, X } from 'lucide-react';

const Quiz = ({ flashcards, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [scores, setScores] = useState({ correct: 0, incorrect: 0 });

    const handleAnswer = (correct) => {
        const newScores = {
            ...scores,
            [correct ? 'correct' : 'incorrect']: scores[correct ? 'correct' : 'incorrect'] + 1
        };
        setScores(newScores);

        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowAnswer(false);
        } else {
            onComplete(newScores);
        }
    };

    if (!flashcards || flashcards.length === 0) {
        return <div>No flashcards available</div>;
    }

    return (
        <Card className="p-6">
            <CardContent className="text-center space-y-4">
                <h3 className="text-lg font-semibold">
                    Card {currentIndex + 1} of {flashcards.length}
                </h3>
                <p className="text-xl">{flashcards[currentIndex].question}</p>

                {showAnswer ? (
                    <div className="space-y-4">
                        <p className="text-lg font-medium">
                            {flashcards[currentIndex].answer}
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button
                                onClick={() => handleAnswer(true)}
                                className="flex items-center gap-2"
                            >
                                <Check className="w-4 h-4" />
                                Correct
                            </Button>
                            <Button
                                onClick={() => handleAnswer(false)}
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <X className="w-4 h-4" />
                                Incorrect
                            </Button>
                        </div>
                    </div>
                ) : (
                    <Button onClick={() => setShowAnswer(true)}>
                        Show Answer
                    </Button>
                )}

                <div className="mt-4">
                    <p>Correct: {scores.correct}</p>
                    <p>Incorrect: {scores.incorrect}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default Quiz;