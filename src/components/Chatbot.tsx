import React, { useState } from 'react';

const responses = [
  {
    keywords: ['apply', 'admission', 'enrol', 'register', 'application'],
    answer: "Applications are handled directly at the school. Visit us at Thaba-Chicha A/A, Mt Fletcher, 4730, or call us on 084 410 2314. You'll need your latest school report, birth certificate, and a parent/guardian ID."
  },
  {
    keywords: ['fee', 'fees', 'cost', 'pay', 'free', 'no-fee'],
    answer: "Mothibisi SSS is a no-fee public school — there are no tuition fees charged to learners."
  },
  {
    keywords: ['grade', 'grades', 'offer'],
    answer: "We offer Grades 8 through 12."
  },
  {
    keywords: ['subject', 'subjects', 'curriculum', 'math', 'science', 'english'],
    answer: "We offer Mathematics, Mathematical Literacy, English, Life Sciences, Physical Sciences, Geography, History, Business Studies, and Life Orientation, in line with the CAPS curriculum."
  },
  {
    keywords: ['matric', 'exam', 'preparation', 'revision', 'nsc'],
    answer: "Absolutely. Matric preparation is a key focus at Mothibisi SSS. We run structured revision programmes and provide learner support to help Grade 12 students succeed in the NSC examinations."
  },
  {
    keywords: ['facility', 'facilities', 'classroom', 'library', 'science'],
    answer: "We have well-equipped classrooms, a library and resource room, a science room, sports grounds, and a dedicated administration block — all set in the scenic Thaba-Chicha mountain area."
  },
  {
    keywords: ['contact', 'phone', 'call', 'reach', 'address', 'where', 'location'],
    answer: "You can call us on 084 410 2314 or visit us at Thaba-Chicha A/A, Mt Fletcher, 4730, Eastern Cape."
  },
  {
    keywords: ['principal', 'head', 'leader', 'mgojo'],
    answer: "The principal of Mothibisi Senior Secondary School is Mr VS Mgojo."
  },
  {
    keywords: ['motto', 'striving', 'excel'],
    answer: "Our motto is 'We Strive to Excel' — it drives everything we do, from academics to sport to community participation."
  },
  {
    keywords: ['where', 'location', 'mt fletcher', 'thaba-chicha', 'maluti'],
    answer: "We're located at Thaba-Chicha A/A, Mt Fletcher, in the Eastern Cape — within the Alfred Nzo West Education District."
  },
  {
    keywords: ['learners', 'students', 'number', 'count', '387'],
    answer: "Mothibisi SSS currently has approximately 387 learners and 13 educators."
  },
  {
    keywords: ['colour', 'colors', 'maroon', 'uniform'],
    answer: "Our school colours are maroon and white."
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: "👋 Hi! I'm the Mothibisi Senior Secondary School assistant. Ask me anything about admissions, subjects, facilities, school life, or how to contact us!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const findResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();
    for (const response of responses) {
      if (response.keywords.some(keyword => lower.includes(keyword))) {
        return response.answer;
      }
    }
    return "That's a great question! For more details, please contact us directly on 084 410 2314 or visit us at Thaba-Chicha A/A, Mt Fletcher, 4730.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, role: 'bot' as const, text: findResponse(input) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#800020',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(128, 0, 32, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          zIndex: 1000,
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Open chatbot"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '24px',
          width: '350px',
          height: '500px',
          background: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            background: '#800020',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
            }}>
              🏔️
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem' }}>
                Ask Mothibisi
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>
                Your school assistant
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '1.2rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: '#F5E6EA',
          }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? '#800020' : '#FFFFFF',
                  color: msg.role === 'user' ? '#FFFFFF' : '#222222',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                }}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div style={{
                maxWidth: '85%',
                padding: '12px 16px',
                borderRadius: '16px 16px 16px 4px',
                background: '#FFFFFF',
                color: '#666',
                fontSize: '0.9rem',
              }}>
                typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid #F5E6EA',
            display: 'flex',
            gap: '8px',
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                padding: '10px 16px',
                border: '2px solid #D4A0AD',
                borderRadius: '20px',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: '10px 16px',
                background: '#800020',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};