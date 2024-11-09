/* React */
import { useRef, useState } from 'react';

/* React Router */
import { Link } from 'react-router-dom';

/* React Slick */
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

/* Import Components */
import { Reveal } from './Animations/Reveal.tsx';

/* Data JSON */
import projectsData from '../data/projectsData.json';

/* Icons (Lucide React) */
import { Link2, Github } from 'lucide-react';

/* React Slick - Carousel */
function SampleNextArrow() {
    return (
        <div className="hidden"/>
    );
}

function SamplePrevArrow() {
    return (
        <div className="hidden"/>
    );
}

export function Work() {
    const [dotActive, setDotActive] = useState(0);

    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: true,
        infinite: true,
        focusOnSelect: true,
        swipeToSlide: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,

        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        
        beforeChange: (_prev: number, next: number) => {
            setDotActive(next);
        },

        appendDots: (dots: React.ReactNode) => (
            <div
                style = {
                    {
                        borderRadius: "10px",
                        padding: "10px"
                    }
                }
            >
                <ul style = {
                    { 
                        display: "flex",
                        gap: "15px",
                        justifyContent: "center",
                        marginTop: "25px"
                    }
                }> {dots} </ul>
            </div>
        ),
        
        customPaging: (i: number) => (
            <div
                style = {
                    {
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        background: i === dotActive ? "rgb(239,68,68)" : "gray",
                    }
                }
            >
            </div>
        )
    };

    return (
        <section className='p-8 md:p-16'>
            <div className="container mx-auto">
                <div>
                    <Reveal>
                        <h2 className='mb-8 md:mb-12 xl:mb-16 text-xl md:text-2xl xl:text-3xl text-center mx-auto font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-dots before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]'>Últimos Projetos</h2>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <div className='mb-14'>
                            <Slider
                                {...settings}
                                ref={slider => {sliderRef.current = slider}}
                            >
                                {projectsData.map((data, index) => { /* slice(0, n) Começa no 1° elemento e apresenta até o n° elemento */
                                    return (
                                        <div className='w-full px-4' key={index}>
                                            <div className='rounded-xl border border-gray-200 shadow group overflow-hidden relative'>
                                                <div className="group flex flex-col space-y-1.5 p-6 relative w-full h-80 items-center justify-center overflow-hidden">
                                                    <div 
                                                        className="absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-110"
                                                        style={{ backgroundImage: `url(assets/work/${data.image})` }}
                                                    ></div>

                                                    <div className="flex gap-x-4 relative z-10">
                                                        <Link to={data.link} target='_blank' className='bg-gray-800 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 hover:bg-gray-500 transition-all duration-300'>
                                                            <Link2 className='text-white' />
                                                        </Link>

                                                        <Link to={data.github} target='_blank' className='bg-gray-800 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 hover:bg-gray-500 transition-all duration-300'>
                                                            <Github className='text-white' />
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className='h-full px-8 py-6'>
                                                    <div className='inline-flex items-center rounded-full bg-red-500 px-2 py-1 text-xs text-white uppercase font-semibold mb-2 absolute top-4 left-4'>{data.category}</div>
                                                    <h4 className='text-base md:text-lg xl:text-xl font-bold mb-1'>{data.title}</h4>
                                                    <p className='text-sm text-gray-700 text-justify line-clamp-3'>{data.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </Reveal>

                    <div className='flex justify-center'>
                        <Link to='/portfolio-website/projetos' className='py-3 md:py-4 px-12 inline-block bg-black hover:bg-white text-base text-white hover:text-red-500 rounded-full font-medium hover:shadow-[inset_0_0_1px_2px_rgba(239,68,68,1)] transition duration-300'>
                            Todos os meus projetos
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}