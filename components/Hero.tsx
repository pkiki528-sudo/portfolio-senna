'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  'Bot & Web Developer',
  'Founder of senna.dev',
  'Telegram Automation Builder',
  'Payment Flow Integrator',
  'Pterodactyl & VPS Deployer',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const w = words[wi];
    let delay = deleting ? 35 : 65;
    if (!deleting && ci === w.length) delay = 1200;
    const t = setTimeout(() => {
      if (!deleting && ci < w.length) {
        setCi(ci + 1);
        setText(w.slice(0, ci + 1));
      } else if (!deleting) {
        setDeleting(true);
      } else if (deleting && ci > 0) {
        setCi(ci - 1);
        setText(w.slice(0, ci - 1));
      } else {
        setDeleting(false);
        setWi((wi + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [ci, deleting, wi]);

  return (
    <section id="home" className="mx-auto grid w-[min(1120px,calc(100%-40px))] min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-8 py-14 md:grid-cols-[1.12fr_.88fr] md:gap-14 md:py-[74px]">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 font-mono text-xs text-emerald-300">
          <i className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_12px_#42ff94]" />
          tersedia untuk freelance & kolaborasi
        </div>
        <h1 className="text-[clamp(43px,6vw,76px)] font-extrabold leading-[0.98] tracking-[-3px]">
          Halo, saya
          <br />
          <span className="grad-text drop-shadow-[0_0_15px_rgba(0,232,255,.35)]">Kiki Pratama.</span>
        </h1>
        <div className="mb-4 mt-2 min-h-6 font-mono text-[15px] text-cyan-300">
          &gt; {text}
          <span className="animate-pulse">_</span>
        </div>
        <p className="max-w-[600px] text-[17px] leading-[1.75] text-slate-400">
          Developer di balik <b className="text-cyan-300">senna.dev</b>. Saya membangun bot Telegram,
          website, dashboard admin, dan integrasi pembayaran yang terasa simpel untuk pengguna tapi
          tetap rapi di belakang layar.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#about" className="rounded-[10px] border border-cyan-300/50 bg-gradient-to-br from-violet-600 to-violet-800 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5">
            Kenal Saya Lebih Dekat ↓
          </a>
          <a href="https://t.me/sennasite" target="_blank" rel="noopener noreferrer" className="rounded-[10px] border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5">
            Telegram @sennasite
          </a>
        </div>
        <div className="mt-7 flex items-center gap-3 text-[13px] text-slate-400">
          <span className="font-mono">CONNECT</span>
          <a href="https://t.me/sennasite" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-cyan-300/20 px-3 py-2 text-cyan-100 transition hover:border-cyan-300 hover:text-cyan-300">Telegram</a>
          <a href="https://sennmarket.web.id" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-cyan-300/20 px-3 py-2 text-cyan-100 transition hover:border-cyan-300 hover:text-cyan-300">SennMarket</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mx-auto aspect-square w-[min(100%,360px)]"
      >
        <div className="absolute inset-[4%] animate-[spin_20s_linear_infinite] rounded-full border border-cyan-300 opacity-35" />
        <div className="absolute inset-[13%] animate-[spin_13s_linear_infinite_reverse] rounded-full border border-dashed border-violet-500 opacity-55" />
        <div className="absolute inset-[18%] overflow-hidden rounded-full border border-cyan-300/50 bg-[#060915] shadow-[0_0_50px_rgba(0,232,255,.24),0_0_100px_rgba(156,85,255,.25)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/avatar.jpg" alt="Avatar Kiki Pratama — senna.dev" className="h-full w-full scale-[1.02] object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03030a]/55 via-transparent to-cyan-400/10" />
        </div>
        <span className="absolute right-[-4%] top-[8%] rounded-lg border border-cyan-300/20 bg-[#0a0b19]/90 px-2.5 py-2 font-mono text-[11px] text-cyan-100">WEB BUILDER</span>
        <span className="absolute bottom-[18%] left-[-9%] rounded-lg border border-cyan-300/20 bg-[#0a0b19]/90 px-2.5 py-2 font-mono text-[11px] text-cyan-100">TELEGRAM BOT</span>
        <span className="absolute bottom-[5%] right-[1%] rounded-lg border border-emerald-300/35 bg-[#0a0b19]/90 px-2.5 py-2 font-mono text-[11px] text-emerald-300">● SENNA.DEV</span>
      </motion.div>
    </section>
  );
}
