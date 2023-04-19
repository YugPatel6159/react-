import React from "react";
import { useState } from "react";
import styles from "./question.css";
import Result from "./Result";

function Questions() {
  let questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in the solar system?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Jupiter",
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Everest", "Kilimanjaro", "Denali", "Aconcagua"],
      answer: "Everest",
    },
    {
      question: "Who wrote the Harry Potter series of books?",
      options: [
        "J.K. Rowling",
        "Stephen King",
        "Dan Brown",
        "George R.R. Martin",
      ],
      answer: "J.K. Rowling",
    },
  ];
  const [question, setQuestion] = useState(questions[0]);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const answerSelected = (option, question) => {
    let currentQuestion = questions.find((res) => res.question == question);

    if (option === currentQuestion.answer) {
      setCorrectAnswer(correctAnswer + 1);
    }
    if (questionCount < questions.length - 1) {
      setQuestionCount(questionCount + 1);
      setQuestion(questions[questionCount + 1]);
    } else {
      // user has answered the last question
      setShowResult(true);
      
    }
  };

  const reset=()=>{
      setQuestion(questions[0]);
      setQuestionCount(0)
      setCorrectAnswer(0);
      setShowResult(false);
  }

  return (
    <>
    <div className="container">
      {showResult? <button className="btn btn-primary" onClick={reset}>Reset</button>:null}  
    </div>
      {showResult ? (
        <div className="container d-flex mt-5">
          
          <div>
            <Result
              correctAnswer={correctAnswer}
              totalQuestion={questions.length}
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <form action="">
              <div className="form-group">
                <span className="form-control">{question.question}</span>
                {question
                  ? question.options.map((option) => (
                      <div className="formGroup">
                        <div
                          className="form-control options"
                          onClick={() =>
                            answerSelected(option, question.question)
                          }
                        >
                          {option}
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </form>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default Questions;
