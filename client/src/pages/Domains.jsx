const Domains = () => (
    <div className="pt-32 px-4 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-12">Our Domains</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Web Development', 'AI & ML', 'IoT & Hardware', 'Entrepreneurship', 'UI/UX Design'].map(d => (
                <div key={d} className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <h3 className="text-2xl font-bold mb-2">{d}</h3>
                    <p className="text-gray-400">Exploring the frontiers of {d}.</p>
                </div>
            ))}
        </div>
    </div>
);
export default Domains;
