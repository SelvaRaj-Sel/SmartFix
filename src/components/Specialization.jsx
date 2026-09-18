import {
  Activity,
  Cpu,
  FileCheck2,
  MonitorCog,
  Network,
  PackageCheck,
  ScanEye,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { use3DTilt } from "../hooks/use3DTilt.js";

const specializations = [
  {
    icon: ShieldCheck,
    title: "Safety Systems (SIL2/SIL3)",
    text: "GuardLogix & Siemens safety configuration, Category 3/4 wiring and compliance support.",
  },
  {
    icon: Network,
    title: "Plant-Wide Network Architecture",
    text: "EtherNet/IP, PROFINET, Stratix managed switches, network design and validation.",
  },
  {
    icon: Activity,
    title: "Motion-Based Applications",
    text: "Kinetix & SIMOTICS servo systems for high-precision motion control and machine coordination.",
  },
  {
    icon: PackageCheck,
    title: "PackML Program Support",
    text: "ISA-88 compliant packaging machine programming and HMI design for efficient production flow.",
  },
  {
    icon: FileCheck2,
    title: "21 CFR Part 11 Compliance",
    text: "FDA-compliant electronic records and signatures for pharma and regulated industries.",
  },
  {
    icon: ScanEye,
    title: "SQL Report Generation",
    text: "FactoryTalk & WinCC database reporting with SQL integration for plant visibility and traceability.",
  },
  {
    icon: MonitorCog,
    title: "Vision Systems & Inspection",
    text: "Machine vision cameras and quality inspection systems built into production lines.",
  },
  {
    icon: Cpu,
    title: "High-Speed Packing Machines",
    text: "Servo-driven packing line automation with synchronized motion and rapid changeovers.",
  },
];

const SpecCard = ({ icon: Icon, title, text, index }) => {
  const tilt = use3DTilt({ maxRotation: 4 });
  
  return (
    <motion.article
      ref={tilt.ref}
      style={{ ...tilt.style, perspective: 1200 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, rotateX: -8, scale: 0.95 }}
      whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_40px_rgba(2,6,23,0.22)] hover:border-cyan-300/35 hover:bg-white/[0.06]"
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

const Specialization = () => (
  <section id="specializations" className="relative overflow-hidden bg-[#020d1a] py-16 text-white sm:py-20">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cyan-300">
        
            Expertise
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            We Are <span className="text-cyan-400">Specialists In</span>
          </h2>
        </div>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {specializations.map((spec, index) => (
          <SpecCard key={spec.title} {...spec} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Specialization;
