import React from "react";
import "./Answer.css";

interface answerProps {
  answer: string;
}

function Answer({ answer }: answerProps) {
  return (
    <section id="answer-container">
      <p id="answer-text">{answer}</p>
    </section>
  );
}

export default Answer;
