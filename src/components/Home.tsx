/* React */
import { useEffect, useRef } from 'react';

/* React Router */
import { Link } from 'react-router-dom';

/* Icons (Lucide React) */
import { ChevronDown, Send, Download } from 'lucide-react';

/* Typed */
import Typed from 'typed.js';

/* Components */
// import { Socials } from './Socials';
import { DevImg } from './DevImg.tsx';
import { Reveal } from './Animations/Reveal.tsx';

/* CSS */
import './home.css';

/* Imagem */
import profileImg from '../../src/assets/home/profile.jpg';

/* Currículo PDF */
import resumeFile from "../../src/assets/home/Aleksander's_Resume.pdf";

export function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Engenheiro da Computação', 'Desenvolvedor Full Stack'],
          typeSpeed: 35,
          backSpeed: 50,
          loop: true
        });
    
        return () => {
          typed.destroy();
        };
    }, []);

    return (
        <section className='py-4 xl:py-24 xl:pt-12 bg-home bg-no-repeat bg-bottom bg-cover'>
            <div className="container p-8 mx-auto">
                <div className='flex justify-between gap-x-8'>
                    <div className='flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <Reveal delay={0.25}>
                            <h1 className='text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4'>
                                Olá, me chamo Aleksander Balduino
                            </h1>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className='mb-4 text-sm uppercase font-semibold tracking-[4px]'>
                                Sou um <span className='text-red-500' ref={el}></span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.75}>
                            <p className='text-lg mb-8 font-light max-w-[600px] mx-auto xl:mx-0 text-center xl:text-justify'>
                                Brief description with insights into myself, my vocational journey, and what i engage in professionally. Lorem Ipsum dolor sit amet.
                            </p>
                        </Reveal>

                        <Reveal delay={1}>
                            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                                <Link to='/contato' className='inline-flex items-center justify-center whitespace-nowrap bg-black hover:bg-white text-white hover:text-red-500 py-4 px-6 gap-x-2 rounded-full text-base font-medium hover:shadow-[inset_0_0_1px_2px_rgba(239,68,68,1)] transition duration-300'>
                                    Contact me
                                    <Send size={18} />
                                </Link>

                                <a href={resumeFile} download="Aleksander's_Resume">
                                    <button className='inline-flex items-center justify-center whitespace-nowrap bg-white hover:bg-red-500 text-black hover:text-white py-4 px-6 gap-x-2 rounded-full text-base font-medium shadow-[inset_0_0_1px_2px_rgba(0,0,0,1)] hover:shadow-[inset_0_0_1px_2px_rgba(239,68,68,1)] transition duration-300'>
                                        Download CV
                                        <Download size={18} />
                                    </button>
                                </a>
                            </div>
                        </Reveal>

                        {/* <Socials /> */}
                    </div>

                    <Reveal delay={1.5}>
                        <div className='hidden xl:flex animate__animated animate__fadeIn animate__slow'>
                            <DevImg img={profileImg} />
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={2} translateY={false}>
                    <div className='hidden md:flex absolute left-1/2 bottom-20 xl:bottom-8 animate-bounce'>
                        <a href="#aboutme"><ChevronDown size={30} className='hover:text-red-500 hover:cursor-pointer transition-all' /></a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}