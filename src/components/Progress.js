import { useQuiz } from "../contexts/QuizContext";
//
function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answers } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answers != null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
