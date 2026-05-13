import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const res = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transcript: text }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1>AI Transcript Analyzer</h1>

        <textarea
          rows="10"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste transcript here..."
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
          }}
        />

        <br />
        <br />

        <button
          onClick={analyze}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Analyze
        </button>

        {result && (
          <div style={{ marginTop: "30px" }}>
            <h2>Score: {result.score}/10</h2>

            <h3>Evidence</h3>
            <ul>
              {result.evidence.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>

            <h3>Gaps</h3>
            <ul>
              {result.gaps.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>

            <p style={{ color: "gray" }}>
              AI suggestions may contain errors. Please review manually.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;