import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[9px] text-white/40">✦</span>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40">LET&apos;S BUILD</span>
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-[1.1]">
              Ready to<br />Transform Your<br />Business?
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-white/40 text-lg lg:text-xl leading-relaxed mb-8">
              Collaborate to build apps or transition to the cloud. Our team is ready to drive your success.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-display font-bold text-3xl lg:text-4xl text-white/30 hover:text-white transition-colors duration-300"
            >
              Get In Touch
              <span className="text-[#F4511E] group-hover:translate-x-1 transition-transform">✦</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
