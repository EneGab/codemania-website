import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  brand: string;
}

export default function ProjectCard({ id, title, description, image, brand }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Brand badge */}
        <div className="absolute bottom-3 left-3 bg-white rounded-xl px-3 py-1.5 shadow flex items-center gap-2">
          <div className="w-4 h-4 bg-[#F4511E] rounded-full flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">H</span>
          </div>
          <span className="text-xs font-bold text-dark">{brand}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-base leading-snug text-dark mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{description}</p>
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-dark hover:text-[#F4511E] transition-colors"
        >
          View Project <ArrowUpRight size={13} className="text-[#F4511E]" />
        </Link>
      </div>
    </div>
  );
}
