import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488',
        primaryLight: '#F0FDFA',
        secondary: '#022F2B',
        light: '#ffffff',
        dark: '#2C2C2C',
        gray: '#8A8A8A',
        gray2: '#4A5565',
        'dark-gray': '#2B374D',
        'light-gray': '#FBFBFB',
        'gray-400': '#AFADB5',
        'light-gray-200': '#EAEAEAEA',
        'light-gray-400': '#4A99D366',

      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1170px",
      },
  
      container: {
        center: true,
        padding: '1rem'
      },
      boxShadow: {
        "card": "0px 0px 20px 1px rgba(0,0,0,0.1) "
      },

    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },
  },
  plugins: [],
};
export default config;
