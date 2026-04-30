import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-t border-b border-gray-100 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-10">
          Serving Industries Across the Globe
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-bold text-2xl lg:text-3xl text-dark mb-1">{s.value}</p>
              <p className="text-xs text-gray-400 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
