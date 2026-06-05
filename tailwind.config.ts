import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAFAF8',
          muted: '#F3F1EC',
        },
        ink: {
          DEFAULT: '#141414',
          soft: '#3D3D3D',
          muted: '#737373',
        },
        stone: '#E8E4DE',
        accent: {
          DEFAULT: '#A8895C',
          soft: '#C4A97A',
        },
        night: '#0E0E10',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        ui: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
