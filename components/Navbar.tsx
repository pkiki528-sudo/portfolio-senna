const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#skills', label: 'Layanan' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Kontak' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#03030a]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-[min(1120px,calc(100%-40px))] flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 md:flex-nowrap md:py-0">
        <a href="#home" className="text-base font-extrabold tracking-tight sm:text-xl">
          kiki<span className="text-cyan-300 text-glow-cyan">.pratama</span>
          <small className="ml-2 hidden font-mono text-[10px] font-medium text-violet-400 sm:inline">× senna.dev</small>
        </a>
        <nav aria-label="Navigasi utama" className="order-last flex w-full items-center justify-between gap-2 text-sm text-slate-400 md:order-none md:w-auto md:justify-start md:gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-cyan-300">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://t.me/sennasite"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[10px] border border-cyan-300/50 bg-gradient-to-br from-violet-600 to-violet-800 shrink-0 px-3 py-3 text-sm font-bold shadow-[0_0_18px_rgba(0,232,255,.25)] transition hover:-translate-y-0.5"
        >
          Chat Saya ↗
        </a>
      </div>
    </header>
  );
}
