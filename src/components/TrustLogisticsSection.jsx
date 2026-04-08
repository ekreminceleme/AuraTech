const logistics = [
  { label: "Shipping Regions", value: "EU, UK, US, Canada (Phase 1)" },
  { label: "Dispatch Window", value: "2-4 business days after release date" },
  { label: "Returns", value: "30-day no-hassle return policy" },
  { label: "Warranty", value: "2-year international coverage" },
  { label: "Support", value: "24/7 email support + live chat weekdays" }
];

export default function TrustLogisticsSection() {
  return (
    <section id="trust" className="border-t border-white/10 bg-slate-950 px-4 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10" data-reveal>
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">Trust & Logistics</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Clear Delivery and Support Policies
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {logistics.map((item) => (
            <article
              key={item.label}
              data-reveal
              className="rounded-xl border border-white/10 bg-slate-900/40 p-4"
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
