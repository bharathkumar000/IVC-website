const Domains = () => (
    <div className="pt-20 pb-24 px-4 max-w-7xl mx-auto text-center text-ivc-text">
        <h1 className="text-5xl font-display font-bold mb-12 text-glow text-white">
            Our <span className="text-ivc-primary">Domains</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {['Web Development', 'AI & ML', 'IoT & Hardware', 'Entrepreneurship', 'UI/UX Design'].map(d => (
                <div key={d} className="w-full p-8 glass-panel glass-panel-hover rounded-xl group transition-all duration-300 flex flex-col justify-center min-h-[160px]">
                    <h3 className="text-2xl font-bold mb-2 text-ivc-text dark:text-gray-200 group-hover:text-ivc-primary dark:group-hover:text-ivc-primary transition-colors">{d}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Exploring the frontiers of {d}.</p>
                </div>
            ))}
        </div>
    </div>
);
export default Domains;
