import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { whyUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <SectionLabel text="Why Us" center className="mb-5" />
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark">
            Why Global and Local<br />Enterprises Choose Codemania
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            From fintech to healthcare, our track record speaks for itself. Here are
            the key reasons leading organizations trust us with their most critical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.map((item, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-display font-bold text-lg leading-tight">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
