import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-center bg-white overflow-hidden pt-16 pb-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, white 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 mb-8">
              <span className="text-[#F4511E] text-xs">✤</span>
              <span className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase">
                Software Development Company
              </span>
            </div>

            <h1
              className="font-sans font-bold text-[#0A0A0A] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              We Transform
              <br />
              Businesses into
              <br />
              Global Solution.
            </h1>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-md mb-10">
              From scalable software solutions to cloud services, we empower
              enterprises across Africa with technology that drives growth and
              success.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-[#F4511E] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-orange-600 transition-colors"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/projects"
                className="border border-gray-200 text-[#0A0A0A] font-semibold text-sm px-7 py-3.5 rounded-full hover:border-gray-400 transition-colors"
              >
                View Work
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/World Map.png"
              alt="Global software solution map"
              width={600}
              height={450}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}