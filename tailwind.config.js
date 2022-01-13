module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        reddish: "#F44336",
        blackish: "#000C24",
        blueish: "#011F58",
        source: "#282828",
        greyish: "#928A97",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      backgroundColor: {
        blueish: "#011F58",
        whitish: "#E5E5E5",
      },
      backgroundImage: {
        background: "url('/src/assets/background.svg')",
      },
      maxWidth: {
        80: "80%",
      },
    },
  },

  plugins: [],
};
