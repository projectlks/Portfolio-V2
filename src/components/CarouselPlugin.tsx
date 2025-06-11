import { Carousel } from '@mantine/carousel';
import eCom from '../assets/e-com.png';
import movieWeb from '../assets/movie-web.png';
import ticTacToe from '../assets/tip-tac-toe.png';
import shoe from '../assets/shoe.png';
import eastWind from '../assets/eastwind.png';
import gsap from 'gsap';

interface itemType {
    img: string;
    link: string;
}

const images: itemType[] = [
    { img: eCom, link: 'https://ecommerce-website-taupe-psi.vercel.app/' },
    { img: movieWeb, link: 'https://movie-web-v-2.vercel.app/' },
    { img: shoe, link: 'https://shoes-e-commerce-master.vercel.app/' },
    { img: eastWind, link: 'https://www.eastwindmyanmar.com.mm/' },
    { img: ticTacToe, link: 'https://tic-tac-toe-mauve-one.vercel.app/' },

    // { img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png', link: '#' },
    // { img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', link: '#' },
    // { img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', link: '#' },
    // { img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', link: '#' },
    // { img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png', link: '#' },

];

const onMouseEnter = () => {
    const el = document.getElementById("cursor");
    if (el) {

        el.innerHTML = `
        <div class="flex items-center justify-center absolute z-50 w-10 h-5 bg-[#00000080]  border-[1px] tracking-wider border-gray-300 rounded-[14px] -top-[20px] -left-[20px] " >
          <span class="text-[10px] text-gray-100 ">Visit</span>
        </div>
      `;
        el.style.opacity = "1";
    }
    gsap.to("#cursor", { duration: 0.3, textIndent: 0, backgroundColor: "inherit" });
}


const onMouseLeave = () => {
    const el = document.getElementById("cursor");
    if (el) {
        el.innerHTML = "";
        el.style.opacity = "0";
    }
    gsap.to("#cursor", { duration: 0.3, textIndent: 0, backgroundColor: "#030712" });
}
function CarouselCard({ item }: { item: itemType }) {




    return (
        // ...existing code...
        <a
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="p-[7px] rounded-[14px] bg-white border border-gray-300">
                <img src={item.img} alt="images" className="rounded-[8px] object-cover w-full h-auto" />
            </div>
        </a>

        // ...existing code...
    );



}

export default function CarouselPlugin() {


    const slides = images.map((item, index) => (
        <Carousel.Slide key={index}>
            <CarouselCard item={item} />
        </Carousel.Slide>
    ));


    return (
        <div
            className="border-y border-gray-300 md:px-5 py-10  "
        >

            <Carousel


                slideSize={{ base: '100%', sm: "75%", md: '50%', xl: '700px' }}
                slideGap="8px"
                withControls={false}
                withIndicators={false}
                draggable={true} // Enable dragging

                emblaOptions={{

                    dragFree: true, // disable dragFree to allow snapping
                }}


            >

                {slides}

            </Carousel >



        </div >
    );
}
