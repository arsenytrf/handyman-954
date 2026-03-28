import { services } from "@/data/services";

export function ServiceMarquee() {
  const items = services.map((s) => s.title);
  const doubled = [...items, ...items];

  return (
    <section className="py-5 bg-lime-500 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 mx-6 text-sm font-bold text-white uppercase tracking-widest"
          >
            {item}
            <span className="w-2 h-2 bg-white/40 rotate-45" />
          </span>
        ))}
      </div>
    </section>
  );
}
