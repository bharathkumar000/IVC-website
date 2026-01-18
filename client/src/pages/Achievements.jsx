const Achievements = () => (
    <div className="pt-32 px-4 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-12">Our Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-ivc-primary/20 to-ivc-purple/20 border border-white/10 rounded-xl">
                <h3 className="text-5xl font-bold mb-2 text-ivc-accent">10+</h3>
                <p className="text-gray-300">Hackathons Won</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-ivc-secondary/20 to-ivc-cyan/20 border border-white/10 rounded-xl">
                <h3 className="text-5xl font-bold mb-2 text-ivc-secondary">50+</h3>
                <p className="text-gray-300">Projects Completed</p>
            </div>
        </div>
    </div>
);
export default Achievements;
