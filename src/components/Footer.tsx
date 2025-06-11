import logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <div className="w-full bg-[#baff00] cursor-default  py-[54px] flex flex-col justify-between items-center h-[681px] ">
      <span className="flex items-center select-none space-x-2 ">

        <img src={logo} alt="logo" className="h-10 w-10   rounded-full" />

        <p className="text-[24px] font-bold text-gray-900">

          LinKar Soe
        </p>
      </span>
      <div className="relative overflow-hidden w-screen text-[80px] select-none whitespace-nowrap ">
        <div className="inline-block animate-marquee w-max ">
          <span className="inline-block px-4 ml-[100px] ">Let's grow Business together *</span>
          <span className="inline-block px-4 ml-[100px]">Let's grow Business together *</span>
          <span className="inline-block px-4 ml-[100px]">Let's grow Business together *</span>
          <span className="inline-block px-4 ml-[100px]">Let's grow Business together *</span>
          <span className="inline-block px-4 ml-[100px]">Let's grow Business together *</span>
          <span className="inline-block px-4 ml-[100px]">Let's grow Business together *</span>


        </div>

        {/* Custom animation styles */}
        <style>
          {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
        </style>
      </div>

      <p>
        mglinkar08@gmail.com
      </p>

      <p>© 2025 linkarsoe Studio. All rights reserved</p>

    </div>
  )
}
