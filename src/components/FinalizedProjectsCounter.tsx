import AnimatedNumbers from "react-animated-numbers";

interface FinalizedProjectsCounterProps {
    num: number;
}

export default function FinalizedProjectsCounter({ num }: FinalizedProjectsCounterProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            <AnimatedNumbers
                includeComma
                className="font-[500] satoshi select-none text-gray-900"


                transitions={(index: number) => ({
                    type: "spring",
                    duration: (index + 1) * 1.5,
                })}
                animateToNumber={num}
            />
        </div>
    );
}
