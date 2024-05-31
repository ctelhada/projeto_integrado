import axios from "axios";

const API_KEY = "YOUR_OPENAI_API_KEY"; // Replace with your OpenAI API key

const ChatGPTService = {
  sendMessage: async (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message },
      ],
    };
    try {
      const response = await axios.post(url, data, { headers });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error sending message to ChatGPT:", error);
      throw error;
    }
  },
};

export default ChatGPTService;
