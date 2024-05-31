import React, { useState } from "react";
import ChatGPTService from "./ChatGPTService";

const ChatComponent = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await ChatGPTService.sendMessage(input);
      const assistantMessage = { role: "assistant", content: response };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }

    setInput("");
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
