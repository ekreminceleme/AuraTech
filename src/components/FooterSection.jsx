export default function FooterSection() {
  const progress = 62;

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div
          data-reveal
          className="rounded-3xl border border-cyan-300/20 bg-cyan-400/5 p-8 text-center md:p-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">Final Call</p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Hear Every Detail With Aura One
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            If Aura One fits your workflow, reserve a unit in the current production batch.
          </p>
          <div className="mx-auto mt-5 w-full max-w-xl rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 text-left">
            <p className="text-xs font-semibold tracking-[0.12em] text-amber-200 uppercase">
              Production batch status
            </p>
            <p className="mt-1 text-sm text-amber-100">
              Reservations are still open. Availability is updated each week.
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-900/70">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-amber-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <a
            href="#pricing"
            className="mt-7 inline-flex rounded-full border border-cyan-300/60 bg-cyan-400/10 px-8 py-3 text-xs font-semibold tracking-[0.16em] text-cyan-100 uppercase transition-all hover:bg-cyan-300/20"
          >
            Pre-order Aura One
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row">
          <p>Aura Tech 2026. Crafted for focus.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cyan-300">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan-300">
              Terms
            </a>
            <a href="#" className="hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
