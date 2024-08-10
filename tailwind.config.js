export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Roboto"', "serif"],
      },
      colors: {
        mainColor: "#00C058",
        secondColor: "#E7F6EF",
        BgColor: "#EFF6F3",
        hoverColor: "#3F634D",
        grayColor: "#1C2024",
      },
    },
  },
  plugins: [],
};
