/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-main': '#0D2440',
        'navy-surface': '#122d4d',
        'blue-primary': '#2E5E99',
        'blue-soft': '#7BA4D0',
        'blue-subtle': '#E7F0FA',
        'blue-light-1': '#F1F7FE',
        'blue-light-2': '#E7F0FA',
        'blue-light-3': '#F8FAFC',
      },
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
  },
  plugins: [],
}