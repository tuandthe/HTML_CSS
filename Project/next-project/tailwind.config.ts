import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"; // Import cái này để giữ các font mặc định

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
          bg: 'var(--woo-bg)',
          card: 'var(--woo-card)',
          text: 'var(--woo-text)',
          secondary: 'var(--woo-text-secondary)',
          muted: 'var(--woo-text-muted)', 
          border: 'var(--woo-border)',
          primary: 'var(--woo-primary)',
          'primary-hover': 'var(--woo-primary-hover)',
          'primary-light': 'var(--woo-primary-light)',
          'secondary-light': 'var(--woo-secondary-light)', 
        },
      },
    },
  },
  plugins: [],
};
export default config;