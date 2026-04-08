const pillars = [
  {
    problem: "Open offices and city noise kill concentration.",
    solution:
      "Aura One uses adaptive ANC tuning that lowers repetitive noise while keeping voices intelligible in calls and conversations."
  },
  {
    problem: "Long sessions cause pressure and listening fatigue.",
    solution:
      "The frame is lightweight, clamp force is moderate, and the ear cushions are tuned for long sessions without hotspots."
  },
  {
    problem: "Most wireless headsets trade quality for convenience.",
    solution:
      "The sound profile is tuned for clarity first, with optional higher-bitrate codecs when your device supports them."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative border-t border-white/10 bg-slate-950 px-4 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl" data-reveal>
        <div className="mb-12 text-center md:mb-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300/90 uppercase">
            Why Aura
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[0.04em] text-slate-100 sm:text-4xl md:text-5xl">
            What We Fixed First
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.problem}
              data-reveal
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/40 hover:bg-white/[0.05]"
            >
              <p className="text-sm font-semibold text-rose-200/90">Problem</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.problem}</p>
              <p className="mt-5 text-sm font-semibold text-cyan-200">Aura Solution</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.solution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
