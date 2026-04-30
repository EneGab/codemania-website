import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import CTASection from "@/components/sections/shared/CTASection";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Transforming Ideas into Impact across Africa.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel text="Our Projects" center className="mb-5" />
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-dark leading-tight mb-6">
              Transforming Ideas into Impact
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Explore how we&apos;ve helped leading organizations across Africa build
              secure, scalable software solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-3 gap-4 h-52 lg:h-72">
            {[
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden">
                <Image src={src} alt={`Project ${i + 1}`} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <SectionLabel text="Featured Work" className="mb-4" />
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark">FEATURED PROJECTS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
