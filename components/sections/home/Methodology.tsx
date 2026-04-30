import SectionLabel from "@/components/ui/SectionLabel";
import { methodologySteps } from "@/lib/data";

export default function Methodology() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel text="A Methodology Built for Success." className="mb-6 [&_span]:text-white/30 [&_svg]:text-white/20" />
            <h2 className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              A Methodology<br />Built for<br />Success.
            </h2>
          </div>

          <div>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Our development process combines{" "}
              <span className="text-white font-semibold">agile methodologies</span>{" "}
              with rigorous quality assurance to deliver{" "}
              <span className="text-white font-semibold">solutions</span> on time, on
              budget, and exceeding expectations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {methodologySteps.map((s) => (
                <div key={s.num} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors">
                  <span className="text-xs font-bold text-[#F4511E] block mb-2">{s.num}</span>
                  <p className="text-white font-semibold text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
