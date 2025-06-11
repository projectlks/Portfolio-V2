import type { ReactNode } from "react";

interface FeatureItemProps {
    title: string;
    description: string;
    logo: ReactNode;
}

export const FeatureItem = ({ title, description, logo }: FeatureItemProps) => {


    return (
        <div data-aos="fade-up" className="flex flex-col space-y-[17px] max-w-[312px]">
            <div>

                {logo}
            </div>

            <div className="flex flex-col space-y-[17px]">
                <p className="xl:text-[20px] md:text-[18px] text-[17px] font-bold text-black flex flex-wrap gap-1 cursor-default ">
                    {title}
                </p>
                <p className="text-gray-500 md:text-[14px]  w-full text-[16px] xl:text-[16px] md:tracking-[-0.01em] font-medium text-left cursor-default ">
                    {description}
                </p>
            </div>
        </div>
    );
};
