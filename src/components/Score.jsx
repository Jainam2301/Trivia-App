import '../App.css';

export default function Score({ score, handlePlayAgain }) {
  return (
    <div className="score-container">
      <h2>Your Score: {score} / 5</h2>
      <button className="play-again-button" onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
}