import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "software-dev",
    tag: "Development",
    tagColor: "text-[#F4511E]",
    title: "Bespoke Enterprise Software Development",
    description:
      "We build custom, mission-critical applications designed for your unique business requirements. We create scalable, secure, and high-performance software.",
    benefits: [
      { text: "Custom-built for your workflows", color: "text-[#F4511E]" },
      { text: "Scalable architecture", color: "text-[#F4511E]" },
      { text: "Future-proof technology stack", color: "text-[#F4511E]" },
      { text: "Seamless third-party integrations", color: "text-[#F4511E]" },
    ],
    image: "/images/software-dev-mockup.png",
  },
  {
    id: "cloud",
    tag: "Cloud",
    tagColor: "text-green-500",
    title: "Digital Transformation & Cloud Migration",
    description:
      "Modernize your legacy systems and unlock the power of cloud computing. As an AWS Partner, we specialize in seamless cloud migration strategies.",
    benefits: [
      { text: "50% faster transaction processing", color: "text-[#F4511E]" },
      { text: "Reduced infrastructure costs", color: "text-[#F4511E]" },
      { text: "Enhanced system reliability", color: "text-[#F4511E]" },
      { text: "AWS-certified implementation", color: "text-[#F4511E]" },
    ],
    image: "/images/cloud-mockup.png",
  },
  {
    id: "data",
    tag: "Data",
    tagColor: "text-blue-500",
    title: "Data & Analytics Solutions",
    description:
      "Transform your data into actionable insights. We design and implement secure data warehousing and business intelligence platforms.",
    benefits: [
      { text: "Real-time business dashboards", color: "text-[#F4511E]" },
      { text: "Predictive analytics", color: "text-[#F4511E]" },
      { text: "Automated reporting systems", color: "text-[#F4511E]" },
      { text: "Better decision-making", color: "text-[#F4511E]" },
    ],
    image: "/images/data-mockup.png",
  },
  {
    id: "regtech",
    tag: "RegTech",
    tagColor: "text-purple-500",
    title: "Regulatory & Compliance Technology",
    description:
      "Navigate complex regulatory landscapes with confidence. We develop compliance-focused solutions tailored to meet stringent industry regulations.",
    benefits: [
      { text: "CBN, NDPR & global standards compliance", color: "text-[#F4511E]" },
      { text: "Automated compliance workflows", color: "text-[#F4511E]" },
      { text: "Audit trail and reporting", color: "text-[#F4511E]" },
      { text: "Risk management systems", color: "text-[#F4511E]" },
    ],
    image: "/images/regtech.png",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#F4511E] text-xs">✤</span>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400">
              What We Do
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-sans font-bold text-[#0A0A0A] leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Software Development
              <br />
              Services Modern Enterprises.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed lg:max-w-sm lg:ml-auto">
              From initial concept to scaling and maintenance, we deliver
              full-cycle software development services tailored to your
              business needs.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${svc.tagColor}`}>
                  {svc.tag}
                </span>
                <h3
                  className="font-sans font-bold text-[#0A0A0A] mb-5 leading-tight"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>
                <div className="mb-7">
                  <p className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-3">
                    Key Benefits:
                  </p>
                  <ul className="space-y-2">
                    {svc.benefits.map((b, bi) => (
                      <li key={bi} className={`text-sm font-semibold flex items-center gap-2 ${b.color}`}>
                        <span>•</span> {b.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/services#${svc.id}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#0A0A0A] hover:text-[#F4511E] transition-colors"
                >
                  View Details <ArrowUpRight size={14} className="text-[#F4511E]" />
                </Link>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Image
                  src={svc.image}
                  alt={svc.title}
                  width={560}
                  height={420}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}