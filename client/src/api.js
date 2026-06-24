const TOKEN_KEY = 'improve_token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

async function request(path, { method = 'GET', body, isForm = false } = {}) {
  const headers = {};
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  if (!isForm && body) headers['Content-Type'] = 'application/json';

  const res = await fetch(`/api${path}`, {
    method,
    headers,
    body: isForm ? body : body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Error de red');
  return data;
}

export const api = {
  login: (email, password) => request('/auth/login', { method: 'POST', body: { email, password } }),
  me: () => request('/auth/me'),
  changePassword: (current_password, new_password) =>
    request('/auth/change-password', { method: 'PUT', body: { current_password, new_password } }),

  getProgress: () => request('/student/progress'),
  putProgress: (unitIndex, payload) => request(`/student/progress/${unitIndex}`, { method: 'PUT', body: payload }),
  updateProfile: (payload) => request('/student/profile', { method: 'PUT', body: payload }),

  mySubmissions: () => request('/homework/my-submissions'),
  submitHomework: (formData) => request('/homework/submit', { method: 'POST', body: formData, isForm: true }),
  getFeedback: (submissionId) => request(`/homework/${submissionId}/feedback`),

  teacherStudents: () => request('/teacher/students'),
  teacherCreateStudent: (payload) => request('/teacher/students', { method: 'POST', body: payload }),
  teacherUpdateStudent: (id, payload) => request(`/teacher/students/${id}`, { method: 'PUT', body: payload }),
  teacherStudentProgress: (id) => request(`/teacher/students/${id}/progress`),
  teacherHomework: (query = {}) => {
    const qs = new URLSearchParams(query).toString();
    return request(`/teacher/homework${qs ? `?${qs}` : ''}`);
  },
  teacherSendFeedback: (id, feedback_text) =>
    request(`/teacher/homework/${id}/feedback`, { method: 'POST', body: { feedback_text } }),
  teacherEditFeedback: (id, feedback_text) =>
    request(`/teacher/homework/${id}/feedback`, { method: 'PUT', body: { feedback_text } }),
  teacherStats: () => request('/teacher/stats'),
  async downloadTeacherFile(submissionId, filename, originalName) {
    const token = getToken();
    const res = await fetch(`/api/teacher/homework/${submissionId}/files/${filename}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error('No se pudo descargar el archivo');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = originalName || filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  },
};
