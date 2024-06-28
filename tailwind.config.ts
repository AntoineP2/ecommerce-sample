import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'from-orange-800', 'from-orange-400',
    'from-blue-800', 'from-blue-400',
    'from-yellow-800', 'from-yellow-400',
    'from-gray-800', 'from-gray-400',
    'from-red-800', 'from-red-400',
    'to-orange-800', 'to-orange-400',
    'to-blue-800', 'to-blue-400',
    'to-yellow-800', 'to-yellow-400',
    'to-gray-800', 'to-gray-400',
    'to-red-800', 'to-red-400',
    'border-orange-800', 'border-orange-400',
    'border-blue-800', 'border-blue-400',
    'border-yellow-800', 'border-yellow-400',
    'border-gray-800', 'border-gray-400',
    'border-red-800', 'border-red-400',
    'border-primary',
    'shadow-orange-800', 'shadow-orange-400',
    'shadow-blue-800', 'shadow-blue-400',
    'shadow-yellow-800', 'shadow-yellow-400',
    'shadow-gray-800', 'shadow-gray-400',
    'shadow-red-800', 'shadow-red-400',
    '-left-full', 'left-full'
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
