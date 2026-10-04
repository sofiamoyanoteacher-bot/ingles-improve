import { useEffect, useRef, useState } from 'react';
import { api } from '../../api';
import { useAuth } from '../../context/AuthContext.jsx';

export default function StudentMessages() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [body, setBody] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    load();
    const id = setInterval(load, 8000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function load() {
    try {
      const { messages } = await api.studentGetMessages();
      setMessages(messages);
    } catch (_) {}
  }

  async function send() {
    if (!body.trim() || sending) return;
    setSending(true);
    setError('');
    try {
      await api.studentSendMessage(body.trim());
      setBody('');
      load();
    } catch (e) {
      setError(e.message || 'Could not send message. Please try again.');
    } finally {
      setSending(false);
    }
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">💬 Messages</h1>

      <div className="bg-white rounded-2xl border border-gray-200 flex flex-col" style={{ height: 'calc(100vh - 180px)' }}>
        {/* header */}
        <div className="px-5 py-3 border-b border-gray-100 text-sm font-semibold text-gray-600">
          Chat with your teacher
        </div>

        {/* message list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <p className="text-xs text-gray-400 text-center mt-10">
              No messages yet. Send your teacher a message!
            </p>
          )}
          {messages.map((m) => {
            const isMe = m.sender_role === 'student';
            return (
              <div key={m.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm
                  ${isMe
                    ? 'bg-gradient-to-br from-sky-500 to-violet-500 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'}`}>
                  <div>{m.body}</div>
                  <div className={`text-xs mt-1 ${isMe ? 'text-white/60' : 'text-gray-400'}`}>
                    {isMe ? 'You' : 'Teacher'} · {new Date(m.created_at).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* input */}
        {error && <div className="px-4 py-2 text-xs text-red-500 bg-red-50 border-t border-red-100">{error}</div>}
        <div className="px-4 py-3 border-t border-gray-100 flex gap-2">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            onKeyDown={onKey}
            placeholder="Write a message… (Enter to send)"
            rows={1}
            className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:border-violet-400"
          />
          <button
            onClick={send}
            disabled={sending || !body.trim()}
            className="px-4 py-2 bg-gradient-to-br from-sky-500 to-violet-500 text-white rounded-xl text-sm font-medium disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
