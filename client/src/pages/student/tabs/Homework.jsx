import { useEffect, useState } from 'react';
import { api } from '../../../api';

const ALLOWED_EXT = ['mp3', 'm4a', 'wav', 'mp4', 'doc', 'docx', 'pdf'];
const MAX_FILES = 5;
const MAX_SIZE = 100 * 1024 * 1024;

function fileIcon(name) {
  const ext = name.split('.').pop().toLowerCase();
  if (['mp3', 'm4a', 'wav'].includes(ext)) return { icon: '🎵', bg: 'bg-sky/15' };
  if (ext === 'mp4') return { icon: '🎬', bg: 'bg-mag/12' };
  return { icon: '📄', bg: 'bg-soft/25' };
}

function fmtSize(bytes) {
  return bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function Homework({ unit, unitIndex }) {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    setFiles([]);
    setSuccess(false);
    setError('');
    loadSubmission();
  }, [unitIndex]);

  function loadSubmission() {
    api.mySubmissions().then(({ submissions }) => {
      const sub = submissions.find((s) => s.unit_index === unitIndex);
      setSubmission(sub || null);
    });
  }

  function addFiles(fileList) {
    const incoming = Array.from(fileList);
    setFiles((prev) => {
      const next = [...prev];
      for (const f of incoming) {
        if (next.length >= MAX_FILES) { setError('Maximum 5 files per submission.'); break; }
        const ext = f.name.split('.').pop().toLowerCase();
        if (!ALLOWED_EXT.includes(ext)) { setError(`Format not allowed: .${ext}`); continue; }
        if (f.size > MAX_SIZE) { setError('The file exceeds 100 MB.'); continue; }
        next.push(f);
      }
      return next;
    });
  }

  function removeFile(i) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit() {
    if (!files.length) { setError('Upload at least one file first.'); return; }
    setError('');
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('unit_index', unitIndex);
      files.forEach((f) => formData.append('files', f));
      await api.submitHomework(formData);
      setSuccess(true);
      setFiles([]);
      loadSubmission();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="card p-6 mb-4">
        <h3 className="text-[15px] font-bold mb-2">📤 Homework — {unit.title}</h3>
        <p className="text-[13px] text-gray-500 leading-relaxed">{unit.hwTask}</p>
      </div>

      {submission && (
        <div className="card p-5 mb-4">
          <div className="flex items-center gap-2 mb-2">
            {submission.status === 'reviewed' ? (
              <span className="text-xs font-semibold bg-green-50 text-green-700 px-3 py-1 rounded-full">✅ Reviewed — Feedback available</span>
            ) : (
              <span className="text-xs font-semibold bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">🟡 Pending review</span>
            )}
          </div>
          {submission.feedback_text && (
            <div className="mt-2 bg-[#f7f8fc] rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-1">Feedback from your teacher — {new Date(submission.feedback_at).toLocaleDateString()}</div>
              <div className="text-sm leading-relaxed">{submission.feedback_text}</div>
            </div>
          )}
        </div>
      )}

      <div
        onClick={() => document.getElementById('hwFileInput').click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
        className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors mb-4 ${dragging ? 'border-sky bg-sky/5' : 'border-gray-200'}`}
      >
        <div className="text-4xl mb-3">☁️</div>
        <h4 className="text-sm font-semibold mb-1">Drag your file here or click to browse</h4>
        <p className="text-xs text-gray-500">Maximum 100 MB per file</p>
        <div className="flex flex-wrap gap-1.5 mt-3.5 justify-center">
          {['🎵 MP3', '🎤 M4A', '🎧 WAV', '🎬 MP4', '📄 Word', '📋 PDF'].map((chip) => (
            <span key={chip} className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-[#f7f8fc] border border-gray-200 text-gray-500">{chip}</span>
          ))}
        </div>
        <input
          id="hwFileInput"
          type="file"
          multiple
          className="hidden"
          accept="audio/*,video/mp4,.doc,.docx,.pdf"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <div className="flex flex-col gap-2 mb-4">
          {files.map((f, i) => {
            const { icon, bg } = fileIcon(f.name);
            return (
              <div key={i} className="card flex items-center gap-3 px-4 py-3 border border-gray-100">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${bg}`}>{icon}</div>
                <span className="flex-1 text-sm font-medium truncate">{f.name}</span>
                <span className="text-xs text-gray-500">{fmtSize(f.size)}</span>
                <button onClick={() => removeFile(i)} className="text-gray-400 hover:text-red-500 text-base px-1.5">✕</button>
              </div>
            );
          })}
        </div>
      )}

      {error && <div className="text-sm text-red-600 mb-3">{error}</div>}

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="px-7 py-3 bg-grad rounded-xl text-white font-semibold text-sm hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Send to your teacher ✈️'}
      </button>

      {success && (
        <div className="bg-green-50 border border-green-500 rounded-xl p-4 text-center text-green-700 text-sm font-medium mt-3">
          ✅ Homework sent successfully! Your teacher will review it soon.
        </div>
      )}
    </div>
  );
}
