/* React */
import { useRef, useState } from 'react';

/* React Router */
import { Link } from 'react-router-dom';

/* React Slick */
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

/* Data JSON */
import projectsData from '../data/projectsData.json';

/* Icons (Lucide React) */
import { /*ChevronRight, ChevronLeft,*/ Link2, Github } from 'lucide-react';

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

    // const next = () => {
    //     sliderRef.current?.slickNext();
    // };
    
    // const previous = () => {
    //     sliderRef.current?.slickPrev();
    // };

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
        <section className='py-4 lg:py-12'>
            <div className="container p-8 mx-auto">
                <div>
                    <h2 className='mb-12 xl:mb-16 text-3xl text-center mx-auto font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-dots before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]'>Latest Projects</h2>

                    <div className='mb-14'>
                        <Slider
                            {...settings}
                            ref={slider => {sliderRef.current = slider}}
                        >
                            {projectsData.map((data, index) => { /* slice(0, n) Começa no 1° elemento e apresenta até o n° elemento */
                                return (
                                    <div className='w-full px-4' key={index}>
                                        <div className='rounded-xl border shadow group overflow-hidden relative'>
                                            <div className='flex flex-col space-y-1.5 p-6 relative w-full h-[300px] items-center justify-center bg-red-100/25'>
                                                <img className='absolute shadow-2xl' src={`../src/assets/work/${data.image}`} alt="" />

                                                <div className='flex gap-x-4'>
                                                    <Link to={data.link} target='_blank' className='bg-gray-800 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'><Link2 className='text-white' /></Link>

                                                    <Link to={data.github} target='_blank' className='bg-gray-800 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'><Github className='text-white' /></Link>
                                                </div>
                                            </div>

                                            <div className='h-full px-8 py-6'>
                                                <div className='inline-flex items-center rounded-full bg-red-500 px-2 py-1 text-xs text-white uppercase font-semibold mb-2 absolute top-4 left-4'>{data.category}</div>
                                                <h4 className='text-2xl font-bold mb-1'>{data.name}</h4>
                                                <p className='text-base text-gray-600'>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>

                        {/* <div className='text-center flex justify-between px-4'>
                            <button className="text-white p-2 bg-red-500 hover:bg-gray-800 duration-300 rounded-md" onClick={previous}>
                                <ChevronLeft size={36} />
                            </button>

                            <button className="text-white p-2 bg-red-500 hover:bg-gray-800 duration-300 rounded-md" onClick={next}>
                                <ChevronRight size={36} />
                            </button>
                        </div> */}
                    </div>

                    <div className='flex justify-center'>
                        <Link to='/projetos' className='py-4 px-6 inline-block bg-black hover:bg-white text-white hover:text-red-500 rounded-full font-medium hover:shadow-[inset_0_0_1px_2px_rgba(239,68,68,1)] transition duration-300'>
                            All my projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}