const timeline = [
  { phase: "Industrial Design", date: "Jan 2026", detail: "Ergonomic frame prototypes and material trials finalized." },
  { phase: "Acoustic Tuning", date: "Feb 2026", detail: "Driver calibration, DSP presets and spatial profile validation." },
  { phase: "Field Testing", date: "Mar 2026", detail: "120 beta testers across studio, office and travel scenarios." },
  { phase: "Mass Production", date: "Apr 2026", detail: "QC line locked with third-party durability certification." },
  { phase: "First Shipments", date: "Jul 2026", detail: "Launch batch dispatched to EU and US early-bird customers." }
];

export default function LaunchTimelineSection() {
  return (
    <section id="timeline" className="border-t border-white/10 bg-slate-950 px-4 py-20 md:py-28">
      <div className="mx-auto w-full max-w-5xl" data-reveal>
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">Launch Timeline</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Design to Delivery Roadmap
          </h2>
        </div>

        <div className="grid gap-4">
          {timeline.map((item) => (
            <article
              key={item.phase}
              data-reveal
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:grid md:grid-cols-[220px_1fr] md:items-center md:gap-6"
            >
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold text-cyan-200">{item.date}</p>
                <p className="mt-1 text-xl font-semibold text-slate-100">{item.phase}</p>
              </div>
              <p className="mt-2 text-center text-sm leading-relaxed text-slate-300 md:mt-0 md:text-left">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
