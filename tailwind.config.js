module.exports = {
  purge: ['./layouts/**/*.vue', './pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
}
