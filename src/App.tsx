

import Benefits from "./components/Benefits";
import CarouselPlugin from "./components/CarouselPlugin";
import Cursor from "./components/Cursor";
import Header from "./components/Header";


export default function App() {


  return (
    <section className="flex flex-col space-y-[78px] overflow-hidden">
      <Cursor />
      <Header />
      <CarouselPlugin />
      <Benefits />
      {/* <Experience />
      <Skills />
      <Approach />
      <Pricing /> */}
    </section>
  );
}

