import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HerMoney: A finance system for Corporate Workers",
    description: "Navigate complex regulatory landscapes with confidence. We develop compliance-focused.",
    image: "/images/hermoney.jpg",
    brand: "HerMoney",
  },
  {
    id: 2,
    title: "HerMoney: A finance system for Corporate Workers",
    description: "Navigate complex regulatory landscapes with confidence. We develop compliance-focused.",
    image: "/images/hermoney.jpg",
    brand: "HerMoney",
  },
  {
    id: 3,
    title: "HerMoney: A finance system for Corporate Workers",
    description: "Navigate complex regulatory landscapes with confidence. We develop compliance-focused.",
    image: "/images/hermoney.jpg",
    brand: "HerMoney",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#F4511E] text-xs">✤</span>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400">
                Our Work
              </span>
            </div>
            <h2
              className="font-sans font-bold text-[#0A0A0A] leading-tight"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}
            >
              Some projects we&apos;ve built for
              <br />
              diverse Industries
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs flex-shrink-0">
            Explore our case studies to see our detailed process in building each product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 bg-gray-100 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-white rounded-xl px-3 py-1.5 shadow flex items-center gap-2 z-10">
                  <div className="w-4 h-4 bg-[#F4511E] rounded-full flex items-center justify-center">
                    <span className="text-white text-[7px] font-bold">H</span>
                  </div>
                  <span className="text-xs font-bold text-[#0A0A0A]">{p.brand}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-sans font-bold text-base text-[#0A0A0A] leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {p.description}
                </p>
                <Link
                  href={`/projects/${p.id}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#0A0A0A] hover:text-[#F4511E] transition-colors"
                >
                  View Project↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}