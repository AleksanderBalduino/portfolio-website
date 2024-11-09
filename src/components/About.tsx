/* Import Components */
import { DevImgAbout } from './DevImgAbout.tsx';
import { Tabs } from './Tabs.tsx';
import { Tab } from './Tab.tsx';
import Marquee from 'react-fast-marquee';
import { Reveal } from './Animations/Reveal.tsx';

/* Framer Motion */
import { motion } from "framer-motion";

/* React CountUp */
import CountUp from 'react-countup';

/* Imagem */
import profileImg from '../../public/assets/about/profile.jpg';

/* Icons (Lucide React) */
import { User, PhoneCall, Mail, Calendar, GraduationCap, Home, Briefcase, MapPin, Cake, BookHeart } from 'lucide-react';

const iconComponents: Record<string, React.ComponentType> = {
    User, PhoneCall, Mail, Calendar, Home, MapPin, Cake, BookHeart
};

/* Data JSON */
import infoData from '../data/infoData.json';
import qualificationData from '../data/qualificationData.json';
import skillData from '../data/skillData.json';

import { QualificationItem } from './QualificationItem.tsx';

interface DataItem {
    [key: string]: string;
}

interface QualificationItem {
    title: string;
    data: DataItem[];
}

export function About() {
    const getData = (arr: QualificationItem[], title: string): QualificationItem | undefined => {
        return arr.find((item) => item.title === title);
    };

    const educationData = getData(qualificationData, 'education');
    const experienceData = getData(qualificationData, 'experience');

    const languagesData = getData(skillData, 'languages');
    const technologiesData = getData(skillData, 'technologies');
    const skillsData = getData(skillData, 'skills');

    return (
        <section id='aboutme' className='p-8 md:p-16'>
            <div className="container mx-auto">
                <Reveal>
                    <h2 className='mb-8 md:mb-12 xl:mb-16 text-xl md:text-2xl xl:text-3xl text-center mx-auto font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-dots before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]'>Sobre mim</h2>
                </Reveal>

                <Reveal delay={0.5}>
                    <div className='xl:grid xl:grid-cols-[1fr_2fr] xl:gap-24'>
                        <div className='hidden xl:flex xl:justify-center flex-[0.5_0.5_0%] relative'>
                            <DevImgAbout img={profileImg} />
                        </div>

                        <ul className='flex-1'>
                            <Tabs tabsStyle='md:grid-cols-3'>
                                <Tab label='Informações'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='md:text-lg xl:text-xl font-bold mb-4 uppercase'>Minha experiência e dedicação</h3>

                                        <p className='md:text-base xl:text-lg text-justify mx-auto font-light mb-8 xl:mx-0'>Desenvolvo sites e aplicativos intuitivos utilizando tecnologias atuais, proporcionando experiências envolventes e dinâmicas para os usuários.</p>

                                        <div className='grid gap-4 mb-12 md:grid-cols-2'>
                                            {infoData.map((data, index) => {
                                                const IconComponent = iconComponents[data.icon];

                                                return (
                                                    <div className='flex flex-row justify-center items-center xl:justify-start gap-4' key={index}>
                                                            <div className='text-red-500'><IconComponent /></div>
                                                            <div className='text-sm xl:text-base'>{data.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-sm md:text-base text-red-500 uppercase'>Idiomas</div>

                                            <div className='border-[1px] my-4 md:my-3'></div>

                                            <div className='grid gap-8 md:grid-cols-2'>
                                                <div className='overflow-x-hidden'>
                                                    <p className='text-xs md:text-sm uppercase mb-4'>Português</p>

                                                    <div className='flex justify-between'>
                                                        <p className='text-sm font-light'>Nativo</p>
                                                        
                                                        <CountUp start={0} end={100} duration={1} delay={0.5} suffix='%'>
                                                            {({ countUpRef }) => (
                                                                <span ref={countUpRef} className='text-sm lg:text-base text-red-500 font-bold' />
                                                            )}
                                                        </CountUp>
                                                    </div>

                                                    <span className='w-full h-2 bg-black bg-opacity-10 inline-flex rounded-full'>
                                                        <motion.span 
                                                            className='w-full h-full bg-red-500 rounded-full'
                                                            initial={{ x: "-100%", opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ duration: 1, delay: 0.5 }}
                                                        ></motion.span>
                                                    </span>
                                                </div>

                                                <div className='overflow-x-hidden'>
                                                    <p className='text-xs md:text-sm uppercase mb-4'>Inglês</p>

                                                    <div className='flex justify-between'>
                                                        <p className='text-sm font-light'>Upper Intermediate</p>

                                                        <CountUp start={0} end={60} duration={1} delay={0.5} suffix='%'>
                                                            {({ countUpRef }) => (
                                                                <span ref={countUpRef} className='text-sm lg:text-base text-red-500 font-bold' />
                                                            )}
                                                        </CountUp>
                                                    </div>

                                                    <span className='w-full h-2 bg-black bg-opacity-10 inline-flex rounded-full'>
                                                        <motion.span 
                                                            className='w-[60%] h-full bg-red-500 rounded-full'
                                                            initial={{ x: "-100%", opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ duration: 1, delay: 0.5 }}
                                                        ></motion.span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab label='Qualificações'>
                                    <div>
                                        <h3 className='text-xl font-bold text-center mb-4 xl:text-left uppercase'>Minha Jornada Profissional e Acadêmica</h3>

                                        <div className='grid gap-6 md:grid-cols-2'>
                                            <div className='xl:grid relative p-3'>
                                                {experienceData && (
                                                        <>
                                                            {experienceData.data.map((item, id) => {
                                                                const {title, description, years} = item;

                                                                return (
                                                                    <QualificationItem key={id} icon={<Briefcase color='#ef4444' />} title={title} description={description} years={years} />
                                                                );
                                                            })}
                                                        </>
                                                    )}
                                            </div>

                                            <div className='md:grid md:grid-rows-[repeat(2,_1fr)_100%] relative p-3'>
                                                {educationData && (
                                                        <>
                                                            {educationData.data.map((item, index) => {
                                                                const {title, description, years} = item;

                                                                return (
                                                                    <QualificationItem key={index} icon={<GraduationCap color='#ef4444' />} title={title} description={description} years={years} />
                                                                );
                                                            })}
                                                        </>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab label='Skills'>
                                    <h3 className='text-xl font-bold mb-12 text-center xl:text-left uppercase'>Minhas Habilidades e Competências</h3>

                                    <div>
                                        <Marquee autoFill pauseOnClick speed={75} className='select-none mb-6 xl:mb-8 gradient-mask-r-[rgba(0,0,0,0),_rgba(0,0,0,1)_10%,_rgba(0,0,0,1)_90%]'>
                                            <div className='flex flex-wrap gap-10 ps-10'>
                                                {languagesData && languagesData.data.map((item, index) => (
                                                    <div key={index} className='grid gap-y-2'>
                                                        <div className='flex justify-center'>
                                                            <img src={`../src/assets/about/skills/${item.img}`} className='size-14 md:size-16 lg:size-[4.5rem] xl:size-20'/>
                                                        </div>

                                                        <p className='text-center text-sm font-semibold'>{item.name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Marquee>

                                        <Marquee autoFill pauseOnClick speed={75} direction='right' className='select-none mb-6 xl:mb-8 gradient-mask-r-[rgba(0,0,0,0),_rgba(0,0,0,1)_10%,_rgba(0,0,0,1)_90%]'>
                                            <div className='flex flex-wrap gap-10 ps-10'>
                                                {technologiesData && technologiesData.data.map((item, index) => (
                                                    <div key={index}>
                                                        <div className='flex justify-center'>
                                                            <img src={`../src/assets/about/skills/${item.img}`} className='size-14 md:size-16 lg:size-[4.5rem] xl:size-20'/>
                                                        </div>

                                                        <p className='text-center text-sm font-semibold'>{item.name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Marquee>

                                        <Marquee autoFill pauseOnClick speed={75} className='select-none gradient-mask-r-[rgba(0,0,0,0),_rgba(0,0,0,1)_10%,_rgba(0,0,0,1)_90%]'>
                                            <div className='flex flex-wrap gap-10 ps-10'>
                                                {skillsData && skillsData.data.map((item, index) => (
                                                    <div key={index} className='grid gap-y-2'>
                                                        <div className='flex justify-center'>
                                                            <img src={`../src/assets/about/skills/${item.img}`} className='size-14 md:size-16 lg:size-[4.5rem] xl:size-20'/>
                                                        </div>

                                                        <p className='text-center text-sm font-semibold'>{item.name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Marquee>
                                    </div>
                                </Tab>
                            </Tabs>
                        </ul>
                    </div>
                </Reveal>
            </div>           
        </section>
    );
}