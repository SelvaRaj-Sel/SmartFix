import {
  Cable,
  Cpu,
  Gauge,
  MonitorSmartphone,
  ScanEye,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { use3DTilt } from "../hooks/use3DTilt.js";
import PLC from "../assets/PLC-S.jpg";
import PLC_1 from "../assets/PLC-R.png";

const products = [
  {
    icon: Cpu,
    title: "PLC Systems",
    description:
      "CompactLogix, ControlLogix, GuardLogix, SIMATIC S7-1200, S7-1500 programmable logic controllers.",
    images: [PLC_1, PLC_1],
  },
  {
    icon: MonitorSmartphone,
    title: "HMI Panels",
    description:
      "PanelView Plus, PanelView 5000, Siemens Comfort Panels, Basic and advanced operator interfaces.",
    images: [],
  },
  {
    icon: Gauge,
    title: "VFD Drives",
    description:
      "PowerFlex 523/755, Siemens SINAMICS G120, V20, V30 variable frequency drives for motor control.",
    images: [],
  },
  {
    icon: Zap,
    title: "Servo Systems",
    description:
      "Kinetix 5500/5700 servo drives, SIMOTICS servo motors, and high-precision motion control systems.",
    images: [],
  },
  {
    icon: ScanEye,
    title: "Vision Systems",
    description:
      "Machine vision cameras, sensors, barcode readers, and inspection systems for quality assurance.",
    images: [],
  },
  {
    icon: Cable,
    title: "Field Instruments",
    description:
      "Sensors, transmitters, I/O modules, communication adapters, network switches, and safety relays.",
    images: [],
  },
];

const ProductCard = ({
  icon: Icon,
  title,
  description,
  images = [],
  index,
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const tilt = use3DTilt({ maxRotation: 6 });

  useEffect(() => {
    if (!isHovered || images.length < 2) return undefined;

    const imageTimer = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(imageTimer);
  }, [images.length, isHovered]);

  return (
    <motion.article
      ref={tilt.ref}
      style={{ ...tilt.style, perspective: 1200 }}
      onMouseMove={tilt.onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        tilt.onMouseLeave();
        setIsHovered(false);
      }}
      initial={{ opacity: 0, y: 50, rotateY: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative flex h-full min-h-60 flex-col overflow-hidden rounded-[1.75rem] border border-sky-400/15 bg-(--dark2) p-7"
    >
      
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.06),transparent_55%)] transition-opacity duration-500 group-hover:opacity-0"
        aria-hidden="true"
      />

      <div className="relative z-10 h-full flex flex-1 flex-col ">
        {images.length > 0 && (
          <div className="pointer-events-none absolute -inset-7 z-0 overflow-hidden bg-[#6689a8] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={images[activeImage]}
                alt={`${title} product image ${activeImage + 1}`}
                initial={{ opacity: 0, x: 16, scale: 1.06 }}
                animate={{ opacity: 1, x: 0, scale: isHovered ? 1.2 : 1 }}
                exit={{ opacity: 0, x: -16, scale: 0.98 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div
              className="absolute inset-0 bg-[linear-gradient(115deg,rgba(2,13,26,0.94)_0%,rgba(2,13,26,0.8)_48%,rgba(2,13,26,0.28)_100%)]"
              aria-hidden="true"
            />
          </div>
        )}
        <div className='ml-2 mt-2'>
 <div className="flex items-center gap-3">
          <div
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/35 bg-cyan-500/10 shadow-inner shadow-cyan-400/10 transition-transform duration-500 group-hover:scale-105"
          >
            <Icon size={30} className="text-cyan-300" />
          </div>
          <h3
            className="relative z-10 max-w-[65%] text-[1.1rem] font-bold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]"
          >
            {title}
          </h3>
        </div>
        <p
          className="relative z-10 mt-4 w-60 flex-1 text-sm leading-7 text-slate-200"
        >
          {description}
        </p>
        </div>
       
      </div>
    </motion.article>
  );
};

const ExclusiveProducts = () => (
  <section
    id="products"
    className="relative overflow-hidden bg-[#020d1a] py-14 sm:py-18"
    aria-labelledby="product-catalog-heading"
  >
    {/* top border */}
    <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,168,232,0.2),transparent)]"
        aria-hidden="true"
      />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-(--primary)">
            Our Product
          </p>
          <h2
            id="product-catalog-heading"
            className="mt-5 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
          >
            Automation Product Categories
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-slate-300 lg:text-lg">
          Complete range of industrial automation hardware and software from
          <span className="text-(--rockwell-red) hover:text-red-500">
            {" "}
            Rockwell{" "}
          </span>
          and
          <span className="text-(--siemens-teal) hover:text-cyan-500">
            {" "}
            Siemens.
          </span>
        </p>
      </motion.header>

      <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.title} {...product} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ExclusiveProducts;
