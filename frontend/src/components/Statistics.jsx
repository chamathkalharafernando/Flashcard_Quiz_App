import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BarChart } from 'lucide-react';

const Statistics = ({ quizHistory }) => {
    const calculateAverageScore = () => {
        if (quizHistory.length === 0) return 0;
        const total = quizHistory.reduce((acc, result) => acc + result.score, 0);
        return (total / quizHistory.length).toFixed(1);
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart className="w-5 h-5" />
                        Performance Overview
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center mb-4">
                        <p className="text-2xl font-bold">{calculateAverageScore()}%</p>
                        <p className="text-gray-500">Average Score</p>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Recent Quiz Results</h3>
                {quizHistory.map((result, index) => (
                    <Card key={index}>
                        <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">Score: {result.score}%</p>
                                    <div className="text-sm text-gray-500">
                                        <p>Correct: {result.correctAnswers}</p>
                                        <p>Incorrect: {result.incorrectAnswers}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">
                                    {new Date(result.dateTaken).toLocaleDateString()}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Statistics;