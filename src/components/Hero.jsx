import { useEffect, useState, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import heroBackground from "../assets/hero-bg.jpg";
import heroIndustrial from "../assets/hero1.jpg";

const slides = [
  {
    image: heroImage,
    eyebrow: "Industrial Automation & System Integration",
    title: ["Build smarter", "automate better."],
    description:
      "We deliver reliable industrial automation solutions that connect machines, systems, and processes to improve efficiency, control, and productivity.",
    tag: "01 / Smart automation",
  },
  {
    image: heroBackground,
    eyebrow: "Precision in every process",
    title: ["Control every operation", "with confidence."],
    description:
      "From PLC and HMI systems to VFD, servo, safety, and industrial networking, we engineer practical solutions for modern manufacturing environments.",
    tag: "02 / Connected operations",
  },
  {
    image: heroIndustrial,
    eyebrow: "Engineering for real-world industry",
    title: ["Automation that works", "for your industry."],
    description:
      "From installation and commissioning to migration, retrofitting, and ongoing support, Smartfix helps industries build reliable and future-ready automation systems.",
    tag: "03 / Reliable engineering",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 25, rotateX: -6 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const imageVariants = {
  enter: {
    opacity: 0,
    scale: 1.08,
    rotateZ: 0.4,
  },
  center: {
    opacity: 1,
    scale: 1.05,
    rotateZ: 0,
    transition: {
      opacity: { duration: 1.2, ease: "easeOut" },
      scale: { duration: 6, ease: "linear" },
      rotateZ: { duration: 1.4, ease: "easeOut" },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.0,
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.35, 0.65]);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(slideTimer);
  }, []);

  const goToSlide = (slideIndex) => {
    setActiveSlide((slideIndex + slides.length) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate h-full min-h-[650px] max-h-[920px] overflow-hidden bg-[#06111d] text-white"
      style={{ perspective: 1200 }}
    >
      {/* Parallax background images with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeSlide}
          src={currentSlide.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ y: bgY }}
        />
      </AnimatePresence>

      {/* Parallax overlay gradients */}
      <motion.div
        className="absolute inset-0 bg-[#06111d]"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,0.94)_0%,rgba(3,10,18,0.73)_36%,rgba(3,10,18,0.2)_72%,rgba(3,10,18,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,10,18,0.84)_0%,transparent_38%,rgba(3,10,18,0.3)_100%)]" />

      {/* Content with parallax offset */}
      <motion.div
        className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-12 pt-24 sm:px-8 lg:items-center lg:px-12 lg:pb-16"
        style={{ y: contentY }}
      >
        <div className="max-w-2xl" style={{ perspective: 800 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`eyebrow-${activeSlide}`}
              className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0}
            >
              {currentSlide.eyebrow}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${activeSlide}`}
              className="max-w-xl text-4xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-6xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0.1}
            >
              <span className="text-white">{currentSlide.title[0]} </span>
              <span className="text-cyan-300">{currentSlide.title[1]}</span>
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${activeSlide}`}
              className="mt-7 max-w-lg text-base leading-7 text-slate-200 sm:text-lg"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0.2}
            >
              {currentSlide.description}
            </motion.p>
          </AnimatePresence>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 32px rgba(103,232,249,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Start a conversation
              <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href="#products"
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-white transition hover:text-cyan-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore our approach
              <ArrowDownRight size={17} className="transition group-hover:translate-y-1" />
            </motion.a>
          </motion.div>

          <div className="mt-14 flex items-center gap-5">
            <span className="text-xs font-semibold tracking-[0.2em] text-white/65">{currentSlide.tag}</span>
            <div className="h-px w-20 bg-white/25 sm:w-32">
              <motion.div
                className="h-px bg-cyan-300"
                animate={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
            <div className="flex items-center gap-1">
              <motion.button
                type="button"
                onClick={() => goToSlide(activeSlide - 1)}
                className="rounded-full border border-white/20 p-2.5 text-white"
                whileHover={{ borderColor: "rgba(103,232,249,0.7)", color: "rgb(103,232,249)" }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={17} />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => goToSlide(activeSlide + 1)}
                className="rounded-full border border-white/20 p-2.5 text-white"
                whileHover={{ borderColor: "rgba(103,232,249,0.7)", color: "rgb(103,232,249)" }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next slide"
              >
                <ChevronRight size={17} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;