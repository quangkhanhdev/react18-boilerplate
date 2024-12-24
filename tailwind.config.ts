import type {Config} from 'tailwindcss'

export default {
  darkMode: ['selector', 'class'],
  content: ['./src/**/*.tsx'],
  theme: {
    /** bootstrap responsive desktop first*/
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        poppins: 'Poppins, san-serif',
      },
      /** */
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
        tertiary: 'hsl(var(--color-tertiary))',
        accent: 'hsl(var(--color-accent))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} as Config
