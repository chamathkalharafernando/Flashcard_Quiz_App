# Flashcard Quiz Application

A full-stack web application for creating and studying flashcards with quiz functionality and progress tracking.

## Features

- Create and manage flashcards with questions and answers
- Organize flashcards by categories
- Interactive quiz mode
- Track quiz performance and progress
- View study statistics and history
- Responsive design for all devices

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios for API calls
- shadcn/ui components
- Lucide React icons

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- CORS for cross-origin requests

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/flashcard-app.git
cd flashcard-app
```

2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/flashcards
PORT=5000
NODE_ENV=development" > .env

# Start the server
npm run dev
```

3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env

# Start the application
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
flashcard-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── flashcardController.js
│   │   └── quizController.js
│   ├── models/
│   │   ├── Flashcard.js
│   │   └── QuizResult.js
│   ├── routes/
│   │   ├── flashcardRoutes.js
│   │   └── quizRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── alert.jsx
│   │   │   │   ├── button.jsx
│   │   │   │   ├── card.jsx
│   │   │   │   └── input.jsx
│   │   │   ├── AddCard.jsx
│   │   │   ├── FlashcardList.jsx
│   │   │   ├── Quiz.jsx
│   │   │   └── Statistics.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles.css
│   ├── .env
│   └── package.json
└── README.md
```

## API Endpoints

### Flashcards
- GET `/api/flashcards` - Get all flashcards
- POST `/api/flashcards` - Create new flashcard
- DELETE `/api/flashcards/:id` - Delete flashcard

### Quiz Results
- GET `/api/quiz-results` - Get quiz history
- POST `/api/quiz-results` - Save quiz result

## Usage

1. Adding Flashcards:
   - Click "Add Cards"
   - Enter question and answer
   - Select category
   - Click "Add Flashcard"

2. Taking Quiz:
   - Click "Start Quiz"
   - View question and click to reveal answer
   - Mark your answer as correct or incorrect
   - View final score at the end

3. Viewing Statistics:
   - Click "Statistics"
   - View performance history
   - Track progress over time

## Development

### Running Tests
```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
```

### Building for Production
```bash
# Frontend build
cd frontend
npm run build

# Backend build
cd backend
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- [React Documentation](https://reactjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
