import { Link } from 'react-router';
import Icon from '../assets/Icon.png';
import textlogo from '../assets/logo.png';
import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/#products' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact Us', to: '/#contact' },
];

const serviceLinks = [
  'Installation & Commissioning',
  'Migration & Upgrades',
  'Retrofitting',
  'Field & Remote Support',
  'Technical Consultant',
];

const Footer = () => {
  return (
    <footer className="bg-[#020d1a] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-2 pt-12 sm:px-8 lg:px-12">
        <div className="grid gap-5 pb-5 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] md:gap-8 xl:gap-12">
          <motion.div 
            className="min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="mb-1 flex items-center gap-1">
              <motion.img
                src={Icon}
                alt="Smartfix logo"
                className="h-fit w-12 object-fill"
                animate={{ y: [0, -4, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <img
                src={textlogo}
                alt="Smartfix"
                className="h-fit w-35 object-fill object-left"
              />
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-300 sm:text-[0.95rem]">
              Your trusted partner for Rockwell Automation and Siemens industrial automation solutions –
              providing projects, service, and training to industries across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 font-black text-white sm:text-xl">Quick Links</h3>
            <ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
              {footerLinks.map((link) => (
                <motion.li key={link.label} className="transition hover:text-cyan-300" whileHover={{ x: 4 }} transition={{ type: 'spring' }}>
                  <Link to={link.to} className="inline-block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 font-black text-white sm:text-xl">Our Services</h3>
            <ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
              {serviceLinks.map((service) => (
                <motion.li key={service} className="transition hover:text-cyan-300" whileHover={{ x: 4 }} transition={{ type: 'spring' }}>
                  <p className="inline-block">
                    {service}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 font-black text-white sm:text-xl">Contact Info</h3>
            <ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
              <motion.li className="transition hover:text-cyan-300" whileHover={{ x: 4 }} transition={{ type: 'spring' }}>
                <a href="tel:+919894571542">+91 9894571542</a>
              </motion.li>
              <motion.li className="transition hover:text-cyan-300" whileHover={{ x: 4 }} transition={{ type: 'spring' }}>
                <a href="mailto:info@smartfixautomation.com">info@smartfixautomation.com</a>
              </motion.li>
              <li className="leading-7 text-slate-300">
                No. 5/12, Chetty Street,<br />
                Poonamallee, Chennai – 600056
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-800/90 pt-3">
          <p className="text-center text-sm text-slate-400">
            © 2026 SmartFix Automation. All Rights Reserved. | Rockwell Automation & Siemens Specialists
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
