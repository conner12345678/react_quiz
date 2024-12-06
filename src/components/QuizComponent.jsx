import '../css/QuizComponent.css'
import { useState } from 'react'

const QuizComponent = ({ question, answers, next, num, correct }) => {
  const [right, setRight] = useState(0)
  const [wrong, setWrong] = useState(0)
  const isCorrect = (answer) => {
    if(answer === correct[num]){
      if(num + 1 === correct.length){
        if(right <= correct.length-1){
          setRight(right + 1)
          setTimeout(() => {
            setRight(0)
            setWrong(0)
          }, 1000);
        }else{
          setTimeout(() => {
            setRight(0)
            setWrong(0)
          }, 1000);
        }
      }else{
        setRight(right + 1)
        }
      }else{
        if(num + 1 === correct.length){
          if(wrong <= correct.length-1){
            setWrong(wrong + 1)
            setTimeout(() => {
              setRight(0)
              setWrong(0)
            }, 1000);
          }else{
            setTimeout(() => {
              setRight(0)
              setWrong(0)
            }, 1000);
          }
      }else{
        setWrong(wrong + 1)
      }
    }
  }

  var style = {
    animation: "spin 2s linear"
  }
  return (
    <div className="question">
        <h1>Points: {right} | Misses {wrong}</h1>
        <h2>Question {num + 1}</h2>
        <p>{question}</p>
        <div className="answers">
            <button onClick={()=>{next(); isCorrect(answers[0])}}>{answers[0]}</button>
            <button onClick={()=>{next(); isCorrect(answers[1])}}>{answers[1]}</button>
            <button onClick={()=>{next(); isCorrect(answers[2])}}>{answers[2]}</button>
            <button onClick={()=>{next(); isCorrect(answers[3])}}>{answers[3]}</button>
        </div>
  
    </div>
  )
}

export default QuizComponent