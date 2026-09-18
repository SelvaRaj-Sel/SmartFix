import { Factory, PackageCheck, Settings2, Wheat } from "lucide-react";
import { motion } from "framer-motion";
import { use3DTilt } from "../hooks/use3DTilt.js";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    text: "Consistent, measurable performance on the production floor with resilient automation systems.",
    accent: "from-cyan-500/15 via-sky-500/10 to-transparent",
  },
  {
    icon: PackageCheck,
    title: "Packaging & material handling",
    text: "Smarter machine coordination and dependable throughput for fast-moving operations.",
    accent: "from-indigo-500/15 via-cyan-500/10 to-transparent",
  },
  {
    icon: Settings2,
    title: "Process industries",
    text: "Better visibility, control, traceability, and safety for complex process environments.",
    accent: "from-teal-500/15 via-cyan-500/10 to-transparent",
  },
  {
    icon: Wheat,
    title: "Food & agriculture",
    text: "Practical automation solutions for quality-critical operations and efficient production.",
    accent: "from-emerald-500/15 via-cyan-500/10 to-transparent",
  },
];

const IndustryCard = ({ icon: Icon, title, text, index }) => {
  const { ref, style, onMouseMove, onMouseLeave } = use3DTilt({ maxRotation: 5, perspective: 1200 });

  return (
    <motion.article
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.22)] hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.06]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true" />
      
      <div className="relative z-10 flex items-start gap-4">
        <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-500/10 text-cyan-300">
          <Icon size={20} />
        </div>
        <div className="min-w-0">
          <h3 className="text-[1.05rem] font-bold text-white sm:text-[1.35rem]">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{text}</p>
        </div>
      </div>
    </motion.article>
  );
};

const Industries = () => (
  <section id="industries" className="relative overflow-hidden bg-[#020d1a] py-16 text-white sm:py-20" aria-labelledby="industries-heading">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cyan-300">
            Industries we serve
          </p>
          <h2 id="industries-heading" className="mt-5 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Automation solutions for <span className="text-cyan-400">high-performance</span> operations.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-slate-300">
          Every industry has different pressures. We design systems around uptime, quality, safety,
          and the people who rely on them every day.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {industries.map((industry, index) => (
          <IndustryCard key={industry.title} {...industry} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
