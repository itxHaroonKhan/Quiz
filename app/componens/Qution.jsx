import React, { useState } from "react";
import quizData from "./quiz.json";
import Reslte from "./Reslte"; 

function Qution() {


  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  
  const handleAnswer = (option) => {
    if (option === quizData[index].answer) {
      setScore(score + 10);
    }

    const next = index + 1;
    if (next < quizData.length) {
      setIndex(next);
    }
    
    else {
      setShowResult(true);
    }
  };



  if (showResult) {
    return <Reslte score={score} />;
  }

  return (
    <div>


      <h2>{quizData[index].question}</h2> <br />

      {quizData[index].options.map((o, i) => (

        <button key={i} onClick={() => handleAnswer(o)}> 

          {o}  
        </button>
      ))}
    </div>
  );
}

export default Qution;