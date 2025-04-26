/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#6B9AC4',    // Soft Blue - Main brand color
        secondary: '#97C1A9',  // Sage Green - Secondary actions
        accent: '#FCB97D',     // Warm Orange - Accents and highlights
        success: '#8ACB88',    // Soft Green - Success states
        error: '#FF8B8B',      // Soft Red - Error states
        warning: '#FFD93D',    // Soft Yellow - Warning states
        info: '#98B6EC',       // Light Blue - Information states
        dark: '#2D3748',       // Dark Blue-Gray - Text
        neutral: '#F7FAFC',    // Light Gray - Background
      },
      animation: {
        'ripple': 'ripple 0.6s linear',
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
