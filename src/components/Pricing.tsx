import {
    DocumentIcon,
    DocumentDuplicateIcon,
    CodeBracketIcon,
    Squares2X2Icon,





    PencilIcon,
    RectangleStackIcon,
    ChatBubbleOvalLeftIcon

} from '@heroicons/react/24/outline'
import type { ReactNode } from 'react'

type FeatureListItemProps = {
    icon: ReactNode
    text: string
}

export const FeatureListItem = ({ icon, text }: FeatureListItemProps) => (
    <li className="flex items-center space-x-[6px] text-[16px] font-medium satoshi text-[#3d3d3d]">
        <span className="inline-block w-[16px] text-sm">{icon}</span>
        <p className="satoshi leading-[1.2em] ">{text}</p>
    </li>
)


export default function Pricing() {
    return (
        <div className="w-[90%]  flex flex-col space-y-[26px] md:space-y-[35px] mx-auto  sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1102px]">
            <div className="flex flex-col space-y-2">
                <p className='xl:text-[44px] text-[37px] text- select-none '>
                    Pricing
                </p>

                <p className="text-[18px] font-medium leading-[1.3em] text-[#6e6e6e] satoshi">
                    Elevate your brand with our in-house design expert who brings over 12 years of experience to the table.
                </p>

            </div>


            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">

                {/* first  */}

                <div className="rounded-[24px]  p-2 bg-[#e8e8e8] h-fit  ">

                    <div className="p-5 flex flex-col space-y-[16px] shadow-2xl shadow-black/5 bg-[#fcfcfc] rounded-[17px] ">

                        {/* logo */}

                        <div className="w-[41px] h-auto aspect-square rounded bg-gray-950  ">

                        </div>


                        {/* title */}


                        <div className="flex flex-row items-center justify-between  space-y-1">
                            <p className="text-[20px] satoshi font-bold">Landing Page</p>
                            <p className="text-[18px] satoshi font-bold">1,500 k</p>
                        </div>

                        <p className="text-[15px] satoshi font-medium leading-[1.2em] text-[#8c8c8c] ">
                            Capture attention and drive conversions effectively. Meticulously crafted design to impact your audience.
                        </p>

                        <div className="h-[1px] w-full bg-[#ededed] "></div>
                        {/*  */}
                        <ul className="flex flex-col space-y-[12px] ">



                            <FeatureListItem icon={<DocumentIcon className="w-[16px] h-[16px]" />} text="Single page" />
                            <FeatureListItem icon={<PencilIcon className="w-[16px] h-[16px]" />} text="Design only" />
                            <FeatureListItem icon={<RectangleStackIcon className="w-[16px] h-[16px]" />} text="Multiple iterations" />
                            <FeatureListItem icon={<ChatBubbleOvalLeftIcon className="w-[16px] h-[16px]" />} text="Slack/Discord communication" />
                        </ul>

                        {/* button */}
                        <div className="pt-2 "><a href=""><button className="w-full cursor-pointer  rounded-full bg-gray-900 hover:bg-gray-950  h-[38px] text-gray-100 flex justify-center items-center">
                            <p className="leading-none bold">
                                Choose Design Only
                            </p>

                        </button></a></div>



                    </div>

                </div>



                {/* second  */}

                <div className="rounded-[24px]  p-2 bg-[#e8e8e8] ">

                    <div className="p-5 flex flex-col space-y-[16px] shadow-2xl shadow-black/5 bg-[#fcfcfc] rounded-[17px] ">

                        {/* logo */}

                        <div className="w-[41px] h-auto aspect-square rounded bg-gray-950  ">

                        </div>


                        {/* title */}


                        <div className="flex flex-row items-center justify-between  space-y-1">
                            <p className="text-[20px] satoshi font-bold">Full Website</p>


                            <div className='flex items-center space-x-2'>


                                <div className="flex flex-col justify-center items-center border rounded border-gray-300 h-[21px] px-2 ">
                                    <p className="text-xs font-medium text-[#949494]">Starting at</p>

                                </div>
                                <p className="text-[18px] satoshi font-bold">3,000 k +</p>

                            </div>
                        </div>


                        <p className="text-[15px] satoshi font-medium leading-[1.2em] text-[#8c8c8c] ">
                            Capture attention and drive conversions effectively. Meticulously crafted design to impact your audience.
                        </p>

                        <div className="h-[1px] w-full bg-[#ededed] "></div>
                        {/*  */}
                        <ul className="flex flex-col space-y-[12px] ">



                            <FeatureListItem icon={<DocumentDuplicateIcon className="w-[16px] h-[16px]" />} text="Multi page" />
                            <FeatureListItem icon={<PencilIcon className="w-[16px] h-[16px]" />} text="Design and Build" />
                            <FeatureListItem icon={<RectangleStackIcon className="w-[16px] h-[16px]" />} text="Multiple iterations" />
                            <FeatureListItem icon={<CodeBracketIcon className="w-[16px] h-[16px]" />} text="Custom Code" />
                            <FeatureListItem icon={<Squares2X2Icon className="w-[16px] h-[16px]" />} text="Components library" />

                            <FeatureListItem icon={<ChatBubbleOvalLeftIcon className="w-[16px] h-[16px]" />} text="Slack/Discord communication" />



                        </ul>

                        {/* button */}
                        <div className="pt-2 "><a href=""><button className="w-full cursor-pointer  rounded-full bg-gray-900 hover:bg-gray-950  h-[38px] text-gray-100 flex justify-center items-center">
                            <p className="leading-none bold">
                                Choose Design Only
                            </p>

                        </button></a></div>



                    </div>

                </div>

            </div>





        </div>
    )
}
