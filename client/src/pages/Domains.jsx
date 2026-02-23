import ScrollReveal from '../components/ScrollReveal';

const Domains = () => (
    <div className="pt-20 pb-24 px-4 max-w-7xl mx-auto text-center text-ivc-text">
        <ScrollReveal effect="fadeUp">
            <h1 className="text-5xl font-display font-bold mb-12 text-glow text-black dark:text-white">
                Our <span className="text-ivc-primary">Domains</span>
            </h1>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {['Web Development', 'AI & ML', 'IoT & Hardware', 'Entrepreneurship', 'UI/UX Design', 'Robotics'].map((d, i) => (
                <ScrollReveal key={d} effect="scaleUp" delay={i * 0.1} className="h-full">
                    <div className="h-full p-8 glass-panel glass-panel-hover rounded-xl group transition-all duration-300 flex flex-col justify-center" style={{ minHeight: '180px' }}>
                        <h3 className="text-2xl font-bold mb-2 text-ivc-text dark:text-gray-200 group-hover:text-ivc-primary dark:group-hover:text-ivc-primary transition-colors">{d}</h3>
                        <p className="text-gray-600 dark:text-gray-400">Exploring the frontiers of {d}.</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    </div>
);
export default Domains;
