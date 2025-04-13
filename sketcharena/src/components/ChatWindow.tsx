import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
}

const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'Player1',
    text: 'Hey everyone! Ready for the game?',
    timestamp: new Date(Date.now() - 60000 * 15)
  },
  {
    id: '2',
    sender: 'GameMaster',
    text: 'Welcome to the session! Let\'s start in 5 minutes.',
    timestamp: new Date(Date.now() - 60000 * 10)
  },
  {
    id: '3',
    sender: 'Player2',
    text: 'I just finished setting up my character.',
    timestamp: new Date(Date.now() - 60000 * 5)
  },
  {
    id: '4',
    sender: 'Player3',
    text: 'Can someone explain the new rules?',
    timestamp: new Date(Date.now() - 60000 * 2)
  },
  {
    id: '5',
    sender: 'GameMaster',
    text: 'Sure! I\'ll go over everything before we start.',
    timestamp: new Date(Date.now() - 60000)
  }
];

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      sender: 'You',
      text: newMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isChatOpen]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  if (!isChatOpen) {
    return (
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed right-4 bottom-4 p-3 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        title="Open Chat"
        aria-label="Open chat window"
      >
        <span className="text-white text-xl">💬</span>
      </button>
    );
  }
  
  return (
    <div className="flex flex-col h-full bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 shadow-xl">
      {/* Header */}
      <div className="p-3 border-b border-gray-700 flex justify-between items-center bg-gray-900">
        <h2 className="text-lg font-semibold text-purple-400">Chat</h2>
        <button
          onClick={() => setIsChatOpen(false)}
          className="text-gray-400 hover:text-white transition-colors"
          title="Close Chat"
          aria-label="Close chat window"
        >
          <span className="text-xl">✕</span>
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-3 ${message.sender === 'You' ? 'ml-auto' : ''} max-w-[85%]`}
          >
            <div className={`px-3 py-2 rounded-lg ${
              message.sender === 'You' 
                ? 'bg-purple-600 text-white rounded-br-none' 
                : 'bg-gray-700 text-white rounded-bl-none'
            }`}>
              {message.sender !== 'You' && (
                <div className="font-medium text-purple-400 text-sm mb-1">
                  {message.sender}
                </div>
              )}
              <p className="break-words">{message.text}</p>
            </div>
            <div className={`text-xs text-gray-400 mt-1 ${
              message.sender === 'You' ? 'text-right' : 'text-left'
            }`}>
              {formatTime(message.timestamp)}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="p-3 border-t border-gray-700 bg-gray-900">
        <div className="relative">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="w-full bg-gray-700 text-white rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none placeholder-gray-400"
            rows={2}
            aria-label="Message input"
          />
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className={`absolute right-2 bottom-2 p-1.5 rounded-full transition-colors ${
              newMessage.trim() 
                ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                : 'bg-purple-600/40 text-white/50 cursor-not-allowed'
            }`}
            title="Send Message"
            aria-label="Send message"
          >
            <span className="text-xl">↑</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;