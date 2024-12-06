import QuizComponent from '../components/QuizComponent'
import { useState } from 'react'
const QuizPage = () => {
  const [index, setIndex] = useState(0)
  const questions = ["What is the capital of France?", "What is the capital of Germany?", "What is the capital of Canada?", "What is the capital of India?"]
  const answers = [["Berlin", "London", "Paris", "Tokyo"], ["Madrid", "London", "Paris", "Berlin"], ["Ottawa", "Vancouver", "Toronto", "Canada"], ["India", "Mumbai", "Kolkata", "Delhi"]]
  const correct = ["Paris", "Berlin", "Ottawa",  "Delhi"]
  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1)
    }else if(index === questions.length - 1) {
      setTimeout(() => {
        alert("Quiz Complete!")
        setIndex(0)
      }, 1000);
    }
  }
  return (
    <QuizComponent question={questions[index]} answers={answers[index]} next={()=>handleNext()} num={index} correct={correct}/>
  )
}

export default QuizPage