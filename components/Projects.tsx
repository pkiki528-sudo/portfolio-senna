'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    label: '01 / DIGITAL MARKETPLACE',
    title: 'SennMarket',
    desc: 'Platform katalog produk digital dengan pengalaman belanja yang cepat dan tampilan storefront modern.',
    href: 'https://sennmarket.web.id',
    link: 'Kunjungi sennmarket.web.id →',
  },
  {
    label: '02 / PAYMENT PLATFORM',
    title: 'SennPayy',
    desc: 'Identitas project pembayaran digital untuk alur invoice dan kebutuhan transaksi online.',
    href: 'https://sennpayy.biz.id',
    link: 'Kunjungi sennpayy.biz.id →',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-[min(1120px,calc(100%-40px))] py-[92px]">
      <p className="mb-3 font-mono text-xs uppercase tracking-[2px] text-cyan-300 text-glow-cyan">{'// selected projects'}</p>
      <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-[-1.5px]">Project sebagai bukti kerja.</h2>
      <p className="mt-3 max-w-[620px] leading-[1.75] text-slate-400">Beberapa karya yang menjadi bagian dari ekosistem dan eksperimen digital saya.</p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="relative flex min-h-[250px] flex-col justify-end overflow-hidden rounded-[15px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-[#0a0a18]/90 to-violet-500/10 p-6 transition hover:-translate-y-1.5 hover:border-cyan-300/60"
          >
            <span className="font-mono text-[11px] tracking-[1px] text-cyan-300">{p.label}</span>
            <h3 className="mb-2 mt-2 text-[28px] font-extrabold tracking-[-.8px]">{p.title}</h3>
            <p className="mb-4 max-w-[480px] text-sm leading-[1.55] text-slate-400">{p.desc}</p>
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white transition hover:text-cyan-300">{p.link}</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
