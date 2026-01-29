import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch projects", err);
                setLoading(false);
            });
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="pt-20 pb-24 px-4 max-w-7xl mx-auto">
            <h1 className="text-5xl font-display font-bold mb-12 text-center text-glow text-white">
                Our <span className="text-ivc-primary">Projects</span>
            </h1>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ivc-primary"></div>
                </div>
            ) : (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            whileHover={{ scale: 1.02, transition: { duration: 0.1, ease: "easeOut" } }}
                            className="glass-panel glass-panel-hover rounded-2xl overflow-hidden group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                <div className="absolute top-3 right-3 glass-panel px-3 py-1 rounded-full text-xs font-bold tracking-wider text-white uppercase backdrop-blur-md border-white/20">
                                    {project.domain}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8 relative">
                                <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-ivc-primary transition-colors text-glow-purple group-hover:text-glow">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2 font-light">{project.description}</p>
                                <button className="text-ivc-primary text-sm font-bold tracking-widest hover:text-white transition-colors flex items-center gap-2 group-hover:gap-4 duration-300 uppercase">
                                    Read More <span className="text-lg">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};
export default Projects;
