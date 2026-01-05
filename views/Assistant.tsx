
import React, { useState, useRef, useEffect } from 'react';
import { getPensionAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Benvenuto consulente. Sono il tuo esperto AI Gruppo Vomero. Come posso aiutarti oggi?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    try {
      const response = await getPensionAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Errore. Riprova." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "Novità 2026",
    "Zurich vs Allianz",
    "Anima Arti & Mestieri",
    "Contributo datoriale"
  ];

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-160px)] md:h-[calc(100vh-100px)] flex flex-col gap-4 animate-in slide-in-from-right-8 duration-700">
      <header className="hidden md:block">
        <h2 className="text-2xl font-bold text-slate-900">Vomero Intelligence</h2>
        <p className="text-slate-500 text-sm">Chiedi chiarimenti sulle normative e prodotti.</p>
      </header>

      <div 
        ref={scrollRef}
        className="flex-1 bg-white border border-slate-200 rounded-2xl md:rounded-3xl shadow-sm overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] md:max-w-[80%] p-3 md:p-4 rounded-xl md:rounded-2xl text-xs md:text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200 shadow-sm'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 p-3 rounded-xl rounded-tl-none border border-slate-200 flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {suggestions.map((s, idx) => (
            <button 
              key={idx}
              onClick={() => setInput(s)}
              className="whitespace-nowrap px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full border border-slate-200"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="relative">
          <input 
            type="text" 
            placeholder="Scrivi qui..." 
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 pr-16 text-sm focus:ring-4 focus:ring-blue-100 outline-none shadow-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
