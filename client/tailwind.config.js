module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '3rem',
        lg: '1rem',
        'xxl': '1rem'
      },
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xxl: "1500px"
      },
    },
    extend: {
      colors: {
        'primary': '#8d55c7',
        'dark': '#1a1b1e',
        'light': '#f2f2f2',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1400px'
      },
    },
    plugins: [],
  }
}