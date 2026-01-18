import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Domains', path: '/domains' },
        { name: 'Projects', path: '/projects' },
        { name: 'Events', path: '/events' },
        { name: 'Team', path: '/team' },
        { name: 'Join IVC', path: '/join' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 bg-ivc-bg/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-10 w-auto" alt="IVC Logo" />
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-ivc-primary to-ivc-accent">IVC</span>
                </NavLink>
                <div className="flex md:hidden rtl:space-x-reverse">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/10 rounded-lg bg-white/5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {links.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded md:p-0 transition-colors ${isActive ? 'text-ivc-accent' : 'text-gray-300 hover:text-white'}`
                                    }
                                    onClick={() => setIsOpen(false)} // Close on click mobile
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
