import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#060812', cyan: '#63f5ff', violet: '#9b7bff', soft: '#a8b4c7' }, fontFamily: { sans: ['var(--font-space)', 'sans-serif'], mono: ['var(--font-mono)', 'monospace'] }, boxShadow: { neon: '0 0 40px rgba(99,245,255,.16)' } } },
  plugins: [],
}
export default config
