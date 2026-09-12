export default function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 py-6 text-[13px] text-slate-400">
      <div className="mx-auto flex w-[min(1120px,calc(100%-40px))] justify-between gap-4 max-sm:flex-col">
        <div>© 2026 <b className="text-white">Kiki Pratama</b> · <span className="text-cyan-300">senna.dev</span></div>
        <div className="font-mono">BUILD · AUTOMATE · DEPLOY</div>
      </div>
    </footer>
  );
}
