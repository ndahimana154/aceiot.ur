import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/content';

const aceiotLogo = new URL('../../assets/logo.png', import.meta.url).href;

const navItemClasses = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm font-semibold uppercase tracking-wide transition rounded-md
   ${isActive ? 'bg-[#00AEEF] text-white' : 'text-white hover:text-[#00AEEF]'}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 border-b border-slate-700/60 shadow-lg ${
          isScrolled
            ? 'backdrop-blur-xl bg-black/90'
            : 'backdrop-blur-lg bg-black/75'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={aceiotLogo} alt="logo" className="h-14 object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={navItemClasses}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact#get-involved"
              className="flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
            >
              <Phone size={16} />
              GET INVOLVED
            </Link>

            {/* <button className="flex items-center gap-2 rounded-lg bg-[#00AEEF] px-4 py-2 text-sm font-semibold text-black hover:bg-green-300 transition">
                            <User size={16} />
                            Join us
                        </button> */}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-slate-700/60 px-4 sm:px-6 lg:px-8 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="block text-white text-sm font-semibold uppercase"
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-4 space-y-3">
              <Link
                to="/contact#get-involved"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 border border-white/30 py-2 rounded-lg text-white"
              >
                <Phone size={16} />
                GET INVOLVED
              </Link>

              <button className="w-full flex items-center justify-center gap-2 bg-[#00AEEF] py-2 rounded-lg text-black font-semibold">
                <User size={16} />
                LOGIN / REGISTER
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
