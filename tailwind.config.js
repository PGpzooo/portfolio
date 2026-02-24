/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 深色主题：背景 #0a0a0a，文字 #ffffff（AGENTS.md）
        dark: {
          bg: '#0a0a0a',
          surface: '#141414',
        },
      },
    },
  },
  plugins: [],
}
