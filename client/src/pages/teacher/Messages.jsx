import { useEffect, useRef, useState } from 'react';
import { api } from '../../api';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Messages() {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [body, setBody] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    api.teacherStudents().then(({ students }) => setStudents(students));
  }, []);

  useEffect(() => {
    if (!selected) return;
    load();
    const id = setInterval(load, 8000);
    return () => clearInterval(id);
  }, [selected]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function load() {
    const { messages } = await api.calendarGetMessages(selected.id);
    setMessages(messages);
  }

  async function send() {
    if (!body.trim() || !selected) return;
    await api.calendarSendMessage(selected.id, body.trim());
    setBody('');
    load();
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">💬 Messages</h1>
      <div className="flex gap-5 h-[calc(100vh-180px)]">
        {/* student list */}
        <div className="w-56 flex-shrink-0 space-y-1 overflow-y-auto">
          {students.map((s) => (
            <button key={s.id} onClick={() => setSelected(s)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors ${selected?.id === s.id ? 'bg-grad text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
              {s.name} {s.last_name}
              <div className={`text-xs ${selected?.id === s.id ? 'text-white/70' : 'text-gray-400'}`}>{s.program}</div>
            </button>
          ))}
        </div>

        {/* chat */}
        <div className="flex-1 flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {!selected
            ? <div className="flex-1 flex items-center justify-center text-sm text-gray-400">Select a student to view messages.</div>
            : (
              <>
                <div className="px-5 py-3 border-b border-gray-100 font-semibold text-sm">
                  {selected.name} {selected.last_name}
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.length === 0 && <p className="text-xs text-gray-400 text-center mt-10">No messages yet.</p>}
                  {messages.map((m) => {
                    const isTeacher = m.sender_role === 'teacher';
                    return (
                      <div key={m.id} className={`flex ${isTeacher ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${isTeacher ? 'bg-grad text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'}`}>
                          <div>{m.body}</div>
                          <div className={`text-xs mt-1 ${isTeacher ? 'text-white/60' : 'text-gray-400'}`}>
                            {new Date(m.created_at).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={bottomRef} />
                </div>
                <div className="px-4 py-3 border-t border-gray-100 flex gap-2">
                  <textarea value={body} onChange={(e) => setBody(e.target.value)} onKeyDown={onKey}
                    placeholder="Write a message… (Enter to send)" rows={1}
                    className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:border-violet-400" />
                  <button onClick={send} className="px-4 py-2 bg-grad text-white rounded-xl text-sm font-medium">Send</button>
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
