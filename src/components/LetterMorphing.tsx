import { useEffect, useState } from "react";

interface Props {
    text: string;
}

const MorphingParagraph = ({ text }: Props) => {
    const paragraph = text;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const speed = 30; // ms between steps
    const delayBetweenLetters = 50; // stagger delay

    const [displayedLetters, setDisplayedLetters] = useState(
        Array(paragraph.length).fill("")
    );

    useEffect(() => {
        const intervals: number[] = [];

        paragraph.split("").forEach((char, index) => {
            if (!/[A-Za-z]/.test(char)) {
                // Instantly set non-letters (space, punctuation)
                setDisplayedLetters(prev => {
                    const newLetters = [...prev];
                    newLetters[index] = char;
                    return newLetters;
                });
                return;
            }

            const isUpper = char === char.toUpperCase();
            const targetChar = char.toUpperCase();
            let charIndex = 0;

            const interval = setTimeout(() => {
                const letterInterval = setInterval(() => {
                    const current = alphabet[charIndex];
                    setDisplayedLetters(prev => {
                        const newLetters = [...prev];
                        newLetters[index] = isUpper ? current : current.toLowerCase();
                        return newLetters;
                    });

                    if (current === targetChar) {
                        clearInterval(letterInterval);
                    }

                    charIndex++;
                }, speed);

                intervals.push(letterInterval);
            }, index * delayBetweenLetters);

            intervals.push(interval);
        });

        return () => intervals.forEach(clearInterval);
    }, [paragraph]);

    return (
        <div className="xl:text-[33px] md:text-[28px] text-[27px] font-[500] leading-[1em] tracking-[-0.03em] text-[#212121] selection:bg-[#baff00] ">
            {displayedLetters.join("")}
        </div>
    );
};

export default MorphingParagraph;
