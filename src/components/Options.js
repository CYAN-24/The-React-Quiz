import { useQuiz } from "../contexts/QuizContext";

function Options({ question }) {
  const { dispatch, answers, index } = useQuiz();
  const hasAnswered = answers[index] != null;

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answers[index] ? "answer" : ""} ${
            hasAnswered && (i === question.correctOption ? "correct" : "wrong")
          } ${
            i === answers[index] &&
            answers[index] !== question.correctOption &&
            "incorrect"
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
