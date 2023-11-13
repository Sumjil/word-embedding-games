import React, { useState } from 'react';

const ContextPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [guessedWords, setGuessedWords] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddWord = () => {
    if (inputValue.trim() !== '') {
      const randomValue = Math.floor(Math.random() * 11); // Random value between 0 and 10
      const newWord = { word: inputValue, value: randomValue };
      setGuessedWords([...guessedWords, newWord]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Guess the Word</h1>
      <div>
        <label>
          Enter a word:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button onClick={handleAddWord}>Add</button>
      </div>
      <div>
        <h2>Guessed Words:</h2>
        <ul>
          {guessedWords
            .sort((a, b) => a.value - b.value) // Sort in ascending order based on the random value
            .map((wordObj, index) => (
              <li key={index}>
                {wordObj.value === 0 ? (
                  <strong>Winner: {wordObj.word} - {wordObj.value}</strong>
                ) : (
                  `${wordObj.word} - ${wordObj.value}`
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ContextPage;