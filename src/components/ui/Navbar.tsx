import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../data/content'

const navItemClasses = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-[#0f6e8c] text-white' : 'text-slate-600 hover:bg-[#eaf8ff] hover:text-[#0f6e8c]'}`

const aceiotLogo = new URL('../../assets/logo.png', import.meta.url).href

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-3 font-semibold text-slate-900">
                    <img src={aceiotLogo} alt="ACEIoT logo" className="h-11 w-11 rounded-2xl object-contain" />
                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#0f6e8c]">ACEIoT</p>
                        <p className="text-sm font-semibold text-slate-900">University of Rwanda</p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} to={link.href} className={navItemClasses}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 sm:flex">
                    <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-48 rounded-full border border-slate-200 bg-slate-50 px-10 py-2 text-sm text-slate-700 outline-none transition focus:border-[#0f6e8c] focus:ring-2 focus:ring-[#0f6e8c]/20"
                        />
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 lg:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className="border-t border-slate-200 bg-white px-4 pb-6 lg:hidden"
                    >
                        <div className="space-y-2 pt-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setOpen(false)}
                                    className={navItemClasses}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                            <div className="flex items-center gap-3">
                                <Search className="h-4 w-4 text-slate-400" />
                                <input
                                    type="search"
                                    placeholder="Search site"
                                    className="w-full bg-transparent text-sm text-slate-700 outline-none"
                                />
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    )
}
