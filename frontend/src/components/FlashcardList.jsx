import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { XCircle } from 'lucide-react';

const FlashcardList = ({ flashcards, onDelete }) => {
    return (
        <div className="space-y-4">
            {flashcards.map((card) => (
                <Card key={card._id}>
                    <CardContent className="p-4">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-medium">Q: {card.question}</p>
                                <p className="text-gray-600">A: {card.answer}</p>
                                <p className="text-sm text-gray-500">
                                    Category: {card.category}
                                </p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onDelete(card._id)}
                            >
                                <XCircle className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default FlashcardList;