/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}

