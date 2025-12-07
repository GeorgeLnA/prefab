/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#ffbf00',
        'primary-hover': '#ffbf00',
        'primary-light': '#ffbf00',
        'primary-dark': '#ffbf00',
        secondary: '#6366F1',
        'secondary-hover': '#5856EB',
        'secondary-light': '#818CF8',
        'secondary-dark': '#4F46E5',
        accent: '#FF8C00',
        'accent-hover': '#E67E00',
        // shadcn/ui compatibility
        background: '#ffffff',
        foreground: '#000000',
        'primary-foreground': '#000000',
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
    },
  },
  plugins: [],
};