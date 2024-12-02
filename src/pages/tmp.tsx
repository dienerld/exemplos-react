import { useState } from 'react';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

export function QuizApp() {
  // do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hasFinished, setHasFinished] = useState(false);

  function handleSubmit() {
    if (!selectedOption) return;

    const isCorrect = selectedOption === questions[questionIndex].correct;
    setFeedback(isCorrect ? 'Correto' : 'Errado');
    if (isCorrect) setScore((prev) => prev + 1);

    if (questionIndex < questions.length - 1) {
      setSelectedOption('');
      setQuestionIndex((prev) => prev + 1);
    } else {
      setHasFinished(true);
      setFeedback(
        `Quiz Completo!! Você acertou ${score} de ${questions.length}`
      );
    }
  }

  return (
    <div style={style.container}>
      {!hasFinished ? (
        <>
      <div id="question" style={style.question}>
        <h2>{questions[questionIndex].question}</h2>
      </div>
          <div style={style.options}>
            {questions[questionIndex].options.map((opt, index) => (
              <div key={opt}>
                <input
                  id={`option${index + 1}`}
                  name="quiz-option"
                  value={opt}
                  checked={selectedOption === opt}
                  onChange={() => setSelectedOption(opt)}
                  type="radio"
                />
                <label htmlFor={`option${index + 1}`}>{opt}</label>
              </div>
            ))}
          </div>
          <button style={style.button} id="submitBtn" onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : undefined}
      <div id="feedback" style={style.feedback}>
        {feedback}
      </div>
    </div>
  );
}
