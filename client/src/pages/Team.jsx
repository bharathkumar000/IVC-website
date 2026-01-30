import { motion } from 'framer-motion';

const Team = () => {
    // Layout based on user's specific grouping: 
    // Coord/Mentor(2), Pres/VP/Sec(4), Op(2), Proj(2), Treas(1), Design(3), Comm(4), Social(2)
    // Layout based on user's specific grouping: 
    // Coord/(2), Pres/VP/Sec(4), Op/Proj(4), Treas(1), Design(3), Comm(4), Social(2)
    const layoutConfiguration = [2, 4, 4, 1, 3, 4, 2];

    // Explicitly defining roles in order
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

    // Map to objects with IDs
    const teamMembers = teamRoles.map((member, i) => {
        let image = null;

        // Specific Image Assignments by Name (more robust than index)
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
        else if (nameKey.includes("mahesh")) image = "/images/team/mahesh_prasad.png"; // Keeping .png as it was specific
        else if (nameKey.includes("dhanush m c")) image = "/images/team/dhanush_mc.jpg";

        // Fallbacks for roles if no specific name match
        if (!image) {
            if (member.role === "Coordinator") image = "/images/team/coordinator.jpg";
            else if (member.role === "Mentor") image = "/images/team/mentor.jpg";
            // Keep existing index-based logic as secondary fallback or override if needed
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

        return {
            id: i + 1,
            ...member,
            image
        };
    });

    // Helper to slice data based on layout config
    let currentIndex = 0;
    const rows = layoutConfiguration.map((count) => {
        const rowMembers = teamMembers.slice(currentIndex, currentIndex + count);
        currentIndex += count;
        return rowMembers;
    });

    return (
        <div className="pt-24 pb-24 px-4 max-w-7xl mx-auto text-center text-ivc-text">
            <h1 className="text-5xl font-display font-bold mb-12 text-glow text-black dark:text-white">
                Meet the <span className="text-ivc-primary">Team</span>
            </h1>

            <div className="space-y-8">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex flex-wrap justify-center gap-6 ${row.length > 3 ? 'md:flex-nowrap' : ''}`}
                    >
                        {row.map((member, index) => {
                            const isBigCard = member.role === "Coordinator" || member.role === "Mentor";
                            // 1.5x size for big cards: w-48 * 1.5 = w-72. Image w-28 * 1.5 ≈ w-40 (10rem)
                            // Increased base width to w-64 to accommodate longer names without wrapping
                            const cardWidth = isBigCard ? "w-80" : "w-64";
                            const imgSize = isBigCard ? "w-40 h-40" : "w-28 h-28";

                            return (
                                <div key={member.id} className="flex">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
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
                                                /* Placeholder for image */
                                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-400 group-hover:from-gray-300 group-hover:to-gray-500"></div>
                                            )}
                                        </div>
                                        <h3 className={`font-bold mb-1 text-black dark:text-ivc-dark-text ${isBigCard ? 'text-2xl' : 'text-lg'}`}>{member.name}</h3>
                                        <p className={`text-ivc-primary font-medium tracking-wide ${isBigCard ? 'text-base' : 'text-xs'}`}>{member.role}</p>
                                    </motion.div>

                                    {/* Vertical Divider after Vice President (Index 1 in this row of 4) */}
                                    {row.length === 4 && index === 1 && rowIndex === 1 && (
                                        <div className="h-32 w-px bg-gray-500/20 ml-6 hidden md:block self-center"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
