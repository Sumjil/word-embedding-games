import React, { useState } from 'react';

const QuizQuestion = ({ question, options, correctAnswer, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    onAnswerSelected(option === correctAnswer);
  };

  return (
    <div>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            style={{
              cursor: 'pointer',
              fontWeight: selectedAnswer === option ? 'bold' : 'normal',
            }}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;
