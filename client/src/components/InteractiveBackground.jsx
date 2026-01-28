import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const STAR_COUNT = 400; // Increased density
        const INTERACTION_RADIUS = 90; // User preferred larger radius
        const MOUSE_FORCE = 2; // Stronger force for clear repulsion
        const RETURN_SPEED = 0.02; // Smooth return

        // State
        let width = window.innerWidth;
        let height = window.innerHeight;
        let mouse = { x: -1000, y: -1000 };

        // Initialize stars
        const stars = [];
        // Colors from reference: Mostly white, with some subtle blue/cyan and yellow/orange tints
        const colors = ['#ffffff', '#ffffff', '#ffffff', '#e0f2fe', '#bae6fd', '#fef3c7', '#fde68a'];

        const initStars = () => {
            stars.length = 0; // Clear existing
            for (let i = 0; i < STAR_COUNT; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                stars.push({
                    x: x,
                    y: y,
                    originX: x, // Remember original position to return to
                    originY: y,
                    size: Math.random() < 0.6 ? 1 : (Math.random() < 0.85 ? 1.5 : 2), // Random sizes: 1px, 1.5px, 2px
                    color: colors[Math.floor(Math.random() * colors.length)],
                    vx: 0,
                    vy: 0,
                    // Add slight natural drift
                    driftX: (Math.random() - 0.5) * 0.05,
                    driftY: (Math.random() - 0.5) * 0.05
                });
            }
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const handleMouseMove = (e) => {
            // Get mouse pos relative to viewport
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        // Animation Loop
        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Optional: Draw a subtle gradient background if needed, but we rely on CSS bg-black

            stars.forEach(star => {
                // Calculate distance to mouse
                const dx = mouse.x - star.x;
                const dy = mouse.y - star.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Interaction Logic: Repulsion
                if (distance < INTERACTION_RADIUS) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    // Force is stronger when closer
                    const force = (INTERACTION_RADIUS - distance) / INTERACTION_RADIUS;

                    // Push away
                    star.vx -= forceDirectionX * force * MOUSE_FORCE;
                    star.vy -= forceDirectionY * force * MOUSE_FORCE;
                }

                // Return to origin (spring implementation)
                const homeDx = star.originX - star.x;
                const homeDy = star.originY - star.y;

                star.vx += homeDx * RETURN_SPEED;
                star.vy += homeDy * RETURN_SPEED;

                // Friction/Damping to prevent endless oscillation
                star.vx *= 0.92;
                star.vy *= 0.92;

                // Apply velocity
                star.x += star.vx;
                star.y += star.vy;

                // Draw Star
                ctx.beginPath();
                ctx.fillStyle = star.color;

                if (star.size > 1.2) {
                    ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // Draw rects for small stars for crispness
                    ctx.fillRect(star.x, star.y, star.size, star.size);
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        // Setup
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize(); // Sets size and inits stars
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                background: 'transparent', // Let parent bg color show through
                width: '100vw',
                height: '100vh'
            }}
        />
    );
};

export default InteractiveBackground;
