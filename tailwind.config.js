module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d4af37', // золотой
        secondary: '#111827' // темно-серый/черный
      },
      borderRadius: { xl: '1rem' }
    }
  },
  plugins: []
};
