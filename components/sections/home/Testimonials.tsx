import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonial } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <SectionLabel text="Our Clients" center className="mb-5" />
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark">
            What Our Clients Say<br />About Us
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm">
            Genuine feedback from the businesses we&apos;ve helped build, scale, and transform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-[#F4511E] font-display font-bold text-7xl leading-none mb-4 select-none">&ldquo;</div>
          <blockquote className="text-dark text-lg lg:text-xl leading-relaxed font-medium mb-8">
            {testimonial.quote}
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-dark text-sm">{testimonial.author}</p>
              <p className="text-xs text-gray-400">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
