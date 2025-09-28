import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7BC67B',
        secondary: '#FFF1E6',
        accent: '#F7C6D5',
        dark: '#3B2F2F',
        text: '#2A2A2A',
        info: '#87C0F2',
        success: '#67C587',
        matcha: '#8FD14E',
        coffee: '#8B4513',
        tea: '#90EE90',
        warm: '#FFB347',
        cool: '#87CEEB',
        purple: '#DDA0DD',
        orange: '#FF8C69',
        pink: '#FFB6C1',
        mint: '#98FB98'
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif']
      },
      borderRadius: {
        'card': '14px'
      },
      boxShadow: {
        'card': '0 2px 8px rgba(43, 43, 43, 0.08)',
        'card-hover': '0 4px 12px rgba(43, 43, 43, 0.12)'
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config
