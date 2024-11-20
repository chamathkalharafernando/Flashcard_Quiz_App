const QuizResult = require('../models/QuizResult');

exports.saveQuizResult = async (req, res) => {
    try {
        const quizResult = new QuizResult({
            totalQuestions: req.body.totalQuestions,
            correctAnswers: req.body.correctAnswers,
            incorrectAnswers: req.body.incorrectAnswers,
            score: req.body.score
        });
        const newResult = await quizResult.save();
        res.status(201).json(newResult);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getQuizResults = async (req, res) => {
    try {
        const results = await QuizResult.find().sort({ dateTaken: -1 });
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};