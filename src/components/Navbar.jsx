import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Icon.png";
import textlogo from "../assets/logo-1.png";
import MobileNav from "./MobileNav.jsx";

const Navbar = () => {

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Brands", href: "/#brands" },
  {
    name: "Solutions",
    href: "/#services",
    dropdown: [
      { name: "Products", href: "/#products" },
      { name: "Services", href: "/#services" },
      { name: "Specializations", href: "/#specializations" },
    ],
  },
  { name: "Industries", href: "/#industries" },
  { name: "About", href: "/about" },
];

  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a5a90]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-18 items-center justify-between">

          {/* LOGO */}
          <a
            href="/"
            className="group flex items-center gap-3"
          >
            <motion.div 
              whileHover={{ rotateY: 12 }}
              className="relative flex items-center justify-center rounded-xl"
            >
             
             <img
                src={textlogo}
                alt="Smartfix"
                className={`h-auto w-68 object-contain object-left ${
                  scrolled ? "brightness-90" : ""
                }`}
              />
            </motion.div>

            <div className="hidden sm:block">
              
              
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 lg:flex">

            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && setSolutionsOpen(true)
                }
                onMouseLeave={() =>
                  item.dropdown && setSolutionsOpen(false)
                }
              >
                <a
                  href={item.href}
                  className={`group relative flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-slate-400 hover:text-cyan-600"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}

                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        solutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* Active/Hover line */}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {item.dropdown && solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute left-0 top-full w-56 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1627]/95 p-2 shadow-2xl backdrop-blur-xl">

                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-300 transition-all duration-200 hover:bg-cyan-400/10 hover:text-white"
                          >
                            {dropdownItem.name}

                            <ArrowUpRight
                              size={15}
                              className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                            />
                          </a>
                        ))}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/40 bg-[#00A0D2] px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors duration-300 hover:bg-[#14bdf0] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              <span>Get a Quote</span>

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>

          <MobileNav navItems={navItems} scrolled={scrolled} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
