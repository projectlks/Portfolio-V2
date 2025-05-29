import { Carousel } from '@mantine/carousel';


const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

function CarouselCard({ image }: { image: string }) {
    return (
        <a href="#">
            <div className="p-[7px] rounded-[14px] bg-white border border-gray-300">
                <img src={image} alt="images" className="rounded-[8px] object-cover w-full h-auto " />
            </div>
        </a>
    );
}

export default function CarouselPlugin() {
    // const theme = useMantineTheme();
    // const mobile = useMediaQuery(`(width: ${theme.breakpoints.sm}px)`);

    const slides = images.map((image, index) => (
        <Carousel.Slide key={index}>
            <CarouselCard image={image} />
        </Carousel.Slide>
    ));

    return (
        <div
            className="border-y border-gray-300 md:px-5  py-10"

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
            </Carousel>




        </div>
    );
}
