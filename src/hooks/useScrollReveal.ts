import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
}

interface UseStaggerRevealOptions {
    staggerDelay?: number;
    threshold?: number;
}

// Basic scroll reveal for single elements
export const useScrollReveal = ({ threshold = 0.1 }: UseScrollRevealOptions = {}) => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return { ref, isVisible };
};

// Staggered reveal for lists/grids
export const useStaggerReveal = (
    count: number,
    { staggerDelay = 100, threshold = 0.2 }: UseStaggerRevealOptions = {}
) => {
    const containerRef = useRef<HTMLElement>(null);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    // Trigger staggered animation
                    for (let index = 0; index < count; index++) {
                        setTimeout(() => {
                            setVisibleItems(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                        }, index * staggerDelay);
                    }

                    observer.disconnect();
                }
            },
            { threshold }
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [count, staggerDelay, threshold]);

    return { containerRef, visibleItems };
};