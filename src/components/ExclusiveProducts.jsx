import {
  Cable,
  Cpu,
  Gauge,
  MonitorSmartphone,
  ScanEye,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { use3DTilt } from "../hooks/use3DTilt.js";

const products = [
  {
    icon: Cpu,
    title: "PLC Systems",
    description: "CompactLogix, ControlLogix, GuardLogix, SIMATIC S7-1200, S7-1500 programmable logic controllers.",
  },
  {
    icon: MonitorSmartphone,
    title: "HMI Panels",
    description: "PanelView Plus, PanelView 5000, Siemens Comfort Panels, Basic and advanced operator interfaces.",
  },
  {
    icon: Gauge,
    title: "VFD Drives",
    description: "PowerFlex 523/755, Siemens SINAMICS G120, V20, V30 variable frequency drives for motor control.",
  },
  {
    icon: Zap,
    title: "Servo Systems",
    description: "Kinetix 5500/5700 servo drives, SIMOTICS servo motors, and high-precision motion control systems.",
  },
  {
    icon: ScanEye,
    title: "Vision Systems",
    description: "Machine vision cameras, sensors, barcode readers, and inspection systems for quality assurance.",
  },
  {
    icon: Cable,
    title: "Field Instruments",
    description: "Sensors, transmitters, I/O modules, communication adapters, network switches, and safety relays.",
  },
];

const ProductCard = ({ icon: Icon, title, description, index }) => {
  const tilt = use3DTilt({ maxRotation: 6 });
  
  return (
    <motion.article
      ref={tilt.ref}
      style={{ ...tilt.style, perspective: 1200 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 50, rotateY: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-sky-400/15 bg-[linear-gradient(180deg,rgba(16,30,46,0.96),rgba(11,24,37,0.94))] p-7 shadow-[0_18px_55px_rgba(2,6,23,0.35)] hover:border-cyan-300/40"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.09),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/35 bg-cyan-500/10 shadow-inner shadow-cyan-400/10">
          <Icon size={30} className="text-cyan-300" />
        </div>

        <h3 className="text-[1.1rem] font-bold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          <span className="inline-flex items-center justify-center rounded-full border border-[#f43f5e]/30 bg-[#ff5e80]/10 px-3 py-1.5 text-[0.66rem] font-extrabold tracking-[0.08em] text-[#ff8ca3] transition hover:text-red-500">
            ROCKWELL
          </span>
          <span className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-[0.66rem] font-extrabold tracking-[0.08em] text-cyan-300 transition hover:text-cyan-500">
            SIEMENS
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const ExclusiveProducts = () => (
  <section id="products" className="relative overflow-hidden bg-[#020d1a] py-14 sm:py-18" aria-labelledby="product-catalog-heading">

    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <motion.header 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cyan-300">
            Our Product
          </p>
          <h2 id="product-catalog-heading" className="mt-5 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Automation Product Categories
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-slate-300 lg:text-lg">
          Complete range of industrial automation hardware and software from
          <span className="text-red-400 hover:text-red-600"> Rockwell </span>
          and
          <span className="text-cyan-400 hover:text-cyan-600"> Siemens.</span>
        </p>
      </motion.header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.title} {...product} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ExclusiveProducts;