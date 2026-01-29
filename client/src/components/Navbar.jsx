import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, Layers, Rocket, Calendar, Users, UserPlus, Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [hoveredTab, setHoveredTab] = useState(null);
    const { isDark, toggleTheme } = useTheme();

    const links = [
        { name: 'Home', id: 'home', icon: Home },
        { name: 'About', id: 'about', icon: Info },
        { name: 'Domains', id: 'domains', icon: Layers },
        { name: 'Projects', id: 'projects', icon: Rocket },
        { name: 'Events', id: 'events', icon: Calendar },
        { name: 'Team', id: 'team', icon: Users },
        { name: 'Join IVC', id: 'join', icon: UserPlus },
        { name: 'Contact', id: 'contact', icon: Mail },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Find the active section based on scroll position
            // Reverse the array to find the *last* section that fits (closest to bottom if multiple overlap)
            // or just find the one occupying the screen center.
            const scrollPosition = window.scrollY + 300;

            for (const link of links) {
                const section = document.getElementById(link.id);
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(link.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed w-full z-50 top-6 flex justify-center pointer-events-none px-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-2 p-1.5 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl pointer-events-auto"
            >
                {/* Logo - Click to go top */}
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mr-2 pl-2">
                    <img src={logo} className="h-8 w-auto hover:scale-110 transition-transform" alt="IVC Logo" />
                </button>

                <div className="h-8 w-px bg-white/20 dark:bg-white/10 mx-1"></div>

                {/* Navigation Icons */}
                <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto sm:overflow-visible no-scrollbar max-w-[85vw] sm:max-w-none px-4 py-1">
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeSection === link.id;

                        return (
                            <div
                                key={link.id}
                                className="relative group perspective-1000 z-10 w-10 h-10 flex items-center justify-center"
                                onMouseEnter={() => setHoveredTab(link.id)}
                                onMouseLeave={() => setHoveredTab(null)}
                            >
                                {/* Active Background Pill with Smooth Transition */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-ivc-primary/40 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.4)] z-0 blur-sm"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1.1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.2,
                                            duration: 0.6
                                        }}
                                    />
                                )}

                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ease-out relative z-10 bg-transparent ${isActive
                                        ? 'text-black dark:text-white scale-150 drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] z-50'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:!bg-transparent hover:scale-150 hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:z-50'
                                        }`}
                                    aria-label={link.name}
                                >
                                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                </button>

                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredTab === link.id && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 5, scale: 0.9 }}
                                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs font-bold rounded-md whitespace-nowrap z-50 pointer-events-none"
                                        >
                                            {link.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <div className="h-8 w-px bg-white/20 dark:bg-white/10 mx-1"></div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:text-white hover:!bg-transparent transition-all duration-300 group relative text-gray-400"
                    aria-label="Toggle Theme"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </motion.div>
        </nav>
    );
};

export default Navbar;
