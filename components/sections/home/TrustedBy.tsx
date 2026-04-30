import SectionLabel from "@/components/ui/SectionLabel";

const clients = [
  { name: "Kuda", abbr: "K", bg: "bg-green-100 text-green-700" },
  { name: "AI Corp", abbr: "AI", bg: "bg-blue-100 text-blue-700" },
  { name: "Fintech+", abbr: "F+", bg: "bg-purple-100 text-purple-700" },
  { name: "DataPro", abbr: "DP", bg: "bg-orange-100 text-orange-700" },
  { name: "TechBase", abbr: "TB", bg: "bg-red-100 text-red-700" },
  { name: "CloudEx", abbr: "CE", bg: "bg-teal-100 text-teal-700" },
];

export default function TrustedBy() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <SectionLabel text="Our Clients" center className="mb-5" />
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-dark">
            Trusted by Leading<br />Organizations Across Africa and Beyond
          </h2>
          <p className="text-gray-400 text-sm mt-3">100+ clients across 5 countries trust CodeMania</p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
          {clients.map((c, i) => (
            <div
              key={i}
              className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center font-display font-bold text-sm lg:text-base ${c.bg} hover:scale-110 transition-transform cursor-default`}
            >
              {c.abbr}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
