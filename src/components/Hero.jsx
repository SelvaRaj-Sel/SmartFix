import { useEffect, useState, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import heroBackground from "../assets/hero-bg.jpg";
import heroIndustrial from "../assets/hero1.jpg";

const slides = [
  heroImage,
  heroBackground,
  heroIndustrial,
];

const heroContent = {
  eyebrow: "We Are System Integrator",
  title: ["Industrial Automation", "Powered by the Best."],
  description:
    "Your trusted product for Rockwell Automation and Siemens solutions. We deliver expert system integration, commissioning, migration, and 24/7 support for industries across India.",
};

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

  const currentImage = slides[activeSlide];

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
          src={currentImage}
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
        className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 pb-28 pt-28 sm:px-8 lg:min-h-[760px] lg:px-12 lg:pb-24 lg:pt-32"
        style={{ y: contentY }}
      >
        <div className="max-w-xl pl-5 sm:pl-8 lg:max-w-2xl" style={{ perspective: 800 }}>
          <motion.div
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-(--primary) sm:mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={0}
          >
            {heroContent.eyebrow}
          </motion.div>

          <motion.h1
            className="max-w-2xl text-2xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={0.1}
          >
            <span className="text-white">{heroContent.title[0]} </span>
            <span className="text-(--primary)">{heroContent.title[1]}</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-7 text-slate-200 sm:mt-8 sm:text-lg sm:leading-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={0.2}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-(--primary) px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(0,160,210,0.22)]"
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
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-white transition hover:text-(--primary)"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore our approach
              <ArrowDownRight size={17} className="transition group-hover:translate-y-1" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;