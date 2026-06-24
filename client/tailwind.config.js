/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sky: '#4cc0f1',
        mag: '#ea4fb9',
        soft: '#b5beea',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
      },
      boxShadow: {
        soft: '0 2px 20px rgba(76,192,241,.12)',
      },
      backgroundImage: {
        grad: 'linear-gradient(135deg, #4cc0f1 0%, #a78bfa 50%, #ea4fb9 100%)',
      },
    },
  },
  plugins: [],
};
