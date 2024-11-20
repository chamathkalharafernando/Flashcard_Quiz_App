const mongoose = require('mongoose');

const QuizResultSchema = new mongoose.Schema({
    totalQuestions: {
        type: Number,
        required: true
    },
    correctAnswers: {
        type: Number,
        required: true
    },
    incorrectAnswers: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    dateTaken: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('QuizResult', QuizResultSchema);