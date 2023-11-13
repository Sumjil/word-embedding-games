import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';

const questions = [
  {
    title: 'King - Man + Woman = ?',
    options: ['Queen', 'Kingdom', 'Cat', 'House'],
    correctAnswer: 'Queen',
  },
  {
    title: 'math - thinking + politics = ?',
    options: ['sociology', 'ethics', 'economics', 'science'],
    correctAnswer: 'economics',
  },
  {
    title: 'angel - good + evil = ?',
    options: ['shadow', 'tarzan', 'demon', 'devil'],
    correctAnswer: 'devil',
  },
  {
    title: 'writer - shame + fame = ?',
    options: ['producer', 'entrepreneur', 'artist', 'blogger'],
    correctAnswer: 'producer',
  },
  // Add more questions as needed
];

const QuizPage = () => {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const question = questions[step];

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setStep(step + 1);
  };

  return (
    <div>
      <h1>Quiz</h1>
      {step < questions.length ? (
        <QuizQuestion
          key={step}
          question={question.title}
          options={question.options}
          correctAnswer={question.correctAnswer}
          onAnswerSelected={handleAnswerSelected}
        />
      ) : (
        <p>Quiz completed! Your Score: {score}</p>
      )}
    </div>
  );
};

export default QuizPage;
