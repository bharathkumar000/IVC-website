import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { isDark, toggleTheme } = useTheme();

    const links = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Domains', id: 'domains' },
        { name: 'Projects', id: 'projects' },
        { name: 'Events', id: 'events' },
        { name: 'Team', id: 'team' },
        { name: 'Join IVC', id: 'join' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100; // Offset for navbar

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed w-full z-50 top-0 start-0 bg-ivc-bg/90 dark:bg-ivc-dark-bg/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
                <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 rtl:space-x-reverse bg-transparent border-none cursor-pointer">
                    <img src={logo} className="h-10 w-auto" alt="IVC Logo" />
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-ivc-primary to-ivc-accent">IVC</span>
                </button>

                <div className="flex items-center gap-2 md:order-2">
                    {/* Dark Mode Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-600" />
                        )}
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-ivc-dark-card md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {links.map((link) => (
                            <li key={link.name}>
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className={`block py-2 px-3 rounded md:p-0 transition-all ${activeSection === link.id
                                        ? 'text-ivc-primary font-bold border-b-2 border-ivc-primary'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-ivc-primary dark:hover:text-ivc-primary'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
