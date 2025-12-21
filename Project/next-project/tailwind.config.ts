import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        woo: {
          bg: "var(--woo-bg)",
          card: "var(--woo-card)",
          text: {
            DEFAULT: "var(--woo-text)",
            secondary: "var(--woo-text-secondary)",
          },
          border: "var(--woo-border)",
          primary: {
            DEFAULT: "var(--woo-primary)",
            hover: "var(--woo-primary-hover)",
          },
        },
      },
      boxShadow: {
        woo: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      }
    },
  },
  plugins: [],
};
export default config;