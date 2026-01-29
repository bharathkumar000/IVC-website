import { motion } from 'framer-motion';

const Achievements = () => (
    <div className="pt-20 pb-24 px-4 max-w-7xl mx-auto text-center text-ivc-text relative z-10">
        <h1 className="text-5xl font-display font-bold mb-12 text-glow text-white">
            Our <span className="text-ivc-primary">Achievements</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-panel glass-panel-hover p-8 rounded-2xl"
            >
                <h3 className="text-6xl font-display font-bold mb-2 text-ivc-primary drop-shadow-lg">10+</h3>
                <p className="text-gray-300 text-lg font-light tracking-wide">Hackathons Won</p>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-panel glass-panel-hover p-8 rounded-2xl"
            >
                <h3 className="text-6xl font-display font-bold mb-2 text-ivc-secondary drop-shadow-lg">50+</h3>
                <p className="text-gray-300 text-lg font-light tracking-wide">Projects Completed</p>
            </motion.div>
        </div>
    </div>
);
export default Achievements;
