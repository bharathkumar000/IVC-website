import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import vvceLogo from '../assets/vvce_logo.png';

import { useState, useEffect } from 'react';

const Home = () => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "Empower your mind, build the future.",
        "Transform Ideas into Impact.",
        "Code your dreams into existence.",
        "Design, develop, and deliver excellence.",
        "Elevating potential through student innovation."
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setCurrentText(isDeleting
                ? fullText.substring(0, currentText.length - 1)
                : fullText.substring(0, currentText.length + 1)
            );

            // Typing Speed logic
            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && currentText === fullText) {
                // Done typing, wait 3 seconds
                typeSpeed = 1000;
                setIsDeleting(true);
            } else if (isDeleting && currentText === '') {
                // Done deleting, move to next
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                typeSpeed = 500;
            }

            setTypingSpeed(typeSpeed);
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, loopNum, phrases, typingSpeed]);

    return (
        <div className="relative isolate pt-24 pb-20 lg:pt-32 min-h-screen flex items-start">

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-5xl mx-auto text-center relative">
                    {/* Decorative glow background for the hero content */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-ivc-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-ivc-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

                    {/* College Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2 sm:mb-3"
                    >
                        <img src={vvceLogo} alt="VVCE Logo" className="w-16 h-16 md:w-20 md:h-20" />
                        <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wider text-center md:text-left drop-shadow-lg font-display">
                            Vidyavardhaka College of Engineering
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center mb-8"
                    >
                        <img src={logo} alt="IVC Logo" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[4vw] md:text-5xl font-display font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-ivc-primary to-ivc-accent mb-2 whitespace-nowrap drop-shadow-lg"
                    >
                        INNOVATORS & VISIONARIES CLUB
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xl font-bold tracking-widest text-ivc-text dark:text-gray-300 sm:text-3xl whitespace-nowrap text-glow"
                    >
                        IDEATE - VISUALIZE - CREATE
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl sm:text-3xl font-bold mt-8 h-12" // Added height to prevent layout shift
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivc-primary to-ivc-accent">
                            {currentText}
                        </span>
                        <span className="animate-pulse text-ivc-primary">|</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10 flex items-center justify-center gap-x-6"
                    >
                        <button
                            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                            className="rounded-full bg-ivc-primary px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-ivc-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivc-primary transition-all hover:scale-105"
                        >
                            Join IVC
                        </button>
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-sm font-semibold leading-6 text-ivc-dark-text flex items-center gap-1 hover:gap-2 transition-all hover:text-ivc-primary"
                        >
                            View Projects <ArrowRight size={16} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}
export default Home
