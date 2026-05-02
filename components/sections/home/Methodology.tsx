const steps = [
  {
    num: "01",
    title: "Discover & Strategy",
    desc: "We analyze your business, define goals, and create a clear product roadmap.",
  },
  {
    num: "02",
    title: "Design & Architecture",
    desc: "We design scalable systems, user experiences, and secure technical architecture.",
  },
  {
    num: "03",
    title: "Development & Integration",
    desc: "We build, test, integrate, and launch solutions designed for real business use.",
  },
];

export default function Methodology() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#F4511E] text-xs">✤</span>
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30">
            Our Method
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <h2
            className="font-sans font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            A Methodology Built
            <br />
            for Success.
          </h2>
          <p className="text-white/50 text-base leading-relaxed lg:pt-2">
            Our development process combines{" "}
            <span className="text-white font-semibold">agile methodologies</span>{" "}
            with rigorous quality assurance to deliver solutions on time, on
            budget, and exceeding expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-bold text-white/40">{s.num}</span>
                <span className="text-[#F4511E]">✦</span>
              </div>
              <h3 className="font-sans font-bold text-white text-lg mb-3">
                {s.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}