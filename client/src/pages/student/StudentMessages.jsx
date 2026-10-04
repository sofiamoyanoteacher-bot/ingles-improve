import { useEffect, useRef, useState } from 'react';
import { api } from '../../api';

export default function StudentMessages() {
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

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
      const data = await api.studentGetMessages();
      if (data && Array.isArray(data.messages)) {
        // Merge: keep any optimistic (tmp_) messages not yet confirmed, add new server ones
        setMessages(prev => {
          const serverIds = new Set(data.messages.map(m => String(m.id)));
          const pending = prev.filter(m => String(m.id).startsWith('tmp_') && !serverIds.has(m.id));
          return [...data.messages, ...pending];
        });
      }
    } catch (e) {
      console.error('load messages error', e);
    }
  }

  async function send() {
    const text = draft.trim();
    if (!text || sending) return;

    // Optimistic: show immediately
    const tempId = `tmp_${Date.now()}`;
    const tempMsg = { id: tempId, sender_role: 'student', body: text, created_at: new Date().toISOString() };
    setMessages(prev => [...prev, tempMsg]);
    setDraft('');
    setError('');
    setSending(true);

    try {
      const data = await api.studentSendMessage(text);
      // Replace temp with the server-confirmed message
      const confirmed = data?.message || { ...tempMsg, id: Date.now() };
      setMessages(prev => prev.map(m => m.id === tempId ? { ...confirmed, sender_role: 'student' } : m));
    } catch (e) {
      // Roll back optimistic message and show error
      setMessages(prev => prev.filter(m => m.id !== tempId));
      setDraft(text);
      setError(e.message || 'Could not send. Please try again.');
    } finally {
      setSending(false);
    }
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">💬 Messages</h1>

      <div className="bg-white rounded-2xl border border-gray-200 flex flex-col" style={{ height: 'calc(100vh - 180px)' }}>
        <div className="px-5 py-3 border-b border-gray-100 text-sm font-semibold text-gray-600">
          Chat with your teacher
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <p className="text-xs text-gray-400 text-center mt-10">
              No messages yet. Send your teacher a message!
            </p>
          )}
          {messages.map((m) => {
            const isMe = m.sender_role === 'student';
            const isTmp = String(m.id).startsWith('tmp_');
            return (
              <div key={m.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm transition-opacity
                  ${isTmp ? 'opacity-60' : ''}
                  ${isMe
                    ? 'bg-gradient-to-br from-sky-500 to-violet-500 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'}`}>
                  <div>{m.body}</div>
                  <div className={`text-xs mt-1 ${isMe ? 'text-white/60' : 'text-gray-400'}`}>
                    {isMe ? (isTmp ? 'Sending…' : 'You') : 'Teacher'} · {new Date(m.created_at).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {error && (
          <div className="px-4 py-2 text-xs text-red-600 bg-red-50 border-t border-red-100">
            ⚠️ {error}
          </div>
        )}
        <div className="px-4 py-3 border-t border-gray-100 flex gap-2">
          <textarea
            ref={textareaRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={onKey}
            placeholder="Write a message… (Enter to send)"
            rows={1}
            className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:border-violet-400"
          />
          <button
            onClick={send}
            disabled={sending || !draft.trim()}
            className="px-4 py-2 bg-gradient-to-br from-sky-500 to-violet-500 text-white rounded-xl text-sm font-medium disabled:opacity-50"
          >
            {sending ? '…' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
