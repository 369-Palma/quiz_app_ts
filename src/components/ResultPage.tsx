type Props = {
  score: number;
  total: number;
};

const getComment = (score: number, total: number): string => {
  if (score <= total / 2)
    return (
      "You answered correctly at " +
      score +
      " questions on " +
      total +
      ". You didn't pass the test, try again!"
    );
  if (score >= total / 2 + 1 && score <= total)
    return (
      "You answered correctly at " +
      score +
      " questions on" +
      total +
      ". Congratulations, you pass the test!!!"
    );
  return (
    "Wow you answered correctly at all the " + total + " questions! Good job!"
  );
};

export const ResultPage: React.FC<Props> = ({ score, total }) => {
  return (
    <>
      {score !== null ? (
        <p className="risultato"> {getComment(score, total)}</p>
      ) : null}
    </>
  );
};
