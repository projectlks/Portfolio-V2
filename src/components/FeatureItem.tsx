interface FeatureItemProps {
    color1: string;
    color2?: string;
    title: string;
    description: string;
    rotate?: string;
    nestedCircle?: boolean;
}

export const FeatureItem = ({

    title,
    description,

}: FeatureItemProps) => {
    return (
        <div className="flex gap-4 flex-col space-y-[17px] max-w-[312px] ">


            <div className="w-[26px]  h-[26px] m-0 bg-black ">

            </div>
            <div className="flex flex-col space-y-[17px] ">
                <p className="xl:text-[20px] md:text-[18px] text-[17px] font-bold text-black ">{title}</p>
                <p className="text-gray-500 md:text-[14px] text-[16px]  xl:text-[16px] md:tracking-[-0.01em] font-medium text-left">{description}</p>
            </div>
        </div>
    );
};
