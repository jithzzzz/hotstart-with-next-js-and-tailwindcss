module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  
  darkMode: false, //or 'media' or 'class',  The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`
  theme: {
    extend: {},
    fontFamily: {
      body: ['Montserrat', "sans-serif"],
    }
  },
  varints: {},
  plugins: [],
}
