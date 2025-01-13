const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          600: "#133489", // Blue color shade union 
        },
        green: {
          600: "#6ab647", // Green color shade union
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
