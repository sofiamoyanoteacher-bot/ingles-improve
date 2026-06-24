import { useNavigate } from 'react-router-dom';
import { UNITS, MONTHS } from '../../data/units';
import { useProgress } from '../../hooks/useProgress.js';
import StudentNav from '../../components/StudentNav.jsx';

const STATUS_LABEL = { done: 'Completada', current: 'En curso', locked: 'Por comenzar' };
const STATUS_DOT = { done: 'bg-green-500', current: 'bg-sky', locked: 'bg-gray-200' };

export default function Program() {
  const navigate = useNavigate();
  const { statusFor, loading } = useProgress();

  return (
    <div className="min-h-screen">
      <StudentNav />
      <div className="max-w-[1100px] mx-auto px-6 py-7">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Programa completo</h1>
          <p className="text-sm text-gray-500 mt-1">5 meses · 10 unidades · Seleccioná una unidad para comenzar</p>
        </div>

        {!loading && MONTHS.map((m, mi) => {
          const monthUnits = UNITS.filter((u) => u.month === mi + 1);
          if (!monthUnits.length) return null;
          return (
            <div key={mi} className="mb-7">
              <div className="text-[11px] font-bold uppercase tracking-wide text-mag mb-3 flex items-center gap-2">
                {m.label}
                <span className="flex-1 h-px bg-gradient-to-r from-mag/30 to-transparent" />
              </div>
              <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                {monthUnits.map((u) => {
                  const idx = UNITS.indexOf(u);
                  const status = statusFor(idx);
                  return (
                    <div
                      key={u.num}
                      onClick={() => navigate(`/unit/${idx}`)}
                      className="card relative overflow-hidden border border-gray-100 p-5 cursor-pointer hover:-translate-y-1 transition-transform"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-grad" />
                      <div className="text-[11px] font-bold text-sky tracking-wide mb-2">UNIT {u.num}</div>
                      <div className="text-sm font-semibold mb-1.5 leading-snug">{u.title}</div>
                      <div className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-gradient-to-br from-sky/10 to-soft/20 text-[#534AB7] mb-2.5">
                        {u.grammar}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[status]}`} />
                          {STATUS_LABEL[status]}
                        </div>
                        <div className="w-6.5 h-6.5 w-7 h-7 rounded-full bg-grad flex items-center justify-center text-white text-xs">›</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
