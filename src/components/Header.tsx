
import gsap from "gsap";


export default function Header() {

  // };

  return (
    <main className="w-[90%] mx-auto sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px] pt-[35px] flex flex-col gap-y-[78px] pb-[78px]">
      {/* Logo + name */}
      <div className="relative group h-[46px] w-[46px]">
        <img
          src={'imgs/logo.svg'} // Replace with your logo path
          alt="Linkar Soe's logo"
          className="w-full h-full z-20 cursor-pointer transform transition-transform duration-500 group-hover:rotate-180"
        />
        <h1
          id="hero-heading"
          className="absolute left-0 top-1/2 -translate-y-1/2 transform opacity-0 z-10 text-[30px] font-bold text-gray-950 whitespace-nowrap select-none cursor-default transition-all duration-500 delay-500 group-hover:opacity-100 group-hover:left-[50px]"
        >
          Linkar Soe
        </h1>
      </div>

      <section aria-labelledby="hero-heading" className="framer-15gz2jf flex flex-col space-y-[17px]">
        <h2 className="xl:text-[71px] md:text-[52px] text-[32px] leading-[1em] tracking-[-0.04em] cursor-default selection:bg-[#baff00] text-[#262626]">
          Building websites{" "}
          <span className="xl:text-[61px] md:text-[46px] sm:text-[28px] satoshi">&amp;</span> apps <br /> for immersive digital experiences.
        </h2>

        <p className="max-w-[582px] text-pretty w-full selection:bg-[rgba(201,255,0,1)] cursor-default text-[22px] md:text-[26px] leading-tight tracking-[-0.04em] text-gray-500">
          We design, build & ship websites and apps that shape the future of your business.
        </p>

        <div className="flex gap-2">
          {/* Let's talk link */}
          <a
            href="mailto:mglinkar08@gmail.com"
            onMouseEnter={() => gsap.to("#cursor", { opacity: 0 })}
            onMouseLeave={() => gsap.to("#cursor", { opacity: 1 })}
            className="px-5 rounded-full h-10 flex items-center bg-white text-black select-none border border-gray-300 hover:bg-gray-50 cursor-pointer"
          >
            Let's talk
          </a>

          {/* Pricing button wrapper */}
          <a
            href="#pricing"
            onMouseEnter={() => {
              gsap.to("#cursor", { opacity: 0 });

            }}
            onMouseLeave={() => {
              gsap.to("#cursor", { opacity: 1 });

            }}
            className="  relative h-10 px-5 rounded-full cursor-pointer  flex items-center justify-center w-[100px] bg-black text-white select-none hover:bg-gray-800"
          >

            Pricing

          </a>
        </div>
      </section>
    </main>

  );
}
