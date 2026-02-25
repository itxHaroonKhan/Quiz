import React from "react";

const Reslte = ({ score }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} 
      </p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Reslte;