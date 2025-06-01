import { FeatureItem } from "./FeatureItem"
export default function Benefits() {
    return (
        <div className=' flex-col flex space-y-[35px] w-[90%] mx-auto sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px] '>

            <p onMouseEnter={() => gsap.to("#cursor", { scale: 4 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1 })} data-aos="fade-up" className='xl:text-[44px] text-[37px] text- select-none '>
                Benefits
            </p>


            {/* test */}

            <div className="flex md:gap-[17px] gap-[44px] flex-col  md:flex-row ">
                <FeatureItem
                    logo={<div className="w-[26px]  h-[26px]  relative m-0 ">
                        <span className="w-full h-2 rounded-t-full rotate-12 bg-gray-950 block absolute top-0.5 "></span>
                        <span className="w-full h-2 rounded-b-full rotate-12 bg-gray-950 block absolute bottom-0.5"></span>

                    </div>}
                    title="Fast turnaround"
                    description="We focus on one client at a time, delivering exceptional results fast, without compromising on quality."
                />
                <FeatureItem
                    logo={<div className="w-[26px]  h-[26px]  relative m-0 ">
                        <span className="w-2 h-2 rounded-full  bg-gray-950 block absolute top-0.5 "></span>
                        <span className="w-4 h-4 rounded-br-full  bg-gray-950 block absolute bottom-0 right-0"></span>

                    </div>}

                    title="Tailored design"
                    description="We emphasise delivering unique designs, ensuring your brand stands out with a distinct visual identity."
                />
                <FeatureItem
                    logo={<div className="w-[26px]  h-[26px]  relative m-0 ">
                        <span className="w-full h-3 rounded-tl-full rounded-br-full  bg-gray-950 block absolute top-0 "></span>
                        <span className="w-full h-3 rounded-tl-full rounded-br-full  bg-gray-950 block absolute bottom-0 "></span>

                    </div>}


                    title="Scalable solutions"
                    description="We can integrate new features, revamp content and adapt your project to follow the latest trends."
                />
                <FeatureItem
                    logo={<div className="w-[26px]  h-[26px]  relative m-0 ">
                        <span className="w-full h-full rounded-full rounded-br-full bg-gray-950  block absolute top-0 "></span>
                        <span className="w-2.5 h-2.5    bg-gray-100 block absolute top-1/2 left-1/2 transform -translate-1/2 "></span>

                    </div>}

                    title="Fixed price"
                    description="Access a range of web services at a fixed price, making it easier to budget and control expenses."
                />
            </div>


        </div>
    )
}
