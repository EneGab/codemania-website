import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />
      {/* Fade edges */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, white 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-[#F4511E] rounded-full animate-pulse" />
              <span className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase">
                #1 Enterprise Software Company in Africa
              </span>
            </div>

            <h1 className="font-display font-bold leading-[1.05] text-dark mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
              We{" "}
              <em className="not-italic text-[#F4511E]">Transform</em>
              <br />
              Business Into
              <br />
              Global Solution.
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-10">
              From fintech to healthcare, we craft mission-critical software that
              helps forward-thinking enterprises scale their operations globally.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-[#F4511E] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-orange-600 transition-colors active:scale-95"
              >
                Start Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-dark hover:text-[#F4511E] transition-colors"
              >
                Explore More <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right — abstract globe visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[340px]">
              {/* Rings */}
              {[320, 240, 160, 80].map((size, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-gray-200"
                  style={{
                    width: size,
                    height: size,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 1 - i * 0.15,
                  }}
                />
              ))}
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F4511E]" />

              {/* Location dots */}
              {[
                { top: "22%", left: "28%", city: "Lagos" },
                { top: "38%", left: "68%", city: "London" },
                { top: "62%", left: "22%", city: "Abuja" },
                { top: "28%", left: "72%", city: "New York" },
                { top: "70%", left: "58%", city: "Nairobi" },
              ].map((pin) => (
                <div key={pin.city} className="absolute flex flex-col items-center" style={{ top: pin.top, left: pin.left }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F4511E] border-2 border-white shadow" />
                  <span className="text-[10px] font-medium text-gray-400 mt-1 whitespace-nowrap">{pin.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
