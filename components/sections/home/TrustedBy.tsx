import Image from "next/image";

const logos = [
  "/images/logo 1.png",
  "/images/logo 2.png",
  "/images/logo 3.png",
  "/images/logo 4.png",
  "/images/logo 5.png",
  "/images/logo 6.png",
  "/images/logo 7.png",
  "/images/logo 8.png",
  "/images/logo 9.png",
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#F4511E] text-xs">✤</span>
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400">
            We Are Trusted.
          </span>
        </div>
        <h2
          className="font-sans font-bold text-[#0A0A0A] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
        >
          Trusted by Leading Organizations
          <br />
          Across Africa and Beyond
        </h2>
        <p className="text-gray-500 text-sm mb-14 max-w-sm leading-relaxed">
          We build for Startup and enterprise businesses in diverse industries.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-10 items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Partner logo ${i + 1}`}
                width={120}
                height={50}
                className="w-full h-auto object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}