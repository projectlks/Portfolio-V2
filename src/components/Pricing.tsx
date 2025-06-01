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
        <p className="satoshi leading-[1.2em] cursor-default ">{text}</p>
    </li>
)


export default function Pricing() {
    return (
        <div id='pricing' className="w-[90%]  flex flex-col space-y-[26px] md:space-y-[35px] mx-auto  sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1102px]">
            <div className="flex flex-col space-y-2">
                <p className='xl:text-[44px] text-[37px] cursor-default text- select-none '>
                    Pricing
                </p>

                <p className="text-[18px] cursor-default font-medium leading-[1.3em] text-[#6e6e6e] satoshi">
                    Elevate your brand with our in-house design expert who brings over 12 years of experience to the table.
                </p>

            </div>


            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">

                {/* first  */}

                <div className="rounded-[24px]  p-2 bg-[#e8e8e8] h-fit  ">

                    <div className="p-5 flex flex-col space-y-[16px] shadow-2xl shadow-black/5 bg-[#fcfcfc] rounded-[17px] ">

                        {/* logo */}

                        <div className="w-[41px] h-auto aspect-square rounded bg-[#f5f5f5] flex justify-center items-center  ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                            </svg>


                        </div>


                        {/* title */}


                        <div className="flex flex-row cursor-default items-center justify-between  space-y-1">
                            <p className="text-[20px] satoshi font-bold">Landing Page</p>
                            <p className="text-[18px] satoshi font-bold">1,500K</p>
                        </div>

                        <p className="text-[15px] cursor-default satoshi font-medium leading-[1.2em] text-[#8c8c8c] ">
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



                        <div className="w-[41px] h-auto aspect-square rounded bg-[#f5f5f5] flex justify-center items-center  ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                            </svg>



                        </div>

                        {/* title */}


                        <div className="flex flex-row items-center justify-between  space-y-1">
                            <p className="text-[20px] satoshi cursor-default font-bold">Full Website</p>


                            <div className='flex items-center space-x-2'>


                                <div className="flex flex-col justify-center items-center border rounded border-gray-300 h-[21px] px-2 ">
                                    <p className="text-xs font-medium cursor-default text-[#949494]">Starting at</p>

                                </div>
                                <p className="text-[18px] satoshi cursor-default font-bold">3,000K +</p>

                            </div>
                        </div>


                        <p className="text-[15px] satoshi font-medium leading-[1.2em] text-[#8c8c8c] cursor-default ">
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
