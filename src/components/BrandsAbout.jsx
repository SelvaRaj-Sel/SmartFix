import { ArrowUpRight, Gauge, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import rockwellLogo from "../assets/rockwell-logo1.png";
import siemensLogo from "../assets/Siemens-Logo.png";
import { use3DTilt } from "../hooks/use3DTilt.js";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection.jsx";

const products = [
  {
    brand: "Rockwell Automation",
    title: "Integrated Allen-Bradley control, built for performance.",
    description:
      "Build dependable Rockwell Automation systems with Allen-Bradley PLC programming, PanelView HMI integration, PowerFlex VFD setup, Kinetix motion control, and GuardLogix safety engineering.",
    accent: "#C41230",
    logo: rockwellLogo,
    logoClass: "h-12 w-full object-contain sm:h-14",
    features: ["CompactLogix & ControlLogix", "PanelView HMIs", "PowerFlex VFDs", "Kinetix servo drives", "GuardLogix", "FactoryTalk", "Stratix"],
  },
  {
    brand: "Siemens",
    title: "Integrated engineering for a more efficient operation.",
    description:
      "Improve machine performance with Siemens SIMATIC PLCs, TIA Portal engineering, SINAMICS drives, SIMOTICS motors, Comfort Panel HMIs, PROFINET networks, and WinCC visualization.",
    accent: "#009999",
    logo: siemensLogo,
    logoClass: "h-9 w-auto object-contain sm:h-11",
    features: ["SIMATIC S7-1200 & S7-1500", "SINAMICS drives", "SIMOTICS servo motors", "TIA Portal engineering", "Comfort Panels", "PROFINET", "WinCC"],
  },
];

const BrandCard = ({ product }) => {
  const tilt = use3DTilt({ maxRotation: 8 });

  return (
    <motion.article
      ref={tilt.ref}
      style={{ ...tilt.style, "--product-accent": product.accent }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="product-card group relative overflow-hidden rounded-4xl border border-white/15 bg-(--dark2) p-7 text-white hover:border-white/30 sm:p-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.09),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true" />

      <div
        className="absolute inset-y-0 left-0 z-0 h-2 w-0 transition-all duration-400 ease-in-out group-hover:w-full"
        style={{ backgroundColor: product.accent }}
      />
      <div className="product-card-sweep absolute left-0 right-0 top-0 z-0 h-1 origin-left scale-x-0 transition duration-700 group-hover:scale-x-100" />
      <div className="product-card-glow absolute -right-20 -top-24 z-0 h-44 w-44 rounded-full opacity-10 blur-3xl transition duration-700 group-hover:scale-110 group-hover:opacity-20" />
      <div className="flex items-start justify-between gap-5">
        <div className="relative z-10 w-full">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {product.label}
          </span>
          <div className="product-logo-panel mt-4 flex h-14 w-fit max-w-48 items-center justify-center rounded-xl px-1">
            <img src={product.logo} alt={`${product.brand} industrial automation logo`} className={product.logoClass} />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 max-w-md">
        <h4 className="text-xl font-medium leading-snug text-white sm:text-2xl">
          {product.title}
        </h4>
        <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
          {product.description}
        </p>
      </div>

      <div className="relative z-10 mt-9 flex flex-wrap gap-2">
        {product.features.map((feature) => (
          <span key={feature} className="feature-pill inline-flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white hover:shadow-[0_8px_20px_rgba(34,211,238,0.12)]">
            <ShieldCheck size={14} className="feature-icon text-cyan-600 transition duration-300" />
            {feature}
          </span>
        ))}
      </div>

      <a href="/#contact" className="relative z-10 mt-10 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-cyan-300">
        Talk to an automation specialist
        <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.article>
  );
};

const BrandsAbout = () => {
  return (
    <section id="brands" className="relative isolate overflow-hidden bg-[#020d1a] py-20 text-white sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <AnimatedSection variant="fadeUp" className="mb-12 max-w-2xl sm:mb-16">
          <div className=" inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cyan-300">
            Our Brands
          </div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            The technology behind
            <span className="text-cyan-300"> better operations.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Smartfix brings trusted industrial platforms together with the engineering experience to make them work for your operation.
          </p>
        </AnimatedSection>

        <AnimatedSection variant="scale3D" stagger={0.15} className="grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <AnimatedItem variant="scale3D" key={product.brand}>
              <BrandCard product={product} />
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          <Gauge size={16} className="text-cyan-300" />
          Integration, commissioning, and support from one team
        </div>
      </div>
    </section>
  );
};

export default BrandsAbout;
