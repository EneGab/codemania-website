import Image from "next/image";

const reasons = [
 { title: "Industry-Leading Expertise", image: "/images/expertise.jpg" },
 { title: "Security & Compliance First", image: "/images/security.jpg" },
 { title: "24/7 Client Excellence", image: "/images/aws-cloud.jpg" },
 { title: "Full-Cycle Development Approach", image: "/images/full-cycle.jpg" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <h2
            className="font-sans font-bold text-[#0A0A0A] mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            Why Global and Local Enterprises Choose Codemania
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            We combine global technical excellence with local market
            understanding to deliver solutions that work for African enterprises.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-900 group"
            >
              <Image
                src={r.image}
                alt={r.title}
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <p className="text-white font-sans font-bold text-sm lg:text-base leading-snug">
                  {r.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}