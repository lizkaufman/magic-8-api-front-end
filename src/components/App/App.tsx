import { useState } from "react";
import "./App.css";
import GitHubButton from "react-github-btn";
import Ball from "../Ball";
import Answer from "../Answer";

function App() {
  const [answer, setAnswer] = useState("...");

  async function fetchAnswer(): Promise<void> {
    const res = await fetch("https://magic-8-api.onrender.com/");
    const data = await res.json();
    setAnswer(data.answer);
  }

  return (
    <>
      <main>
        <h1>Magic 8 Ball</h1>
        <h2>
          A free API that brings the prognosticating power of the magic 8 ball
          into the 21st century
        </h2>
        <a href="https://magic-8-api.onrender.com/">
          <h3>https://magic-8-api.onrender.com/</h3>
        </a>
        <Ball handleClick={fetchAnswer} />
        <p className="regular-text">Click the ball above to try it out.</p>
        <Answer answer={answer} />
      </main>
      <footer>
        <GitHubButton
          href="https://github.com/lizkaufman/magic-8-api"
          data-color-scheme="no-preference: light_high_contrast; light: light_high_contrast; dark: dark_high_contrast;"
          data-size="large"
          aria-label="Star lizkaufman/magic-8-api on GitHub"
        >
          Star
        </GitHubButton>
      </footer>
    </>
  );
}

export default App;
