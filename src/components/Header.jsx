import { useState } from "react";

const navItems = [
  { label: "Why Aura", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Specs", href: "#specs" },
  { label: "Timeline", href: "#timeline" },
  { label: "Trust", href: "#trust" },
  { label: "FAQ", href: "#faq" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.22em] text-cyan-300 uppercase"
        >
          Aura Tech
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-200 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden rounded-full border border-cyan-300/60 bg-cyan-400/10 px-5 py-2 text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase transition-all hover:border-cyan-200 hover:bg-cyan-300/20 md:inline-flex"
          >
            Pre-order
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex rounded-md border border-white/20 p-2 text-slate-200 md:hidden"
          >
            <span className="text-xs tracking-widest uppercase">Menu</span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-slate-100 transition-colors hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full border border-cyan-300/60 bg-cyan-400/10 px-4 py-2 text-center text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase"
            >
              Pre-order now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
