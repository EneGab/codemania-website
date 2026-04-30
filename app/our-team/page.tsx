import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import CTASection from "@/components/sections/shared/CTASection";
import { leaders, teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description: "World-Class Talent, Global Innovation.",
};

export default function OurTeamPage() {
  return (
    <>
      <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel text="Our Team" center className="mb-5" />
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-dark leading-tight mb-6">
              World-Class Talent, Global Innovation
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Behind every successful project is a team of passionate, highly skilled professionals
              who live and breathe technology. Our 20+ full-time team members represent the best
              talent in African tech.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {[...teamMembers, ...teamMembers].map((m, i) => (
              <div key={i} className="flex-shrink-0 text-center">
                <div className="relative w-36 h-44 rounded-2xl overflow-hidden">
                  <Image src={m.image} alt={m.name} fill className="object-cover object-top" sizes="144px" />
                </div>
                <p className="font-semibold text-sm text-dark mt-2">{m.name}</p>
                <p className="text-xs text-gray-400">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <SectionLabel text="Our Leaders" className="mb-5" />
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark leading-tight">
                Meet the Visionaries Behind{" "}
                <span className="text-[#F4511E]">Codemania</span>
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-lg">
              Our leadership team brings together decades of combined experience in software
              architecture, product development, and business strategy.
            </p>
          </div>

          <div className="space-y-8">
            {leaders.map((leader) => (
              <div key={leader.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-8 lg:p-10">
                <div className={leader.imageRight ? "lg:order-2" : ""}>
                  <h3 className="font-display font-bold text-2xl text-dark mb-1">{leader.name}</h3>
                  <p className="text-sm font-semibold text-[#F4511E] mb-4">{leader.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{leader.bio}</p>
                  <div>
                    <p className="text-sm font-semibold text-dark mb-2">Expertise:</p>
                    <ul className="space-y-1">
                      {leader.expertise.map((e, i) => (
                        <li key={i} className="text-sm text-gray-500">{e}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={leader.imageRight ? "lg:order-1" : ""}>
                  <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
                    <Image src={leader.image} alt={leader.name} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <SectionLabel text="Team Members" center className="mb-5" />
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark">Meet Our Experts</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {teamMembers.map((m) => (
              <div key={m.id} className="group">
                <div className="relative h-64 lg:h-72 rounded-2xl overflow-hidden mb-3">
                  <Image src={m.image} alt={m.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 33vw" />
                </div>
                <h3 className="font-semibold text-dark text-sm">{m.name}</h3>
                <p className="text-xs text-gray-400">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
