
import { useState } from 'react';
import { Send } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm your friendly tutor assistant. How can I help you with your studies today?", 
      sender: "bot" 
    }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (input.trim() === "") return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user"
    };
    
    setMessages([...messages, newUserMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Ask Avam Neupane for how to access OpenAI's API token",
        sender: "bot"
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="page-container">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">AI Tutor Assistant</h1>
      
      <div className="bg-white shadow-lg rounded-xl border border-gray-100 mb-8 max-w-4xl mx-auto flex flex-col h-[70vh]">
        <div className="p-4 bg-blue-50 rounded-t-xl border-b border-gray-100">
          <h2 className="font-medium">Ask me anything about your school subjects!</h2>
          <p className="text-sm text-gray-600">I can help with math, science, english and social studies.</p>
        </div>
        
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user" 
                    ? "bg-blue-500 text-white rounded-tr-none" 
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
      
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 max-w-4xl mx-auto">
        <h3 className="font-semibold text-lg mb-2">How to use the AI Tutor</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Ask questions related to math, science, english, or social studies</li>
          <li>Be specific in your questions for better answers</li>
          <li>You can ask for step-by-step explanations for math problems</li>
          <li>Request examples if you need further clarification</li>
          <li>The AI tutor is here to help you learn, not to do your homework for you</li>
        </ul>
      </div>
    </div>
  );
};

export default Chatbot;
