const express = require('express');
const router = express.Router();
const {
    saveQuizResult,
    getQuizResults
} = require('../controllers/quizController');

router.route('/').get(getQuizResults).post(saveQuizResult);

module.exports = router;