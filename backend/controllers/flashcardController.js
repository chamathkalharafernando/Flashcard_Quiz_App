const Flashcard = require('../models/Flashcard');

exports.getFlashcards = async (req, res) => {
    try {
        const flashcards = await Flashcard.find().sort({ createdAt: -1 });
        res.json(flashcards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createFlashcard = async (req, res) => {
    try {
        const flashcard = new Flashcard({
            question: req.body.question,
            answer: req.body.answer,
            category: req.body.category
        });
        const newFlashcard = await flashcard.save();
        res.status(201).json(newFlashcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFlashcard = async (req, res) => {
    try {
        const flashcard = await Flashcard.findById(req.params.id);
        if (!flashcard) {
            return res.status(404).json({ message: 'Flashcard not found' });
        }
        await flashcard.remove();
        res.json({ message: 'Flashcard deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};