import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        whole:'whole',
        
      }
    },
  },
  plugins: [],
};

export default config;