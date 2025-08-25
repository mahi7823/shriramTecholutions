import { useState } from 'react';
import { Send } from 'lucide-react';
import type { ChatMessage } from '@/types';

export default function ChatbotDemo() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { type: 'bot', message: 'Hello! Welcome to our AI chatbot demo. How can I help you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const handleChatSend = () => {
    if (!userMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', message: userMessage }]);
    
    setTimeout(() => {
      const responses = [
        "I can help you with order placement, tracking, and product information. What would you like to know?",
        "Our AI system can process your request instantly. Let me check our database for you.",
        "Based on your query, I recommend checking our latest products. Would you like me to show them?",
        "I've found relevant information for you. Our system shows 98% accuracy in handling similar queries."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { type: 'bot', message: randomResponse }]);
    }, 1000);
    
    setUserMessage('');
  };

  return (
    <div className="space-y-4">
      <div className="h-64 border border-gray-200 dark:border-gray-600 rounded-lg p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`mb-3 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
              msg.type === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
            }`}>
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
        />
        <button
          onClick={handleChatSend}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}