import { useState, useEffect } from 'react';
import './App.css';
import CategorySelection from './components/CategorySelection';
import Quiz from './components/Quiz';
import Score from './components/Score';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const handleStartQuiz = (selectedQuestions) => {
    setQuestions(selectedQuestions);
    setShowQuiz(true);
  };

  const handleShowScore = (finalScore) => {
    setScore(finalScore);
    setShowQuiz(false);
    setShowScore(true);
  };

  const handlePlayAgain = () => {
    setShowScore(false);
    setShowQuiz(false);
    setScore(0);
  };

  return (
    <>
      {!showQuiz && !showScore && <CategorySelection handleStartQuiz={handleStartQuiz} />}
      {showQuiz && <Quiz questions={questions} handleShowScore={handleShowScore} />}
      {showScore && <Score score={score} handlePlayAgain={handlePlayAgain} />}
    </>
  );
}

export default App;