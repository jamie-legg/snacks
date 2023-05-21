module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#f0fbb3',
        'secondary' : '#2c3d37',
        'gray' : {
          '100' : '#f7f7f2',
          '200' : '#eeefdb',
          '300' : '#e4e6c3',
          '400' : '#b7bf9e',
          '500' : '#899878',
          '600' : '#56604f',
          '700' : '#222725',
          '800' : '#1a1c1c',
          '900' : '#121113'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}