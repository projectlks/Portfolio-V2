
export default function AboutMe() {
    return (
        <div className="flex justify-between  w-[90%]  mx-auto sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px]">

            {/* Left Side - Text */}
            <div className="flex flex-col space-y-[35px] md:max-w-[497px]   xl:max-w-[691px]">
                <p data-aos="fade-up" className="xl:text-[44px] text-[37px] select-none">
                    Front-End Developer
                </p>

                <img src={'imgs/profile.webp'} alt="profile" className=" h-[400px]  object-contain md:hidden w-full max-w-[300px] select-none md:rounded-none "

                />

                <div className="flex flex-col w-full max-w-[691px] space-y-[17px] text-[18px] xl:text-[20px] ">
                    <p className=" cursor-default font-medium leading-[1.3em] text-[#6e6e6e] satoshi">
                        LinKar Soe, a front-end developer from Myanmar.
                    </p>
                    <p className=" cursor-default font-medium leading-[1.3em] text-[#6e6e6e] satoshi">
                        I'm a dedicated front-end developer with 2 years of hands-on experience building responsive, user-friendly websites and web applications. My journey into development began with a passion for visual design, which naturally evolved into creating interactive and accessible digital experiences.
                    </p>
                    <p className=" cursor-default font-medium leading-[1.3em] text-[#6e6e6e] satoshi">
                        Over the past two years, I've worked on a variety of projects—mainly with start-ups and personal ventures—focusing on clean code, performance, and engaging UI. I enjoy turning ideas into real products that not only look great but also provide smooth and intuitive experiences for users.
                    </p>
                    <p className=" cursor-default font-medium leading-[1.3em] text-[#6e6e6e] satoshi">
                        I believe strong attention to detail and working closely with others is key to delivering meaningful and impactful web solutions.
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="select-none hidden md:flex justify-end   items-end  ">
                <img src={'imgs/profile.webp'} alt="profile" loading="lazy" className=" h-[400px] w-auto object-cover   "

                />
            </div>
        </div>

    )
}

