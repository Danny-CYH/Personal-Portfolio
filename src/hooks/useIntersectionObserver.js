// hooks/useIntersectionObserver.js
import { useState, useEffect } from 'react';

export const useIntersectionObserver = (threshold = 0.1) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { threshold }
        );

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, threshold]);

    return [setRef, isIntersecting];
};