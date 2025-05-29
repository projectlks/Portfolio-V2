

interface Props {
    title: string
    text: string

}

function Card({ title, text, }: Props) {
    return (
        <div className={`rounded-[17px] col-span-1 flex flex-col space-y-4 hover:bg-gray-200 transition-all bg-[#dedede] p-6 `}>

            <div className="flex flex-col space-y-[17px] ">
                {/* logo */}
                <div className="bg-gray-950 w-[26px] h-[26px] "></div>
                <p className="xl:text-[18px] md:text-[16px] text-[18px] satoshi  font-bold">
                    {title}
                </p>
            </div>

            <p
                className="text-[#292929] satoshi xl:text-[16px] text-[15px] text-[] leading-[1.4em] tracking-[-0.01em]"

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


                <Card title="Consulting" text="We're asking some questions to understand your goals, design preferences and target audience. This is the foundation settlement." />
                <Card title="Collaborative review" text="During the design phase we invite the client to review and provide feedback. This allows a better structure and functionality early on. " />
                <Card title="Make it pop" text="Establishing a structure focused on functionality and accessibility, including interactions that ensure total immersion." />
                <Card title="Iterate" text="Polishing the details is important when it comes to the final product. We're iterating until you're happy with the results." />

                {/* <Card title="Iterate" text="Polishing the details is important when it comes to the final product. We're iterating until you're happy with the results." colspan="2" bg="# 474747" /> */}
                <div className={`rounded-[17px]  flex flex-col justify-between hover:bg-gray-600 transition-all bg-[#474747] md:col-span-2 p-6 `}>

                    <div className="flex flex-col space-y-[17px] ">
                        {/* logo */}
                        <div className="bg-[#fff] w-[26px] h-[26px] "></div>
                        <p className="xl:text-[18px] md:text-[16px] text-[18px] satoshi text-white font-bold">
                            Ready to take off
                        </p>
                    </div>

                    <p
                        className="text-[#fff] satoshi xl:text-[16px] text-[15px] leading-[1.4em] tracking-[-0.01em]"

                    >
                        Handing off the fully working website or landing page which is ready to launch right away, empowering you with a seamless transition from concept to final product.
                    </p>



                </div>

            </div>


        </div>
    )
}
