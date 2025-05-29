import AnimatedNumbers from "react-animated-numbers";

export default function FinalizedProjectsCounter({ num }: { num: number }) {
    return (
        <div className="container flex flex-col items-center gap-4">
            <AnimatedNumbers
                includeComma
                className=" font-[500] satoshi select-none text-gray-900"
                transitions={(index) => ({
                    type: "spring",
                    duration: (index + 1) * 1.5,
                })}
                animateToNumber={num}
            />
        </div>
    );
}
