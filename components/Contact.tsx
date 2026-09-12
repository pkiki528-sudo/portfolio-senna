'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-[min(1120px,calc(100%-40px))] py-[92px] pt-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[20px] border border-violet-500/45 bg-[#090a15] px-8 py-14 text-center shadow-[0_0_60px_rgba(156,85,255,.15)]"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[2px] text-cyan-300">{'// mari berdiskusi'}</p>
        <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-[-1.5px]">Punya ide project?</h2>
        <p className="mx-auto mb-6 mt-3 max-w-[570px] leading-[1.7] text-slate-400">Kirim kebutuhan, target waktu, dan gambaran budget lewat Telegram. Kita tentukan scope yang realistis dan mulai dari fitur inti yang paling penting.</p>
        <a href="https://t.me/sennasite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-cyan-300/50 bg-gradient-to-br from-violet-600 to-violet-800 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5">
          💬 Chat Kiki di Telegram
        </a>
        <p className="mt-4 font-mono text-xs text-cyan-300">@sennasite · senna.dev</p>
      </motion.div>
    </section>
  );
}
