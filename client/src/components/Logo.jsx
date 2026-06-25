import { useState } from 'react';

export default function Logo({ size = 'md' }) {
  const [imgFailed, setImgFailed] = useState(false);
  const height = size === 'lg' ? 'h-12' : 'h-8';
  const dims = size === 'lg' ? 'w-14 h-14' : 'w-9 h-9';
  const text = size === 'lg' ? 'text-2xl' : 'text-base';

  if (!imgFailed) {
    return (
      <img
        src="/logo-improve.png"
        alt="Ingles IMPROVE"
        className={`${height} w-auto object-contain`}
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <div className="flex items-center gap-2.5 font-bold">
      <div className={`${dims} bg-grad rounded-full flex items-center justify-center flex-shrink-0`}>
        <svg viewBox="0 0 24 24" className="w-1/2 h-1/2" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="9" cy="10" r="1" fill="#fff" />
          <circle cx="12" cy="10" r="1" fill="#fff" />
          <circle cx="15" cy="10" r="1" fill="#fff" />
        </svg>
      </div>
      <span className={text}>
        Ingles <span className="text-grad">IMPROVE</span>
      </span>
    </div>
  );
}
