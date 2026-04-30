import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import CTASection from "@/components/sections/shared/CTASection";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Building the Future of Enterprise Software in Africa since 2015.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel text="About Us" center className="mb-5" />
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-dark leading-tight mb-6">
              Building the Future of Enterprise Software in Africa
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Since 2015, Codemania Nigeria Limited has been at the forefront of
              digital transformation, delivering mission-critical software solutions
              to tier-1 organizations across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-3 gap-4 h-64 lg:h-80">
            {[
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden">
                <Image src={src} alt={`About ${i + 1}`} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Our Story" className="mb-6" />
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark leading-tight mb-8">
                Born from Innovation, Built on Excellence
              </h2>
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                  alt="Our team" fill className="object-cover"
                />
              </div>
            </div>
            <div className="lg:pt-20">
              <p className="text-dark text-lg leading-relaxed mb-5">
                Codemania Nigeria Limited was born from a vision to simplify lives and{" "}
                <strong>empower organizations through cutting-edge technology solutions.</strong>{" "}
                In 2015, two individually successful teams came together with a unified mission.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                What started as a merger of expertise has evolved into one of Africa&apos;s most
                trusted software development firms. Today, we serve organizations in highly
                regulated markets where precision, security, and compliance are non-negotiable.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our 20+ full-time team members represent the best talent in African tech,
                combining international training with deep local market knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-orange-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <SectionLabel text="Our Values" center className="mb-5" />
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-display font-bold text-lg text-dark mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-12">
            <SectionLabel text="What We Do" className="mb-5" />
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark leading-tight">
              Backed by Industry<br />Leading Partnerships
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-dark mb-1">AWS Partner</h3>
              <p className="text-sm text-gray-400 mb-5">Network Member</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                As an AWS Partner, we deliver cloud solutions with enterprise-grade reliability,
                security, and performance using AWS best practices.
              </p>
              <ul className="space-y-1.5 mb-6">
                {["Access to AWS best practices","Priority support for cloud","Cost-optimization strategies","Proven cloud migration methodologies"].map((b,i)=>(
                  <li key={i} className="text-sm text-[#F4511E] font-medium">{b}</li>
                ))}
              </ul>
              <div className="inline-flex border-2 border-dashed border-gray-200 rounded-xl px-8 py-4">
                <span className="font-display font-bold text-2xl text-gray-300">aws PARTNER</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-dark mb-1">ISO 27001</h3>
              <p className="text-sm text-gray-400 mb-5">Aligned Processes</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Our development processes align with ISO 27001 standards, ensuring that
                information security is embedded in everything we do.
              </p>
              <ul className="space-y-1.5 mb-6">
                {["Systematic approach for managing sensitive info","Regular security audits","Comprehensive risk management","Documented security procedures"].map((b,i)=>(
                  <li key={i} className="text-sm text-gray-500">{b}</li>
                ))}
              </ul>
              <div className="inline-flex border-2 border-dashed border-gray-200 rounded-xl px-8 py-4">
                <span className="font-display font-bold text-2xl text-gray-300">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
