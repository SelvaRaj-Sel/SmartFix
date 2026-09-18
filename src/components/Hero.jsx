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
  title: ["Industrial Automation", "Powered by the Best"],
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
      className="relative isolate min-h-[700px] overflow-hidden bg-[#06111d] text-white sm:min-h-[650px] lg:min-h-[600px]"
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,0.96)_0%,rgba(3,10,18,0.82)_38%,rgba(3,10,18,0.25)_72%,rgba(3,10,18,0.48)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,10,18,0.9)_0%,transparent_42%,rgba(3,10,18,0.22)_100%)]" />

      {/* Content with parallax offset */}
      <motion.div
        className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 pb-24 pt-28 sm:min-h-[760px] sm:px-8 sm:pb-28 sm:pt-32 lg:min-h-screen lg:px-12 lg:pb-24 lg:pt-32"
      >
        <div className="w-full max-w-xl lg:max-w-2xl" style={{ perspective: 800 }}>
          <motion.div
            className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-(--primary) sm:mb-7 sm:text-xs"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={0}
          >
            {heroContent.eyebrow}
          </motion.div>

          <motion.h1
            className="max-w-2xl text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.25rem]"
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
            className="mt-6 max-w-lg text-[0.95rem] leading-7 text-slate-200/90 sm:mt-7 sm:text-[1.05rem] sm:leading-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={0.2}
          >
            {heroContent.description}
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
