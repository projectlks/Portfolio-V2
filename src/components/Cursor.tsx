import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cursorRef.current) return;

            const { clientX, clientY } = e;

            // Get size dynamically on each mouse move (optional, or can do once on mount)
            const rect = cursorRef.current.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            gsap.to(cursorRef.current, {
                x: clientX - width / 2,
                y: clientY - height / 2,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="w-2 h-2 rounded-full bg-gray-950 fixed top-0 left-0 pointer-events-none z-50"
        ></div>
    );
}
