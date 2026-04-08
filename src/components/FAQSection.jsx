import { useState } from "react";

const faqs = [
  {
    q: "Are Aura One compatible with iOS and Android?",
    a: "Yes. Aura One supports Bluetooth 5.3 with AAC and SBC on mobile platforms, plus LDAC on supported Android devices."
  },
  {
    q: "Can I use them wired for zero-latency workflows?",
    a: "Yes. USB-C wired audio mode is included for editing sessions, gaming and low-latency playback."
  },
  {
    q: "How long does full charging take?",
    a: "A complete charge takes around 90 minutes. A 5-minute quick charge delivers up to 4 hours of listening."
  },
  {
    q: "What warranty do I get?",
    a: "Every pair includes a 2-year international warranty and dedicated support for replacements and repairs."
  },
  {
    q: "Can I return the product if it does not fit me?",
    a: "Yes. You have 30 days to return your order in original condition for a full refund."
  },
  {
    q: "Is there multipoint connectivity?",
    a: "Yes. Aura One can stay connected to two devices simultaneously and switch intelligently between them."
  },
  {
    q: "Do you offer international shipping?",
    a: "Phase 1 includes EU, UK, US and Canada. Additional regions are added in the next shipping wave."
  },
  {
    q: "Are replacement ear cushions available?",
    a: "Yes. Official replacement cushions and accessories are available from launch month."
  },
  {
    q: "Does ANC affect audio quality?",
    a: "The DSP pipeline is tuned to preserve tonal balance, so music stays natural even with ANC active."
  },
  {
    q: "What is included in the warranty process?",
    a: "Warranty covers manufacturing defects, battery health issues and driver malfunction under normal usage."
  },
  {
    q: "Can I use the headset while charging?",
    a: "Yes. You can keep listening during charging in both wireless and USB-C wired modes."
  },
  {
    q: "When will pre-orders be delivered?",
    a: "Early-bird orders are scheduled to ship in July, with tracking details sent by email."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-t border-white/10 bg-slate-950 px-4 py-20 md:py-28">
      <div className="mx-auto w-full max-w-4xl" data-reveal>
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Questions, Answered</h2>
        </div>

        <div className="mt-10 grid gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.q}
                data-reveal
                className="rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-slate-100">{item.q}</span>
                  <span
                    className={`text-cyan-200 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden px-5 transition-all duration-300 ease-out ${
                    isOpen ? "pb-5 grid-rows-[1fr] opacity-100" : "pb-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-slate-300">{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
