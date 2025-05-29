import FinalizedProjectsCounter from './FinalizedProjectsCounter'

export default function Experience() {
    return (
        <>

            <div className='w-[90%]  mx-auto  sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px]'>


                <div className="xl:text-[43px] md:text-[35px] text-[36px] font-[500] flex flex-wrap flex-row  tracking-[-0.03em] leading-[0.7em] w-[90%] max-w-[830px] gap-[0.25em] selection:bg-[#baff00] selection:text-gray-950   text-neutral-700">
                    <span className=''>BUILDING </span>
                    <span className=''>WEBSITES </span>
                    <span className=''>THAT </span>
                    <span className=''>NOT </span>
                    <span className=''>ONLY </span>
                    <span className=''>LOOK </span>
                    <span className=''>GREAT </span>
                    <span className=''>BUT </span>
                    <span className=''>ALSO </span>
                    <span className=''>DELIVER </span>
                    <span className=''>MEASURABLE </span>
                    <span className=''>RESULTS.</span>
                </div>

            </div>


            {/*  */}



            <div className='flex justify-between items-baseline md:flex-row flex-col space-y-[35px] w-[90%]   mx-auto  sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px]  '>


                {/* first */}
                <div className='w-full  flex flex-col space-y-0  '>

                    <div className='flex items-center '>
                        <div className=" xl:text-[137px] md:text-[85px] text-[95px] leading-none font-[500] text-gray-900">
                            <FinalizedProjectsCounter num={10} />
                        </div>
                        <h1 className="xl:text-[137px] md:text-[85px] text-[95px] font-[500] select-none leading-none text-gray-900">+</h1>


                    </div>

                    <p className="font-medium tracking-[-0.03em] select-none text-left text-[#7a7a7a]">
                        Finalized projects
                    </p>
                </div>

                {/* second */}
                <div className='w-full flex flex-col space-y-0'>

                    <div className='flex items-center '>
                        <div className=" xl:text-[137px] md:text-[85px] text-[95px] leading-none font-[500] text-gray-900">
                            <FinalizedProjectsCounter num={97} />
                        </div>
                        <h1 className="xl:text-[137px] md:text-[85px] text-[95px] font-[500] select-none leading-none text-gray-900">%</h1>


                    </div>

                    <p className="font-medium tracking-[-0.03em] select-none text-left text-[#7a7a7a]">
                        Conversion rate improvement
                    </p>
                </div>

                {/* third */}
                <div className='w-full  flex flex-col space-y-0'>

                    <div className='flex items-center '>
                        <div className="xl:text-[137px] md:text-[85px] text-[95px] leading-none font-[500] text-gray-900">
                            <FinalizedProjectsCounter num={2} />
                        </div>
                        <h1 className="xl:text-[137px] md:text-[85px] text-[95px] satoshi select-none font-[500] leading-none text-gray-900">+</h1>


                    </div>

                    <p className="font-medium satoshi  select-none tracking-[-0.03em] text-left text-[#7a7a7a]">
                        Years of experience
                    </p>
                </div>

            </div>
        </>
    )
}
