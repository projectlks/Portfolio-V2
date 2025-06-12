import { Carousel } from '@mantine/carousel';

import gsap from 'gsap';

interface itemType {
    img: string;
    link: string;
}


const onMouseEnter = () => {
    const el = document.getElementById("cursor");
    if (el) {

        el.innerHTML = `
        <div class="flex items-center justify-center absolute z-50 w-10 h-5 bg-[#00000080]  border-[1px] tracking-wider border-gray-300 rounded-[14px] -top-[20px] -left-[20px] " >
          <span class="text-[10px] text-gray-100 ">Visit</span>
        </div>
      `;

    }
    gsap.to("#cursor", { duration: 0.3, textIndent: 0, backgroundColor: "transparent", });
}


const onMouseLeave = () => {
    const el = document.getElementById("cursor");
    if (el) {
        el.innerHTML = "";

    }
    gsap.to("#cursor", { duration: 0.3, textIndent: 0, backgroundColor: "#030712" });
}


const images: itemType[] = [
    { img: '/imgs/e-com.webp', link: 'https://ecommerce-website-taupe-psi.vercel.app/' },
    { img: '/imgs/eastwind.webp', link: 'https://www.eastwindmyanmar.com.mm/' },
    { img: '/imgs/movie-web.webp', link: 'https://movie-web-v-2.vercel.app/' },
    { img: '/imgs/shoe.webp', link: 'https://shoes-e-commerce-master.vercel.app/' },
    { img: '/imgs/tip-tac-toe.webp', link: 'https://tic-tac-toe-mauve-one.vercel.app/' },
];






function CarouselCard({ item }: { item: itemType }) {
    const isFirst = item.link === images[0].link;

    return (
        <a
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit project site: ${item.link}`}

        >
            <div className="p-[7px] rounded-[14px] bg-gray-100 border border-gray-300">
                <img
                    src={item.img}
                    alt={`Screenshot of project at ${item.link}`}
                    loading={isFirst ? "eager" : "lazy"}
                    fetchPriority={isFirst ? "high" : "auto"}
                    width={700}
                    height={394}
                    className="rounded-[8px] object-cover w-full h-auto"
                />
            </div>
        </a>
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
                slideGap="10px"
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
