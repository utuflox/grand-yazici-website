import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
      },
    },
    extend: {
      colors: {
        background: '#0B0B0C',
        surface: '#111113',
        accent: '#C8A96A',
        textPrimary: '#F5F5F5',
        textSecondary: '#A1A1AA',
        primary: '#C8A96A',
        secondary: '#8B7355',
        ivory: '#0B0B0C',
        sand: '#1a1a1c',
        charcoal: '#F5F5F5',
        text: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          light: '#A1A1AA',
        },
        divider: '#2a2a2e',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['96px', { lineHeight: '1.05', letterSpacing: '-1px', fontWeight: '400' }],
        'h1-mobile': ['48px', { lineHeight: '1.05', letterSpacing: '-1px', fontWeight: '400' }],
        'h2-desktop': ['64px', { lineHeight: '1.08', letterSpacing: '-0.5px', fontWeight: '400' }],
        'h2-mobile': ['36px', { lineHeight: '1.08', letterSpacing: '-0.5px', fontWeight: '400' }],
        'h3': ['40px', { lineHeight: '1.1', letterSpacing: '-0.25px', fontWeight: '400' }],
        'h4': ['24px', { lineHeight: '1.2', letterSpacing: '0px', fontWeight: '400' }],
        'h5': ['18px', { lineHeight: '1.4', letterSpacing: '0px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.8', fontWeight: '300' }],
        'body-regular': ['16px', { lineHeight: '1.8', fontWeight: '300' }],
        'body-small': ['14px', { lineHeight: '1.8', fontWeight: '300' }],
        'body-micro': ['12px', { lineHeight: '1.6', fontWeight: '300' }],
        'caption': ['14px', { lineHeight: '1.6', fontWeight: '300' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '96px',
        '6xl': '120px',
        '7xl': '160px',
      },
      borderRadius: {
        none: '0px',
        soft: '12px',
        card: '20px',
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'fade-in': 'fadeIn 900ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 900ms cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 500ms ease-out',
      },
      transitionTimingFunction: {
        'luxury-slow': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
