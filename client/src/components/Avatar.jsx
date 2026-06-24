export default function Avatar({ name, lastName, size = 'md', onClick }) {
  const initials = ((name?.[0] || '') + (lastName?.[0] || '')).toUpperCase() || '?';
  const dims = { sm: 'w-9 h-9 text-sm', md: 'w-16 h-16 text-2xl', lg: 'w-20 h-20 text-3xl' }[size] || 'w-9 h-9 text-sm';
  return (
    <div
      onClick={onClick}
      className={`${dims} bg-grad rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
    >
      {initials}
    </div>
  );
}
