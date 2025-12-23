import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        woo: {
          bg: "var(--woo-bg)",
          card: "var(--woo-card)",
          border: "var(--woo-border)",

          text: {
            DEFAULT: "var(--woo-text)",
            secondary: "var(--woo-text-secondary)",
            muted: "var(--woo-text-muted)",
            inverse: "var(--woo-text-inverse)",
          },

          primary: "var(--woo-primary)",
          "primary-hover": "var(--woo-primary-hover)",
          "primary-light": "var(--woo-primary-light)",

          error: "var(--woo-error)",
          success: "var(--woo-success)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
