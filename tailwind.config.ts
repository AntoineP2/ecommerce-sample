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
    '-left-full', 'left-full',
    'bg-orange-800', 'bg-orange-400',
    'bg-blue-800', 'bg-blue-400',
    'bg-yellow-800', 'bg-yellow-400',
    'bg-gray-800', 'bg-gray-400',
    'bg-red-800', 'bg-red-400',
    'bg-primary',
    'text-orange-800', 'text-orange-400',
    'text-blue-800', 'text-blue-400',
    'text-yellow-800', 'text-yellow-400',
    'text-gray-800', 'text-gray-400',
    'text-red-800', 'text-red-400',
    'text-primary',
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          "primary": "#407bb9",    // Bleu
          "secondary": "#9B59B6",  // Violet
          "accent": "#FF851B",     // Orange (complémentaire)
          "neutral": "#F0F0F0",    // Gris clair (pour les fonds et éléments neutres)
          "base-100": "#FFFFFF",   // Blanc (pour le fond principal)
          "info": "#39CCCC",       // Bleu clair (pour les informations)
          "success": "#2ECC40",    // Vert (pour les succès)
          "warning": "#FFDC00",    // Jaune (pour les avertissements)
          "error": "#FF4136"       // Rouge (pour les erreurs)
        }
      },
      {
        darkTheme: {
          "primary": "#233d87",    // Bleu
          "secondary": "#9B59B6",  // Violet
          "accent": "#FF851B",     // Orange (complémentaire)
          "neutral": "#2D2D2D",    // Gris foncé (pour les fonds et éléments neutres)
          "base-100": "#121212",   // Noir (pour le fond principal)
          "info": "#39CCCC",       // Bleu clair (pour les informations)
          "success": "#24713C",    // Vert sombre (pour les succès)
          "warning": "#B88600",    // Jaune sombre (pour les avertissements)
          "error": "#B0302E"       // Rouge sombre (pour les erreurs)
        }
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
