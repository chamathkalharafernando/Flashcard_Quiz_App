import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { PlusCircle } from 'lucide-react';

const AddCard = ({ onAdd }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [category, setCategory] = useState('General');

    const handleSubmit = () => {
        if (question.trim() && answer.trim()) {
            onAdd({ question, answer, category });
            setQuestion('');
            setAnswer('');
            setCategory('General');
        }
    };

    return (
        <Card className="p-4">
            <CardContent className="space-y-4">
                <Input
                    placeholder="Enter question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <Input
                    placeholder="Enter answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="General">General</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Math">Math</option>
                </select>
                <Button onClick={handleSubmit} className="w-full">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Flashcard
                </Button>
            </CardContent>
        </Card>
    );
};

export default AddCard;