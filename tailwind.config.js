/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    // Add any other relevant file paths here
  },
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        'custom-pink': 'rgb(236, 76, 139)',
        'light-pink': 'rgb(252 81 147)',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      // Add more customizations as needed
    },
  },
  variants: {
    extend: {
      // Enable or disable variants as needed
    },
  },
  plugins: [
    // Add additional plugins here if required
  ],
};
