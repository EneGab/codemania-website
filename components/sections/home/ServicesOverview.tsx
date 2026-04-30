import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <SectionLabel text="What We Do" className="mb-4" />
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark leading-tight max-w-xl">
            Software Development Services Modern Enterprises.
          </h2>
        </div>

        <div className="space-y-24">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Text — alternates side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F4511E] mb-4 block">
                  {svc.tag}
                </span>
                <h3 className="font-display font-bold text-3xl lg:text-4xl text-dark mb-4 leading-tight">
                  {svc.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">{svc.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-dark mb-3">Key Benefits:</p>
                  <ul className="space-y-1.5">
                    {svc.benefits.map((b, bi) => (
                      <li key={bi} className={`text-sm font-medium ${b.color}`}>{b.text}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/services#${svc.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-dark hover:text-[#F4511E] transition-colors"
                >
                  Learn More <ArrowUpRight size={13} className="text-[#F4511E]" />
                </Link>
              </div>

              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-lg">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
