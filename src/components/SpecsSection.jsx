const rows = [
  { label: "Driver", aura: "40mm custom titanium-coated", alt: "40mm standard dynamic" },
  { label: "Impedance", aura: "32 ohm", alt: "28-32 ohm" },
  { label: "Latency (Gaming Mode)", aura: "58ms", alt: "90ms" },
  { label: "Battery", aura: "40h", alt: "28h" },
  { label: "Hybrid ANC", aura: "Yes (3-level adaptive)", alt: "Basic feed-forward" },
  { label: "Weight", aura: "245g", alt: "278g" },
  { label: "Fast Charge", aura: "5 min = 4h", alt: "10 min = 2h" }
];

const connectivity = [
  { label: "Bluetooth", value: "5.3 multipoint (2 devices)" },
  { label: "Profiles", value: "A2DP, AVRCP, HFP" },
  { label: "Codecs", value: "LDAC, AAC, SBC" },
  { label: "Wired", value: "USB-C digital audio mode" }
];

export default function SpecsSection() {
  return (
    <section id="specs" className="border-t border-white/10 bg-slate-950 px-4 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl" data-reveal>
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">Specs & Comparison</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Aura One vs Market Average</h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse bg-white/[0.02] text-left">
            <thead className="border-b border-white/10 bg-white/[0.03]">
              <tr>
                <th className="px-5 py-4 text-xs tracking-[0.12em] text-slate-300 uppercase">Metric</th>
                <th className="px-5 py-4 text-xs tracking-[0.12em] text-cyan-300 uppercase">Aura One</th>
                <th className="px-5 py-4 text-xs tracking-[0.12em] text-slate-400 uppercase">Average Competitor</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-white/10 last:border-b-0">
                  <td className="px-5 py-4 text-sm text-slate-200">{row.label}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-cyan-200">{row.aura}</td>
                  <td className="px-5 py-4 text-sm text-slate-300">{row.alt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {connectivity.map((item) => (
            <article
              key={item.label}
              data-reveal
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase">{item.label}</p>
              <p className="mt-2 text-sm text-slate-200">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
