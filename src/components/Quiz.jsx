import { useState } from 'react';
import '../App.css';


function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}


export default function Quiz({ questions, handleShowScore }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const options = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const handleContinue = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === currentQuestion.correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      } else {
        handleShowScore(score + (selectedAnswer === currentQuestion.correct_answer ? 1 : 0));
      }
    }
  };

  return (
    <div className='quiz-container'>
    <div className="question-container">
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p>{decodeHtml(currentQuestion.question)}</p>
      <div className="options">
        {options.map((option, idx) => (

          <button
            key={idx}
            className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => handleAnswerSelection(option)}
            disabled={selectedAnswer !== null}
          >
            {decodeHtml(option)}
          </button>
        ))}
      </div>
      <button
        className="continue-button"
        onClick={handleContinue}
        disabled={selectedAnswer === null}
      >
        Continue
      </button>
    </div>
    </div>
  );
}
