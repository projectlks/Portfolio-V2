import gsap from "gsap";
export default function Header() {
  return (
    <div className="w-[90%] mx-auto sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px] pt-[35px]  flex flex-col gap-y-[78px] pb-[78px] ">

      <div className="h-[46px]  w-[46px] bg-red-500   ">

      </div>






      <header aria-label="Header" className="framer-15gz2jf flex flex-col space-y-[17px] " data-framer-name="Hero Heading">
        <h1 data-aos="new-animation" className="xl:text-[71px] md:text-[52px] text-[32px] leading-[1em] tracking-[-0.04em] cursor-default selection:bg-[#baff00] text-[#262626] ">
          Building websites <span className="xl:text-[61px] md:text-[46px] sm:text-[28px] satoshi ">&</span>  apps <br />  for immersive digital experiences.
        </h1>

        <div className="flex flex-col space-y-[29px] ">



          <p className="max-w-[582px] text-pretty  w-full selection:bg-[rgba(201,255,0,1)] cursor-default text-[22px] md:text-[26px] leading-tight tracking-[-0.04em] text-gray-500">
            We design, build & ship websites and apps that shape the future of your business.
          </p>



          <div className="flex gap-2">
            {/* Let's talk button */}

            <button onMouseEnter={() => {
              gsap.to("#cursor", { opacity: 0 });

            }}
              onMouseLeave={() => {
                gsap.to("#cursor", { opacity: 1 });

              }} className="px-5 rounded-full h-10 flex items-center bg-white text-black select-none border border-gray-300 hover:bg-gray-50 cursor-pointer ">
              <p>Let's talk</p>
            </button>

            {/* Pricing button */}
            <a href="pricing">

              <button onMouseEnter={() => {
                gsap.to("#cursor", { opacity: 0 });

              }}
                onMouseLeave={() => {
                  gsap.to("#cursor", { opacity: 1 });

                }} className="px-5 rounded-full cursor-pointer h-10 flex items-center bg-black text-white select-none hover:bg-gray-800">
                <p>Pricing</p>
              </button>

            </a>
          </div>
        </div>

      </header>



    </div>
  )
}
