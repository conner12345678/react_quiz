import QuizComponent from '../components/QuizComponent'
import { useState } from 'react'
const QuizPage = () => {
  const [index, setIndex] = useState(0)
  const questions = [
    "Which director is known for the films *Inception* and *The Dark Knight*?",
    "Who played the character Jack Dawson in *Titanic*?",
    "What is the highest-grossing movie of all time (as of 2024)?",
    "Which film features the quote 'May the Force be with you'?",
    "Who won the Best Director Oscar for *The Shape of Water*?",
    "What movie is famously known for the line 'Here's looking at you, kid'?",
    "Which Marvel movie first introduced the character Black Panther?",
    "Who played the role of the Joker in *The Dark Knight*?",
    "What is the name of the spaceship in the *Alien* movie franchise?",
    "Which animated movie features the song 'Let It Go'?",
    "Which actor starred as Maximus in *Gladiator*?",
    "What was the first movie in the *Harry Potter* series?",
    "Which film is about the sinking of a whaling ship called the Essex?",
    "What year was the original *Jurassic Park* movie released?",
    "What is the name of the lead character in *The Matrix*?",
    "Which movie won the first Academy Award for Best Picture in 1929?",
    "What is the title of the sequel to *Blade Runner* released in 2017?",
    "Which 1994 film features the characters Andy Dufresne and Ellis 'Red' Redding?",
    "What is the name of the kingdom in *The Lion King*?",
    "Who directed *Pulp Fiction*?"
  ];
  const answers = [
    [
      "A. Christopher Nolan",
      "B. Steven Spielberg",
      "C. Quentin Tarantino",
      "D. Martin Scorsese"
    ],
    [
      "A. Matt Damon",
      "B. Leonardo DiCaprio",
      "C. Brad Pitt",
      "D. Johnny Depp"
    ],
    [
      "A. *Avatar*",
      "B. *Avengers: Endgame*",
      "C. *Titanic*",
      "D. *Star Wars: The Force Awakens*"
    ],
    [
      "A. *The Godfather*",
      "B. *Star Wars: A New Hope*",
      "C. *Back to the Future*",
      "D. *The Lord of the Rings: The Fellowship of the Ring*"
    ],
    [
      "A. Guillermo del Toro",
      "B. Alfonso Cuarón",
      "C. James Cameron",
      "D. Peter Jackson"
    ],
    [
      "A. *Gone with the Wind*",
      "B. *Casablanca*",
      "C. *Citizen Kane*",
      "D. *Singing in the Rain*"
    ],
    [
      "A. *Iron Man*",
      "B. *Avengers: Age of Ultron*",
      "C. *Captain America: Civil War*",
      "D. *Black Panther*"
    ],
    [
      "A. Joaquin Phoenix",
      "B. Heath Ledger",
      "C. Jared Leto",
      "D. Jack Nicholson"
    ],
    [
      "A. Nostromo",
      "B. Millennium Falcon",
      "C. Discovery One",
      "D. Enterprise"
    ],
    [
      "A. *Tangled*",
      "B. *Moana*",
      "C. *Frozen*",
      "D. *Cinderella*"
    ],
    [
      "A. Mel Gibson",
      "B. Russell Crowe",
      "C. Gerard Butler",
      "D. Brad Pitt"
    ],
    [
      "A. *Harry Potter and the Goblet of Fire*",
      "B. *Harry Potter and the Philosopher's Stone*",
      "C. *Harry Potter and the Chamber of Secrets*",
      "D. *Harry Potter and the Prisoner of Azkaban*"
    ],
    [
      "A. *The Perfect Storm*",
      "B. *In the Heart of the Sea*",
      "C. *Master and Commander*",
      "D. *Cast Away*"
    ],
    [
      "A. 1993",
      "B. 1995",
      "C. 1997",
      "D. 1999"
    ],
    [
      "A. Neo",
      "B. Morpheus",
      "C. Trinity",
      "D. Cypher"
    ],
    [
      "A. *Wings*",
      "B. *Sunrise*",
      "C. *Metropolis*",
      "D. *The Jazz Singer*"
    ],
    [
      "A. *Blade Runner 2049*",
      "B. *Blade Runner: The Final Cut*",
      "C. *Blade Runner Origins*",
      "D. *Blade Runner Legacy*"
    ],
    [
      "A. *The Green Mile*",
      "B. *The Shawshank Redemption*",
      "C. *Forrest Gump*",
      "D. *Pulp Fiction*"
    ],
    [
      "A. Pride Rock",
      "B. Asgard",
      "C. Wakanda",
      "D. Gondor"
    ],
    [
      "A. Quentin Tarantino",
      "B. Martin Scorsese",
      "C. Francis Ford Coppola",
      "D. Stanley Kubrick"
    ]
  ];
  const correct = [
    "A. Christopher Nolan",
    "B. Leonardo DiCaprio",
    "B. *Avengers: Endgame*",
    "B. *Star Wars: A New Hope*",
    "A. Guillermo del Toro",
    "B. *Casablanca*",
    "C. *Captain America: Civil War*",
    "B. Heath Ledger",
    "A. Nostromo",
    "C. *Frozen*",
    "B. Russell Crowe",
    "B. *Harry Potter and the Philosopher's Stone*",
    "B. *In the Heart of the Sea*",
    "A. 1993",
    "A. Neo",
    "A. *Wings*",
    "A. *Blade Runner 2049*",
    "B. *The Shawshank Redemption*",
    "A. Pride Rock",
    "A. Quentin Tarantino"
  ];
  
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