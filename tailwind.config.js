module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('assets/logo.png')"
      },
      height: {
        'laptopImage': '500px',
        'mobileImage': '300px'
      },
      width: {
        'laptopImage': '300px',
        'mobileImage': '200px'
      }
    }
  },
  plugins: [],
}