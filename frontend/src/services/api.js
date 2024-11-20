import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Flashcard endpoints
export const getFlashcards = () => axios.get(`${API_BASE_URL}/flashcards`);
export const createFlashcard = (data) => axios.post(`${API_BASE_URL}/flashcards`, data);
export const deleteFlashcard = (id) => axios.delete(`${API_BASE_URL}/flashcards/${id}`);

// Quiz endpoints
export const saveQuizResult = (data) => axios.post(`${API_BASE_URL}/quiz-results`, data);
export const getQuizResults = () => axios.get(`${API_BASE_URL}/quiz-results`);