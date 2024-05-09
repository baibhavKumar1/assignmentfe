import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'lg': {'min': '1201px','max':'1500px'},

      'md': {'min': '901px','max':'1200px'},

      'sm': {'max': '900px','min':'451px'},
      
      'xs':{'max':'450px','min':'0'}
    }
  },
  plugins: [],
};
export default config;
