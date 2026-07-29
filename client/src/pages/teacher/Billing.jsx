import { useEffect, useState } from 'react';
import { api } from '../../api';

const PROGRAM_LABEL = { basic: 'Basic B1–B2', starter: 'Starter A1–A2', native: 'Native C1–C2' };
const PROGRAM_COLOR = {
  basic:   'bg-mag/10 text-mag',
  starter: 'bg-sky/10 text-sky',
  native:  'bg-red-500/10 text-red-600',
};
const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

function fmt(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return d ? `${d}/${m}/${y}` : dateStr;
}

export default function Billing() {
  const now = new Date();
  const [year, setYear]       = useState(now.getFullYear());
  const [month, setMonth]     = useState(now.getMonth() + 1);
  const [students, setStudents] = useState([]);
  const [tab, setTab]         = useState('active'); // 'active' | 'inactive'
  const [payments, setPayments] = useState({});   // { userId: paid }
  const [modal, setModal]     = useState(null);   // student obj being edited
  const [form, setForm]       = useState({});
  const [saving, setSaving]   = useState(false);

  async function load() {
    const [{ students: s }, { payments: p }] = await Promise.all([
      api.teacherStudents(),
      api.teacherGetPayments(year, month),
    ]);
    setStudents(s);
    const map = {};
    p.forEach((r) => { map[r.user_id] = !!r.paid; });
    setPayments(map);
  }

  useEffect(() => { load(); }, [year, month]);

  async function togglePayment(s) {
    const current = !!payments[s.id];
    setPayments((prev) => ({ ...prev, [s.id]: !current }));
    await api.teacherTogglePayment(s.id, year, month, !current).catch(() => {
      setPayments((prev) => ({ ...prev, [s.id]: current }));
    });
  }

  function openModal(s) {
    setModal(s);
    setForm({
      schedule:    s.schedule    || '',
      monthly_fee: s.monthly_fee != null ? String(s.monthly_fee) : '',
      start_date:  s.start_date  || '',
      end_date:    s.end_date    || '',
    });
  }

  async function saveModal(e) {
    e.preventDefault();
    setSaving(true);
    try {
      await api.teacherUpdateBilling(modal.id, {
        schedule:    form.schedule    || null,
        monthly_fee: form.monthly_fee !== '' ? Number(form.monthly_fee) : null,
        start_date:  form.start_date  || null,
        end_date:    form.end_date    || null,
      });
      setStudents((prev) =>
        prev.map((s) => s.id === modal.id ? { ...s, ...form, monthly_fee: Number(form.monthly_fee) } : s)
      );
      setModal(null);
    } finally {
      setSaving(false);
    }
  }

  const visible     = students.filter((s) => tab === 'active' ? s.active : !s.active);
  const paidCount   = visible.filter((s) => payments[s.id]).length;
  const pendingCount = visible.filter((s) => !payments[s.id]).length;
  const totalFee    = visible.reduce((acc, s) => acc + (Number(s.monthly_fee) || 0), 0);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Billing</h1>
        <div className="flex items-center gap-2">
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
          >
            {MONTHS.map((name, i) => (
              <option key={i} value={i + 1}>{name}</option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="px-3 py-2 border border-gray-200 rounded-xl text-sm"
          >
            {[2024, 2025, 2026, 2027].map((y) => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-5 bg-gray-100 p-1 rounded-xl w-fit">
        {[{ key: 'active', label: 'Activos' }, { key: 'inactive', label: 'Inactivos' }].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              tab === key ? 'bg-white shadow text-gray-800' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {label}
            <span className={`ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full ${tab === key ? 'bg-gray-100' : 'bg-gray-200/60'}`}>
              {students.filter((s) => key === 'active' ? s.active : !s.active).length}
            </span>
          </button>
        ))}
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{paidCount}</div>
          <div className="text-xs text-gray-500 mt-0.5">Paid</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-yellow-500">{pendingCount}</div>
          <div className="text-xs text-gray-500 mt-0.5">Pending</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-sky">${totalFee.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-0.5">Monthly total</div>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs text-gray-400 uppercase tracking-wide">
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Program</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Schedule</th>
                <th className="px-4 py-3">Monthly fee</th>
                <th className="px-4 py-3">Start</th>
                <th className="px-4 py-3">End</th>
                <th className="px-4 py-3 text-center">{MONTHS[month - 1]}</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {visible.map((s) => {
                const paid = !!payments[s.id];
                return (
                  <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium">{s.name} {s.last_name}</div>
                      <div className={`text-[10px] mt-0.5 ${s.active ? 'text-green-600' : 'text-gray-400'}`}>
                        {s.active ? 'Active' : 'Inactive'}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[11px] font-semibold px-2 py-1 rounded-lg ${PROGRAM_COLOR[s.program] || 'bg-gray-100 text-gray-500'}`}>
                        {PROGRAM_LABEL[s.program] || s.program}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{s.email}</td>
                    <td className="px-4 py-3 text-gray-600">{s.schedule || <span className="text-gray-300">—</span>}</td>
                    <td className="px-4 py-3 font-medium">
                      {s.monthly_fee ? `$${Number(s.monthly_fee).toLocaleString()}` : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{fmt(s.start_date)}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{fmt(s.end_date)}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => togglePayment(s)}
                        className={`w-8 h-8 rounded-full text-base transition-all ${
                          paid
                            ? 'bg-green-100 text-green-600 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-300 hover:bg-gray-200'
                        }`}
                        title={paid ? 'Pagó — click para desmarcar' : 'No pagó — click para marcar'}
                      >
                        {paid ? '✅' : '⬜'}
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => openModal(s)}
                        className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:border-sky text-gray-500 hover:text-sky"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center py-10 text-gray-400 text-sm">
                    {tab === 'active' ? 'No hay alumnos activos.' : 'No hay alumnos inactivos.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setModal(null)}
        >
          <div className="bg-white rounded-2xl p-7 w-full max-w-sm shadow-xl">
            <h2 className="text-lg font-bold mb-1">{modal.name} {modal.last_name}</h2>
            <p className="text-xs text-gray-400 mb-5">Edit billing information</p>
            <form onSubmit={saveModal} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Schedule (days &amp; times)</label>
                <input
                  placeholder="Ej: Lunes 18h / Miércoles 10h"
                  value={form.schedule}
                  onChange={(e) => setForm({ ...form, schedule: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Monthly fee ($)</label>
                <input
                  type="number"
                  placeholder="Ej: 15000"
                  value={form.monthly_fee}
                  onChange={(e) => setForm({ ...form, monthly_fee: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Start date</label>
                <input
                  type="date"
                  value={form.start_date}
                  onChange={(e) => setForm({ ...form, start_date: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">End date</label>
                <input
                  type="date"
                  value={form.end_date}
                  onChange={(e) => setForm({ ...form, end_date: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-2.5 bg-grad rounded-xl text-white text-sm font-semibold disabled:opacity-60"
                >
                  {saving ? 'Saving…' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
