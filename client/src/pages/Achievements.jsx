import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Achievements = () => (
    <div className="pt-20 pb-24 px-4 max-w-7xl mx-auto text-center text-ivc-text relative z-10">
        <ScrollReveal effect="fadeUp">
            <h1 className="text-5xl font-display font-bold mb-12 text-glow text-black dark:text-white">
                Our <span className="text-ivc-primary">Achievements</span>
            </h1>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal effect="scaleUp" delay={0}>
                <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.1, ease: "easeOut" } }}
                    className="glass-panel glass-panel-hover p-8 rounded-2xl"
                >
                    <h3 className="text-6xl font-display font-bold mb-2 text-ivc-primary drop-shadow-lg">5</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-light tracking-wide">Hackathons Won</p>
                </motion.div>
            </ScrollReveal>
            <ScrollReveal effect="scaleUp" delay={0.15}>
                <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.1, ease: "easeOut" } }}
                    className="glass-panel glass-panel-hover p-8 rounded-2xl"
                >
                    <h3 className="text-6xl font-display font-bold mb-2 text-ivc-secondary drop-shadow-lg">18</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-light tracking-wide">Projects Completed</p>
                </motion.div>
            </ScrollReveal>
            <ScrollReveal effect="scaleUp" delay={0.3}>
                <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.1, ease: "easeOut" } }}
                    className="glass-panel glass-panel-hover p-8 rounded-2xl"
                >
                    <h3 className="text-6xl font-display font-bold mb-2 text-ivc-accent drop-shadow-lg">9</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-light tracking-wide">Events Conducted</p>
                </motion.div>
            </ScrollReveal>
        </div>
    </div>
);
export default Achievements;
