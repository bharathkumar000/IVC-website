import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch events", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="pt-20 pb-24 px-4 max-w-7xl mx-auto">
            <h1 className="text-5xl font-display font-bold mb-12 text-center text-glow text-white">
                Upcoming <span className="text-ivc-primary">Events</span>
            </h1>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ivc-primary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.1, ease: "easeOut" } }}
                            className="glass-panel glass-panel-hover rounded-2xl overflow-hidden group flex flex-col"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <div className="absolute top-3 right-3 glass-panel px-3 py-1 rounded-full text-xs font-bold tracking-wider text-white z-10 uppercase backdrop-blur-md border-white/20">
                                    {event.date}
                                </div>
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow relative">
                                <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-ivc-primary transition-colors text-glow-purple group-hover:text-glow">{event.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 font-light leading-relaxed">{event.description}</p>
                                <button className="w-full py-3 bg-white/5 border border-white/10 text-ivc-primary rounded-xl font-bold hover:bg-ivc-primary hover:text-white transition-all shadow-[0_0_15px_rgba(20,184,166,0.1)] hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] uppercase tracking-wider text-sm backdrop-blur-md">
                                    Register Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Events;
