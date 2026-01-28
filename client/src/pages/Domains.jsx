const Domains = () => (
    <div className="pt-32 px-4 max-w-7xl mx-auto text-center text-ivc-text">
        <h1 className="text-4xl font-bold mb-12">Our Domains</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Web Development', 'AI & ML', 'IoT & Hardware', 'Entrepreneurship', 'UI/UX Design'].map(d => (
                <div key={d} className="p-8 bg-ivc-card border border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 shadow-sm hover:scale-[1.02] hover:shadow-2xl hover:border-ivc-primary dark:hover:border-ivc-primary hover:shadow-ivc-primary/20 group">
                    <h3 className="text-2xl font-bold mb-2 text-ivc-text dark:text-gray-200 group-hover:text-ivc-primary dark:group-hover:text-ivc-primary transition-colors">{d}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Exploring the frontiers of {d}.</p>
                </div>
            ))}
        </div>
    </div>
);
export default Domains;
