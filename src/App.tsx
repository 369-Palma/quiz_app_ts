"use client";
/* https://opentdb.com/api.php?amount=10 */

/* import "./App.css"; */
import { QuestionCard } from "./components/QuestionCard";
import { useState } from "react";
import { fetchQuizQuestions, QuestionState, Difficulty } from "./API";
import { ResultPage } from "./components/ResultPage";
import { GLobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion < TOTAL_QUESTIONS) {
      setNumber(nextQuestion);
    }
  };

  // Funzione per verificare e mostrare i risultati
  const checkResults = () => {
    setGameOver(true);
  };

  const startTrivia = async () => {
    setScore(0)
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  return (
    <>
      <GLobalStyle />
      <Wrapper>
        <h1>QUIZ QUEST</h1>
        {gameOver ? (
          <>
            <button className="start" onClick={startTrivia}>
              {score !== null && userAnswers.length === TOTAL_QUESTIONS
                ? "Restart"
                : "Start"}
            </button>
            {score !== null && userAnswers.length === TOTAL_QUESTIONS ? (
              <ResultPage score={score} total={TOTAL_QUESTIONS} />
            ) : null}
          </>
        ) : (
          <>
            <p className="score">Score: {score}</p>
            {loading && <p>Loading Questions...</p>}
            {!loading && (
              <QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
              />
            )}
            {/* Mostra "Next Question" se ci sono domande successive; altrimenti mostra "Check results" */}
            {!loading &&
              userAnswers.length === number + 1 &&
              number < TOTAL_QUESTIONS - 1 && (
                <button className="next" onClick={nextQuestion}>
                  Next Question
                </button>
              )}
            {!loading && number === TOTAL_QUESTIONS - 1 && userAnswers.length === TOTAL_QUESTIONS && (
              <button className="next" onClick={checkResults}>
                Check results
              </button>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};

export default App;