import { useEffect } from "react";


import Approach from "./components/Approah";
import Benefits from "./components/Benefits";
import CarouselPlugin from "./components/CarouselPlugin";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Skills from "./components/Skills";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useCursor } from "./hooks/useCursor";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      // mirror: true,
      duration: 500,
    });
  }, []);

  useCursor(); // hook runs once to attach listeners

  return (
    <section className="flex flex-col space-y-[78px] overflow-hidden">

      {/* Global cursor */}
      <div
        id="cursor"
        className="w-2 h-2  rounded-full bg-gray-950 fixed top-0 left-0 pointer-events-none z-50 opacity-100  "
      ></div>



      {/* Your sections */}
      <Header />
      <CarouselPlugin />
      <Benefits />
      <Experience />
      <Skills />
      <Approach />
      <Pricing />
      <AboutMe />
      <Footer />
    </section>
  );
}
