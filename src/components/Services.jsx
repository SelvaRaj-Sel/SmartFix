import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cable,
  Cog,
  Cpu,
  Gauge,
  GraduationCap,
  Radar,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { use3DTilt } from "../hooks/use3DTilt.js";

const services = [
 
  {
    id: "01",
    icon: BriefcaseBusiness,
    title: "Technical Consultant",
    text: "Expert assessment of your automation needs with tailored Rockwell and Siemens solutions.",
  },
  {
    id: "02",
    icon: Settings2,
    title: "Installation & Commissioning",
    text: "Complete hardware installation, software configuration, and commissioning of automation systems.",
  },
  {
    id: "03",
    icon: Cpu,
    title: "Migration & Upgrades",
    text: "Seamless migration from legacy systems to modern Rockwell and Siemens platforms.",
  },
  {
    id: "04",
    icon: Cable,
    title: "System Integration",
    text: "Turnkey integration of PLC, HMI, drives, safety, and network systems across your plant.",
  },
  {
    id: "05",
    icon: Wrench,
    title: "Retrofit Solutions",
    text: "Upgrade existing machinery with modern automation components for improved performance.",
  },
  {
    id: "06",
    icon: Gauge,
    title: "Field & Remote Support",
    text: "24/7 on-site and remote troubleshooting, even for remote areas that others cannot service.",
  },
  {
    id: "07",
    icon: ShieldCheck,
    title: "Electrical Maintenance",
    text: "Preventive and corrective electrical maintenance contracts (EMC) for industrial plants.",
  },
  {
    id: "08",
    icon: GraduationCap,
    title: "Training & Education",
    text: "Industrial training programs, automation lab setups, and PLC-based control project mentoring.",
  },
];

const ServiceCard = ({ icon: Icon, title, text, index }) => {
  const tilt = use3DTilt({ maxRotation: 5 });
  
  return (
    <motion.article
      ref={tilt.ref}
      style={{ ...tilt.style, perspective: 1200 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_40px_rgba(2,6,23,0.22)] hover:border-cyan-300/35 hover:bg-white/[0.06]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true" />

      <div className="relative z-10">
        <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
          <Icon size={22} />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
      </div>
    </motion.article>
  );
};

const Services = () => (
  <section id="services" className="relative isolate overflow-hidden bg-[#020d1a] py-14 text-white sm:py-18">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="mb-12 max-w-3xl"
      >
        <p className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cyan-300">
          Our services
        </p>
        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          From a single machine to a smarter operation.
        </h2>
        <p className="mt-6 max-w-2xl leading-7 text-slate-300">
          Our engineers turn production requirements into robust, maintainable automation systems—without
          overcomplicating the work.
        </p>
        <a href="/#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white">
          Discuss your project
          <ArrowUpRight size={17} />
        </a>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
