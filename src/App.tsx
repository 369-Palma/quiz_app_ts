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
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      //check answer
      const correct = questions[number].correct_answer === answer;
      // Add score if is correct
      if (correct) setScore((prev) => prev + 1);
      // save answer in the right array
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
    //move to the next question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
      //Category.SCIENCE_NATURE
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
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <>
            <button className="start" onClick={startTrivia}>
              {
                /* gameOver && */
                score !== null && userAnswers.length === TOTAL_QUESTIONS
                  ? "Restart"
                  : "Start"
              }
            </button>
            {score !== null && userAnswers.length === TOTAL_QUESTIONS ? (
              <>
                {" "}
                <ResultPage score={score} total={TOTAL_QUESTIONS} />
              </>
            ) : null}
          </>
        ) : (
          <>
            {!gameOver ? <p className="score"> Score: {score}</p> : null}
            {loading && <p> Loading Questions ...</p>}
            {!loading && !gameOver && (
              <QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
              />
            )}
            {!gameOver &&
            !loading &&
            userAnswers.length === number + 1 &&
            number !== TOTAL_QUESTIONS - 1 ? (
              <button className="next" onClick={nextQuestion}>
                Next Question
              </button>
            ) : null}
          </>
        )}
      </Wrapper>
    </>
  );
};

export default App;
