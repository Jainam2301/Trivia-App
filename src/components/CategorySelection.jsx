import '../App.css';
import logo from '../assets/logo.png';
import { useState } from 'react';

export default function CategorySelection({ handleStartQuiz }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = {
    'General Knowledge': 'https://opentdb.com/api.php?amount=5&category=9&type=multiple',
    'Film': 'https://opentdb.com/api.php?amount=5&category=11&type=multiple',
    'Music': 'https://opentdb.com/api.php?amount=5&category=12&type=multiple',
    'Television': 'https://opentdb.com/api.php?amount=5&category=14&type=multiple',
    'Video Games': 'https://opentdb.com/api.php?amount=5&category=15&type=multiple',
  };

  const fetchQuestions = async () => {
    if (selectedCategory) {
      const apiUrl = categories[selectedCategory];
      const res = await fetch(apiUrl);
      const data = await res.json();
      handleStartQuiz(data.results);
      console.log(data.results);
    }
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="Trivia Logo" />
      <h2>Choose your trivia category</h2>
      <div className="categories">
        {Object.keys(categories).map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        className="continue-button"
        onClick={fetchQuestions}
        disabled={!selectedCategory}
      >
        Continue
      </button>
    </div>
  );
}