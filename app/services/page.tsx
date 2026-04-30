import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import CTASection from "@/components/sections/shared/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive Software Solutions for Modern Enterprises.",
};

const approachItems = [
  { title: "AWS Certified Professionals", desc: "Enterprise-grade cloud solutions" },
  { title: "ISO 27001 Aligned", desc: "Security and compliance built-in" },
  { title: "Proven Experience", desc: "20+ projects for tier-1 organizations" },
  { title: "24/7 Support", desc: "Always available for you" },
  { title: "Transparent Pricing", desc: "No hidden costs or surprises" },
  { title: "On-Time Delivery", desc: "100% projects delivered" },
];

const serviceCards = [
  { icon: "💻", title: "SOFTWARE DEVELOPMENT", desc: "Custom-built software solutions designed specifically for your business processes and workflows." },
  { icon: "📊", title: "DATA ANALYTICS", desc: "Transform raw data into actionable business intelligence with powerful analytics solutions." },
  { icon: "🔒", title: "REGULATORY (REGTECH)", desc: "Navigate complex regulatory landscapes with confidence using compliance-focused solutions." },
  { icon: "🌐", title: "WEB & MOBILE DEVELOPMENT", desc: "Create powerful web and mobile applications that users love across all platforms." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel text="Our Services" center className="mb-5" />
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-dark leading-tight mb-6">
              Comprehensive Software Solutions for Modern Enterprises
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              From concept to deployment and beyond, we deliver full-cycle software
              development services that transform businesses and drive digital growth.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((card, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="font-display font-bold text-sm text-dark mb-2 uppercase tracking-wide">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <SectionLabel text="Our Approach" center className="mb-5 [&_span]:text-white/30 [&_svg]:text-white/20" />
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
              WHY CHOOSE OUR SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {approachItems.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <p className="font-display font-bold text-white mb-1">{item.title}</p>
                <p className="text-sm text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <SectionLabel text="What We Do" className="mb-5" />
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark leading-tight">
              Software Development Services Modern Enterprises.
            </h2>
          </div>
          <div className="space-y-24">
            {services.map((svc, i) => (
              <div key={svc.id} id={svc.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F4511E] mb-4 block">{svc.tag}</span>
                  <h3 className="font-display font-bold text-3xl lg:text-4xl text-dark mb-4 leading-tight">{svc.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{svc.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-dark mb-3">Key Benefits:</p>
                    <ul className="space-y-1.5">
                      {svc.benefits.map((b, bi) => (
                        <li key={bi} className={`text-sm font-medium ${b.color}`}>{b.text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-lg">
                    <Image src={svc.image} alt={svc.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
