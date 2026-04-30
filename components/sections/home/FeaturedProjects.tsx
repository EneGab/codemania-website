import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel text="Our Projects" className="mb-3" />
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-dark leading-tight">
              Some projects we&apos;ve built for<br className="hidden lg:block" />
              diverse Industries
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs flex-shrink-0">
            Explore our case studies to see our detailed process in building each product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-semibold text-dark hover:text-[#F4511E] transition-colors"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
