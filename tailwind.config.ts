import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react"; // NextUI

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Next
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Next
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Next
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // NextUI
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Tailwind
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Tailwind
      },
    },
  },
  darkMode: "class", // NextUI
  plugins: [nextui()], // NextUI
};
export default config;
