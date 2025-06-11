import { useRef } from "react";
import gsap from "gsap";
import logo from "../assets/logo.svg";

export default function Header() {
  const pricingBtnRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    gsap.to("#cursor", { opacity: 0 });

    if (pricingBtnRef.current) {
      pricingBtnRef.current.style.position = "absolute";

      const parent = pricingBtnRef.current.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const relativeX = e.clientX - parentRect.left;

        gsap.to(pricingBtnRef.current, {
          x: relativeX - pricingBtnRef.current.offsetWidth / 2,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (pricingBtnRef.current) {
      const parent = pricingBtnRef.current.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const relativeX = e.clientX - parentRect.left;
        const relativeY = e.clientY - parentRect.top;

        gsap.to(pricingBtnRef.current, {
          x: relativeX - pricingBtnRef.current.offsetWidth / 2,
          y: relativeY - pricingBtnRef.current.offsetHeight / 2,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  };

  const handleMouseLeave = () => {
    gsap.to("#cursor", { opacity: 1 });

    if (pricingBtnRef.current) {
      pricingBtnRef.current.style.position = "static";

      gsap.to(pricingBtnRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(pricingBtnRef.current, { clearProps: "transform" });
        },
      });
    }
  };

  return (
    <div className="w-[90%] mx-auto sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px] pt-[35px] flex flex-col gap-y-[78px] pb-[78px]">
      {/* Logo + name */}
      <div className="relative group h-[46px] w-[46px]">
        <img
          src={logo}
          alt="logo"
          className="w-full h-full z-20 cursor-pointer transform transition-transform duration-500 group-hover:rotate-180"
        />
        <h1 className="absolute left-0 top-1/2 -translate-y-1/2 transform opacity-0 z-10 text-[30px] font-bold text-gray-950 whitespace-nowrap select-none cursor-default transition-all duration-500 delay-500 group-hover:opacity-100 group-hover:left-[50px]">
          Linkar Soe
        </h1>
      </div>

      {/* Hero Section */}
      <header
        aria-label="Header"
        className="framer-15gz2jf flex flex-col space-y-[17px]"
        data-framer-name="Hero Heading"
      >
        <h1
          data-aos="new-animation"
          className="xl:text-[71px] md:text-[52px] text-[32px] leading-[1em] tracking-[-0.04em] cursor-default selection:bg-[#baff00] text-[#262626]"
        >
          Building websites{" "}
          <span className="xl:text-[61px] md:text-[46px] sm:text-[28px] satoshi">
            &amp;
          </span>{" "}
          apps <br /> for immersive digital experiences.
        </h1>

        <div className="flex flex-col space-y-[29px]">
          <p className="max-w-[582px] text-pretty w-full selection:bg-[rgba(201,255,0,1)] cursor-default text-[22px] md:text-[26px] leading-tight tracking-[-0.04em] text-gray-500">
            We design, build & ship websites and apps that shape the future of your business.
          </p>

          <div className="flex gap-2">
            {/* Let's talk button */}
            <a href="mailto:mglinkar08@gmail.com" >
              <button
                onMouseEnter={() => gsap.to("#cursor", { opacity: 0 })}
                onMouseLeave={() => gsap.to("#cursor", { opacity: 1 })}
                className="px-5 rounded-full h-10 flex items-center bg-white text-black select-none border border-gray-300 hover:bg-gray-50 cursor-pointer"
              >
                <p>Let's talk</p>
              </button>
            </a>

            {/* Pricing button wrapper with relative positioning */}
            <a
              href="#pricing"
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="block w-[120px] relative h-10"
            >
              <button
                ref={pricingBtnRef}
                className="px-5 rounded-full cursor-pointer h-10 flex items-center justify-center w-[100px] bg-black text-white select-none hover:bg-gray-800 absolute left-0 top-0"
              >
                <p>Pricing</p>
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
