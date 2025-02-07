/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        ["text-primary"]: "var(--text-primary)",
        ["text-secondary"]:"var(--text-secondary)",
        ["primary"]:"var(--primary-color)"
      },
      textIndent: {
        'mission-section': 'clamp(0px, 40%, 500px)',
      }
    },
  },
  plugins: [],
};
