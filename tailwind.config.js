/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'accordion-down': {
          from: {height: 0},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: 0},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        'black-items': '#253031',
        'main-red': '#f24435',
        'dashboard-rgb': 'rgba(255, 255, 255, 0.7)',
        'dashboard-title': '#818CF8',
        'dashboard-text': '#9CA3AF',
        'dashboard-hover': '#29303D',
        'dashboard-main': '#111827',
        'background-primary': '#f1f5f9',
        'background-primary-dark': '#1e1d1e',
        'dark-mode-main': '#303030',
        'dark-mode-title': '#94A3B8',
        'dark-mode-button': '#129B7F',
        'dark-mode-button-hover': '#056D4F',
        'dark-mode-input': '#262526',
        'dark-mode-primary': '#1D1E1D',
        'dark-mode-button-primary': '#29303D',
        'dark-mode-button-secondary': '#536353',
        'button-primary': '#4179f1',
        'light-table-bg': '#F9FAFB',
        'dark-table-bg': '#212B36',
        'light-table-text': '#003B57',
        'dark-table-header': '#2A353F',
        'table-text-disable': '#FB6500',
        'table-text-enable': '#0E927A',
        'table-bg-disable': '#ff650033',
        'table-bg-enable': '#0e927a33',
        'new-black-main': '#161C24',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      textColor: {
        primary: {
          default: 'var(--color-text-default)',
        },
      },
      backgroundColor: {
        background: {
          default: 'var(--color-background-default)',
        },
      },
      boxShadow: {
        ca: '0px 2px 6px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        ca: '14px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
