export default function Stats() {
  const stats = [
    { icon: "💡", value: "100+", label: "African and international\nBusiness Served" },
    { icon: "◆", value: "20+", label: "Projects across\nindustries" },
    { icon: "◉", value: "24/7", label: "Client support\nCoverage" },
    { icon: "▦", value: "ISO", label: "ISO 27001\nCertified Process" },
    { icon: "✚", value: "100+", label: "Professionals in\nBusiness & Technology" },
    { icon: "◎", value: "Global", label: "We work with Africa\nand global teams" },
  ];

  return (
    <section className="bg-white border-t border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="text-[#F4511E] text-xs">✤</span>
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400">
            Serving Industries
          </span>
        </div>
        <h2
          className="font-sans font-bold text-[#0A0A0A] text-center mb-12"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
        >
          Serving Industries Across the Globe
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <span className="text-2xl">{s.icon}</span>
              <p className="font-sans font-bold text-2xl lg:text-3xl text-[#0A0A0A]">
                {s.value}
              </p>
              <p className="text-[11px] text-gray-400 leading-snug whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}