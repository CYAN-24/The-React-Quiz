import { useQuiz } from "../contexts/QuizContext";

function PrevButton() {
  const { dispatch, index } = useQuiz();

  if (index >= 0) {
    return (
      <button
        className="btn btn-ui"
        disabled={index === 0}
        onClick={() => dispatch({ type: "prevQuestion" })}
      >
        Prev
      </button>
    );
  }
}

export default PrevButton;
