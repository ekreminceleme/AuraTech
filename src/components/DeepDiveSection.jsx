const blocks = [
  {
    title: "Adaptive ANC Intelligence",
    copy:
      "Multiple microphones sample your environment 700 times per second and auto-tune cancellation without distorting vocals.",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium headphones in urban night setting"
  },
  {
    title: "Spatial Sound Personalization",
    copy:
      "Head tracking and profile calibration produce a wider stage, accurate placement and immersive depth in music and films.",
    image:
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=1400&q=80",
    alt: "Headphones with abstract blue light waves"
  },
  {
    title: "All-Day Ergonomics",
    copy:
      "Memory foam earcups, lightweight alloy frame and pressure-balanced headband reduce fatigue during long sessions.",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&q=80",
    alt: "Close-up of soft ear cushion and headband details"
  }
];

export default function DeepDiveSection() {
  return (
    <section id="deep-dive" className="border-t border-white/10 bg-slate-950 px-4 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-6">
        {blocks.map((block, index) => (
          <article
            key={block.title}
            data-reveal
            className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-2 md:items-center md:p-10"
          >
            <div className={index % 2 ? "md:order-2" : ""}>
              <h3 className="text-2xl font-semibold text-slate-100">{block.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {block.copy}
              </p>
            </div>
            <div
              className={`relative aspect-[16/10] max-h-[280px] overflow-hidden rounded-2xl border border-cyan-300/20 ${
                index % 2 ? "md:order-1" : ""
              }`}
            >
              <img
                src={block.image}
                alt={block.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-900/10 to-cyan-500/10" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
