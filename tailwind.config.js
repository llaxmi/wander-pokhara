// tailwind.config.js
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#399918",
          200: "#337357",
        },
        secondary: {
          100: "#f2f5f1",
          200: "#151515",
      },
    },
  },
  plugins: [],
}
}
