/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef1ff",
          100: "#dfe4ff",
          200: "#c5ceff",
          300: "#a3b0ff",
          400: "#7a87f4",
          500: "#4d4fb7",
          600: "#3f419f",
          700: "#353789",
          800: "#2f3170",
          900: "#2d2e60"
        },
        society: {
          red: "#d92c34",
          yellow: "#ffb642",
          blue: "#3f419f",
          cream: "#fff8ee"
        },
        accent: {
          gold: "#ffb642",
          coral: "#d92c34",
          leaf: "#3f419f"
        },
        ink: "#0f172a",
        mist: "#fffaf2"
      },
      boxShadow: {
        panel: "0 20px 60px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(255,182,66,0.26), transparent 32%), radial-gradient(circle at top right, rgba(63,65,159,0.2), transparent 35%), radial-gradient(circle at bottom left, rgba(217,44,52,0.18), transparent 28%)"
      }
    }
  },
  plugins: []
};
