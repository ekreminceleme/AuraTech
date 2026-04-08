const highlights = [
  "Beta testers from studio, office and travel workflows",
  "Weekly feedback rounds used to tune comfort and ANC",
  "Early access batch currently open"
];

const testimonials = [
  {
    avatar: "ML",
    name: "Mara L.",
    role: "Music Producer",
    quote: "The detail retrieval is excellent and noise cancellation stays musical, not artificial.",
    scores: { sound: "Detailed", comfort: "Stable", anc: "Natural" }
  },
  {
    avatar: "AP",
    name: "Alex P.",
    role: "UI Designer",
    quote: "Comfort is top-tier. I wear Aura One for full design sprints without pressure points.",
    scores: { sound: "Balanced", comfort: "All-day", anc: "Consistent" }
  },
  {
    avatar: "DR",
    name: "Diana R.",
    role: "Frequent Traveler",
    quote: "ANC on flights is a game changer, and one charge easily covers multi-leg routes.",
    scores: { sound: "Clear", comfort: "Soft fit", anc: "Excellent" }
  }
];

export default function SocialProofSection() {
  return (
    <section className="border-y border-white/10 bg-slate-950/60 px-4 py-16">
      <div className="mx-auto w-full max-w-6xl" data-reveal>
        <div className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold text-slate-100">Field-tested</p>
            <p className="text-sm text-slate-400">Feedback collected from real multi-week usage.</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-slate-100">Iteration-based</p>
            <p className="text-sm text-slate-400">Design updates shipped after each tester round.</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-slate-100">User-first</p>
            <p className="text-sm text-slate-400">Comfort and consistency prioritized over gimmicks.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-2 md:grid-cols-3">
          {highlights.map((item) => (
            <p key={item} className="text-sm text-slate-400">
              {item}
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              data-reveal
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{item.name}</p>
                  <p className="text-xs text-cyan-300/80">{item.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{item.quote}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <p className="rounded-md bg-slate-900/60 p-2 text-slate-300">
                  Sound <span className="text-cyan-200">{item.scores.sound}</span>
                </p>
                <p className="rounded-md bg-slate-900/60 p-2 text-slate-300">
                  Comfort <span className="text-cyan-200">{item.scores.comfort}</span>
                </p>
                <p className="rounded-md bg-slate-900/60 p-2 text-slate-300">
                  ANC <span className="text-cyan-200">{item.scores.anc}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
