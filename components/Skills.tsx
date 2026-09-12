'use client';

import { motion } from 'framer-motion';

const services = [
  { n: '01', t: 'Telegram Bot', d: 'Bot auto-order, sistem saldo, katalog produk, notifikasi, admin command, dan alur delivery digital.' },
  { n: '02', t: 'Web & Dashboard', d: 'Landing page, storefront, Mini App, serta dashboard admin yang cepat dan nyaman digunakan.' },
  { n: '03', t: 'Payment Integration', d: 'Alur QRIS/invoice, webhook, status pembayaran, topup, dan pencatatan order yang lebih rapi.' },
  { n: '04', t: 'Deploy & Maintenance', d: 'Persiapan project untuk Pterodactyl atau VPS, konfigurasi environment, dan pengecekan dasar sebelum live.' },
  { n: '05', t: 'Perbaikan Bot', d: 'Audit error, perapihan fitur, debugging alur order, keamanan konfigurasi, hingga stabilitas runtime.' },
  { n: '06', t: 'Custom Project', d: 'Punya ide khusus? Kita mulai dari scope MVP agar fitur inti jadi dulu dan bisa ditest lebih cepat.' },
];

const stack = ['Go', 'Node.js', 'Telegram Bot API', 'REST API', 'QRIS / Webhook', 'SQLite / JSON', 'Pterodactyl', 'VPS'];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-cyan-300/10 bg-gradient-to-b from-transparent via-[#0a0d1d]/80 to-transparent py-[92px]">
      <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
        <p className="mb-3 font-mono text-xs uppercase tracking-[2px] text-cyan-300 text-glow-cyan">{'// keahlian & layanan'}</p>
        <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-[-1.5px]">Yang bisa saya bantu bangun.</h2>
        <p className="mt-3 max-w-[620px] leading-[1.75] text-slate-400">Fokus pada fondasi produk: pengalaman customer, proses admin, automation, serta deployment yang siap dipakai.</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="relative overflow-hidden rounded-[14px] border border-cyan-300/20 bg-[#090a15] p-6 transition hover:-translate-y-1.5 hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(0,232,255,.14)]"
            >
              <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-300 via-violet-500 to-pink-500" />
              <div className="font-mono text-[22px] text-cyan-300">{s.n}</div>
              <h3 className="mb-2 mt-4 text-[19px] font-bold">{s.t}</h3>
              <p className="text-sm leading-[1.65] text-slate-400">{s.d}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-[7px] border border-cyan-300/20 bg-cyan-300/5 px-2.5 py-2 font-mono text-xs text-cyan-100">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
