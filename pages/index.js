// pages/index.js
import { useState } from "react";
import "../public/style.css";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.reply);
  }

  return (
    <div className="container">
      <h1>My AI Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ketik pesan…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Kirim</button>
      </form>
      <div className="response">{response}</div>
    </div>
  );
    }
