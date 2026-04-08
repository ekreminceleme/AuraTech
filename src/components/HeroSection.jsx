import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import auraHeadphonesImage from "../assets/aura-headphones.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageWrapRef = useRef(null);

  const title = "AURA TECH";
  const letters = useMemo(() => title.split(""), [title]);

  useEffect(() => {
    const section = sectionRef.current;
    const titleEl = titleRef.current;
    const imageWrap = imageWrapRef.current;
    if (!section || !titleEl || !imageWrap) return undefined;

    const context = gsap.context(() => {
      const chars = titleEl.querySelectorAll(".hero-char");

      gsap.fromTo(
        chars,
        { y: 38, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.045,
          duration: 0.8,
          ease: "power3.out"
        }
      );

      gsap.to(imageWrap, {
        y: -18,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(imageWrap, {
        scale: 1.08,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(titleEl, {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "center top",
          scrub: true
        }
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[130vh] items-start justify-center overflow-hidden bg-slate-950 px-4 pt-24 md:min-h-[145vh] md:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.09),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(71,85,105,0.26),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,0.9),rgba(2,6,23,1))]" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-6xl place-items-center gap-8 py-20 text-center md:sticky md:top-0 md:gap-10">
        <p className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-cyan-200 uppercase">
          First Production Run - Summer 2026
        </p>
        <h1
          ref={titleRef}
          className="text-balance text-5xl font-semibold tracking-[0.15em] text-transparent sm:text-6xl md:text-8xl"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #cbd5e1 8%, #f8fafc 28%, #64748b 48%, #f8fafc 68%, #94a3b8 90%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text"
          }}
        >
          {letters.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="hero-char inline-block"
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="max-w-2xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
          We built Aura One for people who wear headphones for hours, not minutes. The focus
          is simple: clean sound, reliable noise control, and comfort that still feels good at
          the end of the day.
        </p>

        <div
          ref={imageWrapRef}
          className="relative mt-2 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px]"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-cyan-400/10 blur-3xl" />
          <img
            src={auraHeadphonesImage}
            alt="Aura Tech premium headphones"
            loading="eager"
            className="h-auto w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-cyan-500/10"
          />
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold tracking-[0.14em] text-slate-100 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-cyan-300/60 hover:bg-white/15 hover:shadow-glow"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Pre-order Now</span>
          </a>
          <a
            href="#specs"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold tracking-[0.14em] text-slate-200 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
          >
            Explore Specs
          </a>
        </div>

        <p className="text-xs text-slate-400">
          Free shipping in launch regions • 30-day return • 2-year warranty
        </p>
      </div>
    </section>
  );
}
