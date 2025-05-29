import { FeatureItem } from "./FeatureItem"
export default function Benefits() {
    return (
        <div className=' flex-col flex space-y-[35px] w-[90%] mx-auto sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px] '>

            <p className='xl:text-[44px] text-[37px] text- select-none '>
                Benefits
            </p>


            {/* test */}

            <div className="flex md:gap-[17px] gap-[44px] flex-col  md:flex-row ">
                <FeatureItem
                    color1="bg-blue-500"
                    color2="bg-blue-300"
                    rotate="rotate-[14deg]"
                    title="Fast turnaround"
                    description="We focus on one client at a time, delivering exceptional results fast, without compromising on quality."
                />
                <FeatureItem
                    color1="bg-pink-500"
                    color2="bg-pink-300"
                    rotate="rotate-[14deg]"
                    title="Tailored design"
                    description="We emphasise delivering unique designs, ensuring your brand stands out with a distinct visual identity."
                />
                <FeatureItem
                    color1="bg-green-500"
                    color2="bg-green-300"
                    rotate="rotate-[-180deg]"
                    title="Scalable solutions"
                    description="We can integrate new features, revamp content and adapt your project to follow the latest trends."
                />
                <FeatureItem
                    color1="bg-yellow-400"
                    color2="bg-yellow-200"
                    nestedCircle
                    title="Fixed price"
                    description="Access a range of web services at a fixed price, making it easier to budget and control expenses."
                />
            </div>


        </div>
    )
}
