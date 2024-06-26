import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          "primary": "#407bb9", // Bleu marine
          "secondary": "#FF4136", // Rouge vif
          "accent": "#FF851B", // Couleur d'accentuation (orange)
          "neutral": "#F0F0F0", // Gris très clair
          "base-100": "#E0F7FA", // Bleu très clair
          "info": "#39CCCC", // Bleu clair
          "success": "#2ECC40", // Vert
          "warning": "#FFDC00", // Jaune
          "error": "#FF4136", // Rouge
        },
      },
      {
        darkTheme: {
          "primary": "#001f3f", // Bleu marine
          "secondary": "#C82333", // Rouge sombre
          "accent": "#FF851B", // Couleur d'accentuation (orange)
          "neutral": "#1B263B", // Bleu marine très foncé
          "base-100": "#060F1C", // Bleu très foncé
          "info": "#117A8B", // Bleu foncé
          "success": "#218838", // Vert foncé
          "warning": "#E0A800", // Jaune foncé
          "error": "#C82333", // Rouge foncé
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
