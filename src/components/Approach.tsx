import type { ReactNode } from "react"
import gsap from "gsap"


interface Props {
    title: string
    text: string
    logo: ReactNode

}

function Card({ title, text, logo }: Props) {
    return (
        <div className={`rounded-[17px] col-span-1 flex flex-col space-y-4 hover:bg-gray-200 transition-all bg-[#dedede] p-6 `}>

            <div className="flex flex-col space-y-[17px] ">
                {logo}

                <p className="xl:text-[18px] md:text-[16px] text-[18px] satoshi cursor-default font-bold">
                    {title}
                </p>
            </div>

            <p
                className="text-[#292929] satoshi xl:text-[16px] text-[15px] text-[] leading-[1.4em] cursor-default tracking-[-0.01em]"

            >
                {text}
            </p>



        </div>


    )
}


export default function Approach() {
    return (
        <div className="w-[90%]  flex flex-col space-y-[26px] md:space-y-[35px] mx-auto  sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1102px]">

            <p className='xl:text-[44px] text-[37px] text- select-none '>
                Approach
            </p>

            <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 rounded-[24px] bg-[#fafafa] gap-2 p-2 ">

                {/* first */}


                <Card title="Consulting" text="We're asking some questions to understand your goals, design preferences and target audience. This is the foundation settlement." logo={<div className="w-[26px] h-[26px] relative ">


                    <span className="inline-block w-3 h-3 rounded-full bg-[#303030] absolute top-0 left-0  "></span>
                    <span className="inline-block w-3 h-3 rounded-full bg-[#303030] absolute bottom-0 right-0  "></span>


                </div>} />

                {/* second */}
                <Card title="Collaborative review" text="During the design phase we invite the client to review and provide feedback. This allows a better structure and functionality early on. " logo={<div className="w-[26px] bg-[#303030] rounded-xs h-[26px] relative ">


                    <span className="inline-block w-full h-1  bg-[#dedede] absolute top-1/2 transform -translate-y-1/2   "></span>
                    <span className="inline-block w-2.5 h-2.5 rotate-45 bg-[#dedede] absolute top-1/2 left-1/2 transform -translate-1/2  "></span>


                </div>} />

                {/* third */}
                <Card title="Make it pop" text="Establishing a structure focused on functionality and accessibility, including interactions that ensure total immersion." logo={<div className="w-[26px] h-[26px] relative ">


                    <span className="inline-block w-2 h-2  bg-[#303030] absolute top-0 right-0  "></span>
                    <span className="inline-block w-3 h-3 -rotate-12 bg-[#303030] absolute bottom-0 left-0  "></span>


                </div>} />
                {/* fourth */}
                <Card title="Iterate" text="Polishing the details is important when it comes to the final product. We're iterating until you're happy with the results." logo={<div className="w-[26px] h-[26px] relative ">


                    <span className="inline-block w-3 h-full rounded-tr-full bg-[#303030] absolute top-0 left-0  "></span>
                    <span className="inline-block w-3 h-full rounded-bl-full  bg-[#dedede] border-[#303030] border-2 absolute bottom-0 right-0  "></span>


                </div>} />

                {/* sixth */}
                <div

                    onMouseEnter={() => {
                        gsap.to("#cursor", { backgroundColor: "#baff00", duration: 0.3 });
                    }}

                    onMouseLeave={() => {
                        gsap.to("#cursor", { backgroundColor: "#030712", duration: 0.3 });
                    }}




                    className={`rounded-[17px]  flex flex-col justify-between hover:bg-gray-600 transition-all bg-[#474747] md:col-span-2 p-6 `}>

                    <div className="flex flex-col space-y-[17px] ">
                        {/* logo */}
                        <div className="w-[26px] h-[26px] relative ">


                            <span className="absolute top-0 right-0 w-0 h-0 border-t-20 border-l-20 border-t-[#dedede] border-l-transparent"></span>

                            <span className="inline-block w-4 h-4 rounded-full  bg-[#dedede]   absolute bottom-0 left-0  "></span>


                        </div>
                        <p className="xl:text-[18px] md:text-[16px] text-[18px] cursor-default satoshi text-white font-bold">
                            Ready to take off
                        </p>
                    </div>

                    <p
                        className="text-[#fff] satoshi xl:text-[16px] text-[15px] cursor-default leading-[1.4em] tracking-[-0.01em]"

                    >
                        Handing off the fully working website or landing page which is ready to launch right away, empowering you with a seamless transition from concept to final product.
                    </p>



                </div>

            </div>


        </div>
    )
}
