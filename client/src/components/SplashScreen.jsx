import { useState, useEffect, useRef, useCallback } from 'react';
import logo from '../assets/logo.png';

const SplashScreen = ({ onComplete }) => {
    const [phase, setPhase] = useState('logo'); // 'logo' | 'typing' | 'subtitle' | 'transitioning' | 'done'
    const [typedText, setTypedText] = useState('');
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [transitioning, setTransitioning] = useState(false);
    const [logoStyle, setLogoStyle] = useState({});
    const splashLogoRef = useRef(null);

    const fullText = 'IDEATE   VISUALIZE   AND   CREATE';

    // Lock body scroll during splash
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // Animation sequence - Phase 1: Logo appears
    useEffect(() => {
        const startTyping = setTimeout(() => {
            setPhase('typing');
        }, 1000);
        return () => clearTimeout(startTyping);
    }, []);

    // Phase 2: Typewriter effect
    useEffect(() => {
        if (phase !== 'typing') return;

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            currentIndex++;
            setTypedText(fullText.substring(0, currentIndex));

            if (currentIndex >= fullText.length) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setShowSubtitle(true);
                    setPhase('subtitle');
                }, 300);
            }
        }, 65);

        return () => clearInterval(typingInterval);
    }, [phase]);

    // Phase 3: After subtitle, start the zoom-in then transition
    useEffect(() => {
        if (phase !== 'subtitle') return;

        const zoomTimer = setTimeout(() => {
            startZoomAndTransition();
        }, 1200);

        return () => clearTimeout(zoomTimer);
    }, [phase]);

    const startZoomAndTransition = useCallback(() => {
        setPhase('transitioning');
        setTransitioning(true);

        // Smooth fade-out with a subtle scale-down — no jarring zoom
        setLogoStyle({
            animation: 'none',
            transform: 'scale(0.85)',
            opacity: 0,
            willChange: 'transform, opacity',
            transition: 'transform 0.9s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.9s ease',
        });

        // Complete after fade-out finishes
        setTimeout(() => {
            setPhase('done');
            onComplete();
        }, 950);
    }, [onComplete]);

    if (phase === 'done') return null;

    return (
        <div
            className={`splash-screen ${transitioning ? 'splash-transitioning' : ''}`}
            id="splash-screen"
        >
            <div className="splash-content">
                {/* Logo - zooms forward then fades */}
                <div
                    className="splash-logo-container"
                    ref={splashLogoRef}
                    style={logoStyle}
                >
                    <img
                        src={logo}
                        alt="IVC Logo"
                        className="splash-logo"
                    />
                </div>

                {/* Typed text */}
                <div className={`splash-text-container ${transitioning ? 'splash-element-fade-out' : ''}`}>
                    <h1 className="splash-typed-text">
                        {typedText.split('').map((char, i) => (
                            <span key={i} className="splash-char">{char === ' ' ? '\u00A0' : char}</span>
                        ))}
                        {!transitioning && <span className="splash-cursor">|</span>}
                    </h1>
                </div>

                {/* Subtitle */}
                <div className={`splash-subtitle ${showSubtitle ? 'splash-subtitle-visible' : ''} ${transitioning ? 'splash-element-fade-out' : ''}`}>
                    INNOVATING THE FUTURE
                </div>

                {/* Progress bar */}
                <div className={`splash-progress-track ${transitioning ? 'splash-element-fade-out' : ''}`}>
                    <div
                        className={`splash-progress-fill ${phase !== 'logo' ? 'splash-progress-active' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
