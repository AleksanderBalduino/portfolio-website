/* Import Components */
import { DevImgAbout } from './DevImgAbout.tsx';
import { Tabs } from './Tabs.tsx';
import { Tab } from './Tab.tsx';
import Marquee from 'react-fast-marquee';
import { Reveal } from './Animations/Reveal.tsx';

/* Imagem */
import profileImg from '../../src/assets/about/profile.jpg';

/* Icons (Lucide React) */
import { User, PhoneCall, Mail, Calendar, GraduationCap, Home, Briefcase } from 'lucide-react';

const iconComponents: Record<string, React.ComponentType> = {
    User, PhoneCall, Mail, Calendar, GraduationCap, Home
};

/* Data JSON */
import infoData from '../data/infoData.json';
import qualificationData from '../data/qualificationData.json';
import skillData from '../data/skillData.json';

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
        <section id='aboutme' className='py-4 lg:py-12'>
            <div className="container p-8 mx-auto">
                <Reveal>
                    <h2 className='mb-8 xl:mb-16 text-3xl text-center mx-auto font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-dots before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]'>About me</h2>
                </Reveal>

                <Reveal delay={0.5}>
                    <div className='grid grid-cols-1 xl:grid-cols-2'>
                        <div className='hidden xl:flex xl:justify-center flex-[0.5_0.5_0%] relative'>
                            <DevImgAbout img={profileImg} />
                        </div>

                        <ul className='flex-1'>
                            <Tabs tabsStyle='xl:grid-cols-3 xl:max-w-md'>
                                <Tab label='Personal Info'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='text-2xl font-bold mb-4'>Unmatched Service Quality for Over 10 Years</h3>
                                        <p className='text-lg max-w-xl mx-auto font-light mb-8 xl:mx-0'>I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>

                                        <div className='grid gap-4 mb-12 xl:grid-cols-2'>
                                            {infoData.map((data, index) => {
                                                const IconComponent = iconComponents[data.icon];

                                                return (
                                                    <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                        <div className='text-red-500'><IconComponent /></div>
                                                        <div className='text-sm xl:text-base'>{data.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-red-500'>Language Skill</div>
                                            <div className='border-b'></div>
                                            <div>Portuguese, English</div>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab label='Qualifications'>
                                    <div>
                                        <h3 className='text-2xl font-bold text-center mb-8 xl:text-left'>My Awesome Journey</h3>

                                        <div className='grid md:grid-cols-2 gap-y-8 gap-x-4'>
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-xl text-red-500'>
                                                    <Briefcase />

                                                    {experienceData && (
                                                        <h4 className='capitalize font-medium'>{experienceData.title}</h4>
                                                    )}
                                                </div>

                                                <div className='flex flex-col gap-y-8'>
                                                    {experienceData && (
                                                        <>
                                                            {experienceData.data.map((item, index) => {
                                                                const {company, role, years} = item;

                                                                return (
                                                                    <div className='flex gap-x-8 group' key={index}>
                                                                        <div className='h-[100px] w-[1px] bg-red-500 relative ml-2'>
                                                                            <div className='w-[11px] h-[11px] rounded-full bg-red-500 absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500'></div>
                                                                        </div>

                                                                        <div>
                                                                            <div className='font-semibold text-base leading-tight text-justify mb-2'>{company}</div>
                                                                            <div className='text-sm leading-none mb-4'>{role}</div>
                                                                            <div className='text-xs font-medium inline-block p-1 rounded-sm bg-red-100 '>{years}</div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-xl text-red-500'>
                                                    <GraduationCap size={28} />

                                                    {educationData && (
                                                        <h4 className='capitalize font-medium'>{educationData.title}</h4>
                                                    )}
                                                </div>

                                                <div className='flex flex-col gap-y-8'>
                                                    {educationData && (
                                                        <>
                                                            {educationData.data.map((item, index) => {
                                                                const {university, qualification, years} = item;

                                                                return (
                                                                    <div className='flex gap-x-8 group' key={index}>
                                                                        <div className='h-[100px] w-[1px] bg-red-500 relative ml-2'>
                                                                            <div className='w-[11px] h-[11px] rounded-full bg-red-500 absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500'></div>
                                                                        </div>

                                                                        <div>
                                                                            <div className='font-semibold text-base leading-tight text-justify mb-2'>{university}</div>
                                                                            <div className='text-sm leading-none mb-4'>{qualification}</div>
                                                                            <div className='text-xs font-medium inline-block p-1 rounded-sm bg-red-100'>{years}</div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab label='Skills'>
                                    <div className='text-center xl:text-left mt-8'>
                                        <div>
                                            <Marquee autoFill pauseOnClick speed={75} className='select-none mb-6 xl:mb-8 gradient-mask-r-[rgba(0,0,0,0),_rgba(0,0,0,1)_10%,_rgba(0,0,0,1)_90%]'>
                                                <div className='flex flex-wrap gap-10 ps-10'>
                                                    {languagesData && languagesData.data.map((item, index) => (
                                                        <div key={index} className='grid gap-y-2'>
                                                            <div className='flex justify-center'>
                                                                <img src={`../src/assets/about/skills/${item.img}`} className='size-20'/>
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
                                                                <img src={`../src/assets/about/skills/${item.img}`} className='size-20'/>
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
                                                                <img src={`../src/assets/about/skills/${item.img}`} className='size-20'/>
                                                            </div>

                                                            <p className='text-center text-sm font-semibold'>{item.name}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Marquee>
                                        </div>
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