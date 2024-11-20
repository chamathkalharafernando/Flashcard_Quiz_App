const express = require('express');
const router = express.Router();
const {
    getFlashcards,
    createFlashcard,
    deleteFlashcard
} = require('../controllers/flashcardController');

router.route('/').get(getFlashcards).post(createFlashcard);
router.route('/:id').delete(deleteFlashcard);

module.exports = router;