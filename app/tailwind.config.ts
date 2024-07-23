import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "quiz": "url('/quiz.png')",
        "jlpt-header": "url('/jlptmain-header.png')",
        "main": "url('/main-bg.png')",
        "path": "url('/path.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ocean-100" : "#CCDBE4",
        "ocean-300" : "#80A5BB",
        "ocean-400" : "#5686A4",
        "ocean-500" : "#2B688E",
        "ocean-600" : "#014A77",
        "gray-200" : "#E9ECEF",
        "gray-500" : "#ADB5BD",
        "gray-600" : "#6C757D",
        "roseate" : "#AF282F",
        "pink-800" : "#FD6584",        
        "pink-600" : "#FD7F98",        
        "pink-400" : "#FEB2C2",        
        "off-white" : "#F7F7F7",
        "success" : "#4CAB8D",
        "danger" : "#AE2831",
        "warning" : "#FBC968"
      },
    },
  },
  plugins: [],
};
export default config;
