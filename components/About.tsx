'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="mx-auto w-[min(1120px,calc(100%-40px))] py-[92px]">
      <p className="mb-3 font-mono text-xs uppercase tracking-[2px] text-cyan-300 text-glow-cyan">{'// tentang saya'}</p>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[.75fr_1.25fr] md:gap-[70px]">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-violet-500/5 p-6"
        >
          <div className="grid h-[62px] w-[62px] place-items-center rounded-[15px] border border-cyan-300/20 bg-cyan-300/10 text-[25px] font-extrabold text-cyan-300">K</div>
          <h3 className="mb-1 mt-4 text-[22px] font-bold">Kiki Pratama</h3>
          <p className="text-sm text-slate-400">Bot & Web Developer<br />Founder / builder at <span className="text-cyan-300">senna.dev</span></p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="border-t border-cyan-300/20 pt-3"><b className="block text-[13px] text-cyan-300">FOKUS</b><span className="text-sm text-slate-400">Bot, web & automation</span></div>
            <div className="border-t border-cyan-300/20 pt-3"><b className="block text-[13px] text-cyan-300">PRINSIP</b><span className="text-sm text-slate-400">Simpel, aman, nyaman</span></div>
          </div>
        </motion.aside>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="mb-3 text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.06] tracking-[-1.5px]">Membuat sistem digital yang benar-benar bisa dipakai.</h2>
          <p className="max-w-[620px] leading-[1.75] text-slate-400">Saya suka mengubah kebutuhan bisnis menjadi alur digital yang jelas: pelanggan mudah order, admin mudah mengelola, dan proses di belakang tetap terpantau. Dari bot auto-order hingga payment flow dan deployment, saya mengerjakan bagian yang membuat produk siap digunakan.</p>
          <div className="my-6 h-px bg-gradient-to-r from-cyan-300 to-transparent opacity-35" />
          <p className="max-w-[620px] leading-[1.75] text-slate-400">Nama saya adalah <b className="text-white">Kiki Pratama</b>. <b className="text-cyan-300">senna.dev</b> adalah identitas digital dan tempat saya membangun project. Saat ini saya sedang mendalami cloud dan backend tingkat lanjut untuk membangun sistem yang lebih scalable.</p>
        </motion.div>
      </div>
    </section>
  );
}
