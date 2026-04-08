const useCases = [
  {
    title: "Creator Mode",
    audience: "Music producers and video editors",
    points: ["Low-latency wired mode", "Detailed mids for vocal precision", "Memory profiles per device"]
  },
  {
    title: "Remote Work Mode",
    audience: "Meetings, calls, and deep work",
    points: ["Dual-mic voice isolation", "Adaptive ANC for office chatter", "40h battery for full work week"]
  },
  {
    title: "Travel Mode",
    audience: "Flights, commuting, and mobility",
    points: ["Compact fold + hard-shell case", "Fast charge: 5 min = 4h", "Ambient mode for announcements"]
  }
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="border-t border-white/10 bg-slate-950 px-4 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl" data-reveal>
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">Use Cases</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Built For Real Daily Contexts
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              data-reveal
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-1 text-sm text-cyan-200">{item.audience}</p>
              <ul className="mt-4 grid gap-2">
                {item.points.map((point) => (
                  <li key={point} className="text-sm text-slate-300">
                    - {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
