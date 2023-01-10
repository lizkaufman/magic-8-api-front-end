import { useState } from "react";
import "./App.css";
import Ball from "../Ball";
import Answer from "../Answer";

function App() {
  const [answer, setAnswer] = useState("Awaiting the sages...");

  async function fetchAnswer(): Promise<void> {
    console.log("working");
  }

  return (
    <main>
      <h1>Magic 8 Ball</h1>
      <h2>
        A free API that brings the prognosticating power of the magic 8 ball
        into the 21st century
      </h2>
      <a href="https://magic-8-api.onrender.com/api">
        <h3>https://magic-8-api.onrender.com/api</h3>
      </a>
      <Ball handleClick={fetchAnswer} />
      <p className="regular-text">Click the ball above to try it out.</p>
      <Answer answer={answer} />
    </main>
  );
}

export default App;
