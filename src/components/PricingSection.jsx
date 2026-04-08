const planDetails = [
  "Aura One headphones",
  "Hard-shell premium travel case",
  "USB-C fast charging cable",
  "2-year international warranty"
];

export default function PricingSection({ onReserveClick }) {
  return (
    <section id="pricing" className="border-t border-white/10 bg-slate-950 px-4 py-20 md:py-28">
      <div
        data-reveal
        className="mx-auto grid w-full max-w-6xl gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-2 md:p-10"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">Launch Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Early Access Pricing
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Intro pricing is available during the first production run. Shipping starts in July.
          </p>
          <div className="mt-6 flex items-end gap-3">
            <p className="text-4xl font-semibold text-cyan-200">$279</p>
            <p className="pb-1 text-sm text-slate-400 line-through">$349</p>
          </div>
          <button
            type="button"
            onClick={onReserveClick}
            className="mt-7 inline-flex rounded-full border border-cyan-300/60 bg-cyan-400/10 px-7 py-3 text-xs font-semibold tracking-[0.16em] text-cyan-100 uppercase transition-all hover:bg-cyan-300/20"
          >
            Reserve Your Pair
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <h3 className="text-lg font-semibold text-slate-100">In The Box</h3>
          <ul className="mt-4 grid gap-3">
            {planDetails.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-400">
            30-day return policy and free delivery in EU & US.
          </p>
        </div>
      </div>
    </section>
  );
}
