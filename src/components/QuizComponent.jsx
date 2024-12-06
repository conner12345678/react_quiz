import '../css/QuizComponent.css'

const QuizComponent = ({ question, answers }) => {
  return (
    <div className="question">
        <h2>Question 1</h2>
        <p>What is the capital of France?</p>
        <div className="answers">
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
        </div>
  
    </div>
  )
}

export default QuizComponent