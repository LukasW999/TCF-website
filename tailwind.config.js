/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        tennis: {
          green: '#1b4d3e',
          light: '#2d6a54',
          clay: '#c45a42',
          sand: '#e8dccc',
        },
        background: '#f9f9f9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: []
};
