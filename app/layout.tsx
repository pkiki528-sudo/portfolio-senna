import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kiki Pratama — Bot & Web Developer | senna.dev',
  description:
    'Kiki Pratama — developer di balik senna.dev. Spesialis Telegram Bot, web dashboard, QRIS payment flow, dan deploy Pterodactyl/VPS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#03030a] text-slate-100 antialiased">
        <div className="cyber-grid" />
        {children}
      </body>
    </html>
  );
}
