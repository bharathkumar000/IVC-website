import { motion } from 'framer-motion';

/**
 * ScrollReveal — wraps children with scroll-triggered entrance animations.
 *
 * @param {string} effect - Animation preset: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'rotateIn' | 'blur'
 * @param {number} delay - Extra delay in seconds (default 0)
 * @param {number} duration - Animation duration in seconds (default 0.7)
 * @param {string} className - Extra CSS classes
 * @param {boolean} once - Play animation only once (default true)
 * @param {number} amount - Fraction of element visible to trigger (default 0.15)
 */

const presets = {
    fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    rotateIn: {
        hidden: { opacity: 0, rotate: -5, y: 40 },
        visible: { opacity: 1, rotate: 0, y: 0 },
    },
    blur: {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' },
    },
};

const ScrollReveal = ({
    children,
    effect = 'fadeUp',
    delay = 0,
    duration = 0.7,
    className = '',
    once = true,
    amount = 0.15,
}) => {
    const preset = presets[effect] || presets.fadeUp;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: preset.hidden,
                visible: {
                    ...preset.visible,
                    transition: {
                        duration,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
