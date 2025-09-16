import { useState } from "react";
import "../public/style.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return;

    // Tambah pesan user ke UI
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Kirim ke API backend
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    if (data.text) {
      setMessages((prev) => [...prev, { role: "assistant", text: data.text }]);
    } else {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Error dari server 😅" },
      ]);
    }
  };

  return (
    <div className="container">
      <h1>🤖 AI Chat</h1>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.role === "user" ? "user" : "assistant"}`}
          >
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pesan..."
        />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
    }
