/* React */
import { useEffect, useRef } from 'react';

/* React Router */
import { Link } from 'react-router-dom';

/* Icons (Lucide React) */
import { Send, Download } from 'lucide-react';

/* Typed */
import Typed from 'typed.js';

/* Components */
import { DevImg } from './DevImg.tsx';
import { Reveal } from './Animations/Reveal.tsx';

/* CSS */
import './home.css';

/* Imagem */
import profileImg from '../../public/assets/home/profile.jpg';

/* Currículo PDF */
import resumeFile from "../../public/assets/home/Aleksander's_Resume.pdf";

export function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Engenheiro da Computação', 'Desenvolvedor Full Stack', 'Pós-graduando em Desenvolvimento Full Stack', ],
          typeSpeed: 35,
          backSpeed: 50,
          loop: true
        });
    
        return () => {
          typed.destroy();
        };
    }, []);

    return (
        <section className='p-8 md:p-16 bg-home bg-no-repeat bg-bottom bg-cover'>
            <div className="container mx-auto">
                <div className='xl:grid xl:grid-cols-[2fr_1fr] xl:gap-24'>
                    <div className='text-center justify-center mx-auto flex flex-col xl:text-left'>
                        <Reveal delay={0.25}>
                            <div>
                                <h1 className='text-2xl sm:text-3xl md:text-5xl xl:text-6xl tracking-wide font-bold'>
                                    Olá, me chamo
                                </h1>
                                <h1 className='text-2xl sm:text-3xl md:text-5xl xl:text-6xl tracking-wide font-bold mb-6'>
                                    Aleksander Balduino
                                </h1>
                            </div>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className='mb-6 text-sm md:text-base lg:text-lg xl:text-lg uppercase font-semibold tracking-[2px] md:tracking-[3px]'>
                                Sou um <span className='text-red-500' ref={el}></span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.75}>
                            <p className='mb-12 text-sm font-light text-justify md:text-base lg:text-lg md:mb-16'>
                                Entusiasta de tecnologia e apaixonado por programação, acredito que o aprendizado é uma jornada sem fim, sempre há espaço para aprender mais. Para mim, o valor da vida está em explorar diversas áreas do saber, e em poder compartilhar essas novas descobertas e experiências com outras pessoas, levando o conhecimento comigo onde quer que eu vá.
                            </p>
                        </Reveal>

                        <Reveal delay={1}>
                            <div className='flex flex-col gap-6 justify-center px-12 md:p-0 md:gap-8 md:flex-row xl:justify-normal'>
                                <Link to='/portfolio-website/contato' className='inline-flex items-center justify-center whitespace-nowrap py-3 md:py-4 px-8 gap-3 bg-black rounded-full hover:bg-white text-white hover:text-red-500 hover:shadow-[inset_0_0_1px_2px_#ef4444] transition duration-100'>
                                    <span className='text-sm md:text-base font-medium'>Entre em contato</span>
                                    <Send className='w-4 h-4' />
                                </Link>

                                <a href={resumeFile} download="Aleksander's_Resume" className='inline-flex items-center justify-center whitespace-nowrap py-3 md:py-4 px-8 gap-3 bg-white rounded-full hover:bg-red-500 hover:text-white shadow-[inset_0_0_0_2px_black] hover:shadow-[inset_0_0_0_2px_#ef4444] transition duration-100'>
                                    <span className='text-sm md:text-base font-medium'>Download CV</span>
                                    <Download className='w-4 h-4' />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={1.5}>
                        <div className='hidden xl:flex animate__animated animate__fadeIn animate__slow'>
                            <DevImg img={profileImg} />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}