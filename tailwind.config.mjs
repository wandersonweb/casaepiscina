/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0e2430",
          ocean: "#0e2430",
          "ocean-dark": "#071821",
          "ocean-soft": "#e8eef1",
          "ocean-pale": "#f4f7f8",
          aqua: "#254a5a",
          sand: "#f8f4ec",
          cream: "#fffdf8",
          line: "#d7e5e8",
          muted: "#526873",
          whatsapp: "#168a42",
          "whatsapp-hover": "#0f7536",
          gold: "#b17822",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      }
    }
  },
  plugins: [],
};
