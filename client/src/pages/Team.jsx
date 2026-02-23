import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Team = () => {
    const layoutConfiguration = [2, 4, 4, 1, 3, 4, 2];

    const teamRoles = [
        { name: "Prof Hamsaveeni", role: "Coordinator" },
        { name: "Prof Praveen", role: "Mentor" },
        { name: "Jay Ameya Vijay", role: "President" },
        { name: "Riddhi Singh", role: "Vice President" },
        { name: "Yashwanth", role: "Secretary" },
        { name: "Parinitha K", role: "Secretary" },
        { name: "Bharath Kumar A", role: "Operational Lead" },
        { name: "Siddharth", role: "Operational Lead" },
        { name: "Srinivas P", role: "Project Lead" },
        { name: "Prassidh", role: "Project Lead" },
        { name: "Deekshith", role: "Treasurer" },
        { name: "Yuktha", role: "Design & Documentation Lead" },
        { name: "Dhanush V Kumar", role: "Design & Documentation Lead" },
        { name: "Prasad", role: "Design & Documentation Lead" },
        { name: "Monish", role: "Communication & Outreach Lead" },
        { name: "Jeevan", role: "Communication & Outreach Lead" },
        { name: "Afia", role: "Communication & Outreach Lead" },
        { name: "Anthra", role: "Communication & Outreach Lead" },
        { name: "Mahesh Prasad", role: "Social Media & Marketing Lead" },
        { name: "Dhanush M C", role: "Social Media & Marketing Lead" },
    ];

    const teamMembers = teamRoles.map((member, i) => {
        let image = null;
        const nameKey = member.name.toLowerCase();

        if (nameKey.includes("hamsaveeni")) image = "/images/team/hamsaveeni.jpg";
        else if (nameKey.includes("praveen")) image = "/images/team/praveen.jpg";
        else if (nameKey.includes("yashwanth")) image = "/images/team/yashwanth.jpg";
        else if (nameKey.includes("bharath")) image = "/images/team/bharath.png";
        else if (nameKey.includes("siddharth")) image = "/images/team/siddharth.jpg";
        else if (nameKey.includes("prassidh")) image = "/images/team/prassidh.jpg";
        else if (nameKey.includes("monish")) image = "/images/team/monish.jpg";
        else if (nameKey.includes("jeevan")) image = "/images/team/jeevan.jpg";
        else if (nameKey.includes("afia")) image = "/images/team/afia.png";
        else if (nameKey.includes("mahesh")) image = "/images/team/mahesh_prasad.png";
        else if (nameKey.includes("dhanush m c")) image = "/images/team/dhanush_mc.jpg";

        if (!image) {
            if (member.role === "Coordinator") image = "/images/team/coordinator.jpg";
            else if (member.role === "Mentor") image = "/images/team/mentor.jpg";
            else if (member.role === "Secretary" && i === 4) image = "/images/team/secretary_1.jpg";
            else if (member.role === "Operational Lead") {
                if (i === 6) image = "/images/team/operational_lead.jpg";
                if (i === 7) image = "/images/team/operational_lead_2.jpg";
            }
            else if (member.role === "Project Lead") {
                if (i === 8) image = "/images/team/project_lead_1.jpg";
                if (i === 9) image = "/images/team/project_lead_2.jpg";
            }
            else if (member.role === "Communication & Outreach Lead") {
                if (i === 14) image = "/images/team/comm_outreach_1.jpg";
                if (i === 15) image = "/images/team/comm_outreach_2.jpg";
                if (i === 16) image = "/images/team/comm_outreach_3.png";
            }
            else if (member.role === "Social Media & Marketing Lead") {
                if (i === 19) image = "/images/team/social_media_2.jpg";
            }
        }

        return { id: i + 1, ...member, image };
    });

    let currentIndex = 0;
    const rows = layoutConfiguration.map((count) => {
        const rowMembers = teamMembers.slice(currentIndex, currentIndex + count);
        currentIndex += count;
        return rowMembers;
    });

    // Alternate row effects for visual variety
    const rowEffects = ['fadeUp', 'fadeLeft', 'fadeRight', 'scaleUp', 'fadeUp', 'fadeRight', 'fadeLeft'];

    return (
        <div className="pt-24 pb-24 px-4 max-w-7xl mx-auto text-center text-ivc-text">
            <ScrollReveal effect="fadeDown">
                <h1 className="text-5xl font-display font-bold mb-12 text-glow text-black dark:text-white">
                    Meet the <span className="text-ivc-primary">Team</span>
                </h1>
            </ScrollReveal>

            <div className="space-y-8">
                {rows.map((row, rowIndex) => (
                    <ScrollReveal key={rowIndex} effect={rowEffects[rowIndex] || 'fadeUp'} delay={0.1}>
                        <div
                            className={`flex flex-wrap justify-center gap-6 ${row.length > 3 ? 'md:flex-nowrap' : ''}`}
                        >
                            {row.map((member, index) => {
                                const isBigCard = member.role === "Coordinator" || member.role === "Mentor";
                                const cardWidth = isBigCard ? "w-80" : "w-64";
                                const imgSize = isBigCard ? "w-40 h-40" : "w-28 h-28";

                                return (
                                    <div key={member.id} className="flex">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.05, transition: { duration: 0.1, ease: "easeOut" } }}
                                            className={`p-4 glass-panel glass-panel-hover rounded-2xl flex flex-col items-center ${cardWidth} h-full`}
                                        >
                                            <div className={`${imgSize} bg-gray-300 rounded-full mb-3 relative overflow-hidden group-hover:scale-105 transition-transform`}>
                                                {member.image ? (
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover object-top scale-125"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-400 group-hover:from-gray-300 group-hover:to-gray-500"></div>
                                                )}
                                            </div>
                                            <h3 className={`font-bold mb-1 text-black dark:text-ivc-dark-text ${isBigCard ? 'text-2xl' : 'text-lg'}`}>{member.name}</h3>
                                            <p className={`text-ivc-primary font-medium tracking-wide ${isBigCard ? 'text-base' : 'text-xs'}`}>{member.role}</p>
                                        </motion.div>

                                        {row.length === 4 && index === 1 && rowIndex === 1 && (
                                            <div className="h-32 w-px bg-gray-500/20 ml-6 hidden md:block self-center"></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};

export default Team;
