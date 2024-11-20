const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required'],
        trim: true
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'],
        trim: true
    },
    category: {
        type: String,
        default: 'General',
        enum: ['General', 'Science', 'History', 'Math']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Flashcard', FlashcardSchema);
