import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-orange-800', 'bg-orange-400',
    'bg-blue-800', 'bg-blue-400',
    'bg-yellow-800', 'bg-yellow-400',
    'bg-gray-800', 'bg-gray-400',
    'bg-red-800', 'bg-red-400'
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          "primary": "#407bb9",
          "secondary": "#FF4136",
          "accent": "#FF851B",
          "neutral": "#F0F0F0",
          "base-100": "#E0F7FA",
          "info": "#39CCCC",
          "success": "#2ECC40",
          "warning": "#FFDC00",
          "error": "#FF4136",
        },
      },
      {
        darkTheme: {
          "primary": "#001f3f",
          "secondary": "#C82333",
          "accent": "#FF851B",
          "neutral": "#1B263B",
          "base-100": "#060F1C",
          "info": "#117A8B",
          "success": "#218838",
          "warning": "#E0A800",
          "error": "#C82333",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
