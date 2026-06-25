import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APPENDICES } from '../../data/appendices';

function matchesQuery(row, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return row.some((cell) => String(cell).toLowerCase().includes(q));
}

function TableSection({ section, query }) {
  const rows = useMemo(
    () => (query ? section.rows.filter((r) => matchesQuery(r, query)) : section.rows),
    [section.rows, query]
  );
  return (
    <div className="card p-6 mb-4">
      {section.heading && <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-2">{section.heading}</h3>}
      {section.intro && <p className="text-sm text-gray-600 mb-3">{section.intro}</p>}
      <div className="appendix-table-wrap overflow-x-auto">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr>
              {section.columns.map((c, i) => (
                <th key={i} className="bg-[#f7f8fc] px-3.5 py-2.5 text-left font-semibold border-b-2 border-gray-200 whitespace-nowrap">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="px-3.5 py-2.5 border-b border-gray-100 whitespace-nowrap">{cell}</td>
                ))}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={section.columns.length} className="px-3.5 py-4 text-center text-gray-400">Sin resultados</td></tr>
            )}
          </tbody>
        </table>
      </div>
      {section.note && <p className="text-xs text-gray-500 mt-3 italic whitespace-pre-line">{section.note}</p>}
    </div>
  );
}

function TextSection({ section }) {
  return (
    <div className="card p-6 mb-4">
      {section.heading && <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-3">{section.heading}</h3>}
      <p className="text-sm leading-7" dangerouslySetInnerHTML={{ __html: section.html }} />
    </div>
  );
}

function CardsSection({ section }) {
  return (
    <div className="card p-6 mb-4">
      {section.heading && <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-3">{section.heading}</h3>}
      {section.title && <h3 className="text-[13px] font-bold text-sky uppercase tracking-wide mb-3">{section.title}</h3>}
      <div className="flex flex-col gap-3">
        {section.cards.map((c, i) => (
          <div key={i} className="bg-gradient-to-br from-soft/10 to-purple-200/10 rounded-xl p-4">
            <div className="text-xs font-bold text-[#534AB7] mb-1.5">{c.heading}</div>
            <div className="text-sm text-gray-700 leading-relaxed">{c.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TenseCard({ card }) {
  return (
    <div className="card p-5 mb-4 border-l-4 border-soft">
      <h4 className="text-sm font-bold mb-3">{card.name}</h4>
      <div className="text-[13px] flex flex-col gap-1.5">
        {card.form && <div><strong className="text-gray-500">Form:</strong> {card.form}</div>}
        {card.affirmative && <div><strong className="text-gray-500">Affirmative:</strong> {card.affirmative}</div>}
        {card.negative && <div><strong className="text-gray-500">Negative:</strong> {card.negative}</div>}
        {card.question && <div><strong className="text-gray-500">Question:</strong> {card.question}</div>}
        {card.use && <div><strong className="text-gray-500">Use:</strong> {card.use}</div>}
        {card.timeSignals && <div><strong className="text-gray-500">Time signals:</strong> {card.timeSignals}</div>}
        {card.extra && <div className="italic text-gray-600 mt-1">{card.extra}</div>}
      </div>
      {card.table && (
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr>{card.table[0].map((h, i) => <th key={i} className="bg-[#f7f8fc] px-3 py-2 text-left font-semibold border-b-2 border-gray-200">{h}</th>)}</tr>
            </thead>
            <tbody>
              {card.table.slice(1).map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j} className="px-3 py-2 border-b border-gray-100">{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function Appendix() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const appendix = APPENDICES.find((a) => a.id === id);

  if (!appendix) {
    navigate('/extra', { replace: true });
    return null;
  }

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-8 md:pt-8 pt-16">
        <button onClick={() => navigate('/extra')} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-sky mb-5">
          ← Volver a Extra Material
        </button>

        <div className="card relative overflow-hidden p-7 mb-5 border-l-4 border-soft bg-gradient-to-br from-soft/10 to-purple-200/10">
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-br from-soft to-purple-400 text-white mb-2">{appendix.badge}</span>
          <h1 className="text-[22px] font-bold mb-1.5">{appendix.title}</h1>
          <p className="text-sm text-gray-600">{appendix.subtitle}</p>
        </div>

        {appendix.searchable && (
          <div className="relative mb-5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a word..."
              className="appendix-search w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-sky"
            />
          </div>
        )}

        {appendix.sections.map((section, i) => {
          if (section.type === 'table') return <TableSection key={i} section={section} query={appendix.searchable ? query : ''} />;
          if (section.type === 'text') return <TextSection key={i} section={section} />;
          if (section.type === 'cards') return <CardsSection key={i} section={section} />;
          if (section.type === 'tenseCards') {
            return (
              <div key={i}>
                {section.cards.map((c, ci) => <TenseCard key={ci} card={c} />)}
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
