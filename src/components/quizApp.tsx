import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";

export default function QuizApp() {
  let questions = [
    {
      id: 1,
      question: "Javascript is an _______ language?",
      answer: "Object Oriented",
      options: [
        "Object Oriented",
        "Object based",
        "Procedural",
        "None Of These",
      ],
    },
    {
      id: 2,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Randomely Access Memory",
        "Random Access Memory",
        "Read Accept Memory",
        "None Of These",
      ],
    },
    {
      id: 3,
      question: "What does Au stand for in the periodic table ?",
      answer: "Gold",
      options: ["Potassium", "Carbon", "Gold", "None Of These"],
    },
    {
      id: 4,
      question: "Who is the CEO of Twitter ?",
      answer: "Jack Dorsey",
      options: [
        "Bill Gates",
        "Jack Dorsey",
        "Charles Babbage",
        "None Of These",
      ],
    },
    {
      id: 5,
      question: "Who is the CEO of Microsoft ?",
      answer: "Bill Gates",
      options: [
        "Bill Gates",
        "Satya Narayana Nadella",
        "Mark Zuckerberg",
        "None Of These",
      ],
    },
  ];

  let [score, setScore] = useState(0);
  //   let currentQuestionIndex = 0;
  //   let currentQuestion = questions[currentQuestionIndex];
  let [currentQuestion, setCurrentQuestion] = useState(0);

  let next = (selectedAnswer: any) => {
    questionChange();
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  function questionChange() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore(score);
      alert("Your Score " + score);
    }
  }

  return (
    <>
      <Box className="bg d-flex align-items-center">
        <Container>
          <Box className="quizApp">
            <h1 className="text-center p-3 fw-bold">Quiz</h1>
            <Box className="line"></Box>
            <h3 className="ms-2">
              Ques no: <span>{currentQuestion + 1}</span>/
              <span>{questions.length}</span>
            </h3>
            <h2 id="displayQuestion" className="py-3 m-4 ">
              {questions[currentQuestion].question}
            </h2>
            <Box className="row py-5 m-3">
              {questions[currentQuestion].options.map((x, i) => (
                <Box className="col-md-6 my-3">
                  <button
                    key={i}
                    onClick={() => next(x)}
                    className="btn optionBtn text-white w-100 py-2"
                  >
                    {x}
                  </button>
                </Box>
              ))}
            </Box>
            <Box className="text-center my-2" id="nextPage">
              <p className="fw-bold">
                Score
                <span className="py-1 px-3 bg-black text-white border border-primary">
                  {score}
                </span>
              </p>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
