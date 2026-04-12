import React from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [popupText, setPopupText] = React.useState('');
  const [messages, setMessages] = React.useState([
    { role: 'bot', text: 'Hello! I am the Bharat Pursuit AI assistant. How can I help you build your global market presence today?' }
  ]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      setPopupText('');
      return;
    }

    const sequence = [
      { text: 'Ask me! ✨', delay: 2000 },
      { text: '', delay: 6000 },
      { text: 'I am here to help 👋', delay: 7500 },
      { text: '', delay: 13000 },
    ];
    const cycleLength = 14000;

    const timers = sequence.map(({ text, delay }) =>
      setTimeout(() => setPopupText(text), delay)
    );

    const interval = setInterval(() => {
      sequence.forEach(({ text, delay }) => {
        timers.push(setTimeout(() => setPopupText(text), delay));
      });
    }, cycleLength);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const updatedMessages = [...messages, { role: 'user', text: userMsg }];

    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      // You can use Groq (fast & free API) or OpenAI. Just swap the URL and API Key!
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile", // Valid Groq Models: llama-3.3-70b-versatile, llama-3.1-8b-instant (or gpt-4o-mini for OpenAI)
          messages: [
            {
              role: "system",
              content: "You are Bharat AI, a highly professional senior consulting assistant for Bharat Pursuit. Your goal is to help users understand our strategic solutions, positioning, and global market expansion services. Keep answers very concise (max 2-3 sentences), premium, and professional. Always steer users toward booking a strategy call or using our contact form."
            },
            ...updatedMessages.map(m => ({
              role: m.role === 'bot' ? 'assistant' : 'user',
              content: m.text
            }))
          ],
          temperature: 0.5,
          max_tokens: 150
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status} ${errorText}`);
      }

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: `API Error: ${error.message}. (If it says 'Failed to fetch', it is likely a CORS block or adblocker).` }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {popupText && !isOpen && (
        <div className="chatbot-tooltip">
          {popupText}
          <span className="material-symbols-outlined">neurology</span>
        </div>
      )}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
      >
        <span className="material-symbols-outlined">{isOpen ? 'close' : 'neurology'}</span>
      </button>

      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <span className="bot-avatar-icon material-symbols-outlined">neurology</span>
            <div>
              <h4>Bharat AI</h4>
              <span>Online</span>
            </div>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble ${msg.role}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chat-bubble bot typing-indicator">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-area" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={!input.trim()}>
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
