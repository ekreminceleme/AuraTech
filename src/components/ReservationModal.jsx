import { useEffect, useRef, useState } from "react";

export default function ReservationModal({ isOpen, onClose }) {
  const panelRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setIsSubmitted(false);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/75 px-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (panelRef.current && !panelRef.current.contains(event.target)) onClose();
      }}
      role="presentation"
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-cyan-500/10 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Reserve Aura One"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-200 transition-colors hover:border-cyan-300/60 hover:text-cyan-200 md:right-8 md:top-8"
        >
          Close
        </button>

        <div className="grid gap-6 md:grid-cols-[1fr_360px] md:gap-8">
          <div>
            <div className="mb-6 pr-24">
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                Reservation Form
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-100">Reserve Aura One</h3>
              <p className="mt-2 text-sm text-slate-300">
                Complete the form below and we will confirm your pre-order by email.
              </p>
            </div>

            {isSubmitted ? (
              <div className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 p-5">
                <p className="text-sm font-semibold text-cyan-100">Reservation received.</p>
                <p className="mt-2 text-sm text-slate-200">
                  Thanks for reserving Aura One. You will receive a confirmation email shortly.
                </p>
              </div>
            ) : (
              <form
                className="grid gap-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setIsSubmitted(true);
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-slate-200">
                    Full Name
                    <input
                      required
                      type="text"
                      placeholder="John Carter"
                      className="rounded-lg border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-cyan-300/70"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-slate-200">
                    Email
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="rounded-lg border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-cyan-300/70"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-slate-200">
                    Phone (optional)
                    <input
                      type="tel"
                      placeholder="+40 7xx xxx xxx"
                      className="rounded-lg border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-cyan-300/70"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-slate-200">
                    Quantity
                    <select
                      defaultValue="1"
                      className="rounded-lg border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-cyan-300/70"
                    >
                      <option value="1">1 unit</option>
                      <option value="2">2 units</option>
                      <option value="3">3 units</option>
                      <option value="4">4 units</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-slate-200">
                  Notes (optional)
                  <textarea
                    rows={4}
                    placeholder="Any delivery or billing notes..."
                    className="resize-none rounded-lg border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-cyan-300/70"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-cyan-300/60 bg-cyan-400/10 px-7 py-3 text-xs font-semibold tracking-[0.14em] text-cyan-100 uppercase transition-all hover:bg-cyan-300/20"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>

          <div className="hidden md:grid place-items-center">
            <div className="w-full">
              <img
                src="/aura-headphones.svg"
                alt="Aura One headphones"
                className="modal-float h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
