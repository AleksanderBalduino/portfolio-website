/* React */
import { useState } from 'react';

/* React Router */
import { Link } from 'react-router-dom';

/* Data JSON */
import projectsData from '../../data/projectsData.json';

/* Icons (Lucide React) */
import { Link2, Github } from 'lucide-react';

/* Components */
import { Tabs } from '../../components/Tabs.tsx';
import { Tab } from '../../components/Tab.tsx';
import PageTransition from '../../components/Animations/PageTransition.tsx';
import { Reveal } from '../../components/Animations/Reveal.tsx';

const uniqueCategories = ['Todos Projetos', ...new Set(projectsData.map((item) => item.category))];

export function Projetos() {
    const [category, setCategory] = useState('Todos Projetos');

    const filteredProjects = projectsData.filter((project) => {
        return category === 'Todos Projetos' ? project : project.category === category;
    });

    return (
        <PageTransition>
            <section className='p-8 md:p-16'>
                <div className="container mx-auto">
                    <Reveal>
                        <h2 className='mb-8 md:mb-12 xl:mb-16 text-xl md:text-2xl xl:text-3xl text-center mx-auto font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-dots before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]'>Meus Projetos</h2>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <Tabs tabsStyle={`mx-auto md:grid-cols-${uniqueCategories.length}`}>
                            {uniqueCategories.map((category, index) => {
                                return <Tab key={index} label={category} onClick={()=> setCategory(category)}>
                                    <div className='xl:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                                        {filteredProjects.map((project, index) => {
                                            return (
                                                <div className='w-full' key={index}>
                                                    <div className='rounded-xl border border-gray-200 shadow group overflow-hidden relative'>
                                                        <div className="group flex flex-col space-y-1.5 p-6 relative w-full h-80 items-center justify-center overflow-hidden">
                                                            <div 
                                                                className="absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-110"
                                                                style={{ backgroundImage: `url(assets/work/${project.image})` }}
                                                            ></div>

                                                            <div className="flex gap-x-4 relative z-10">
                                                                <Link to={project.link} target='_blank' className='bg-gray-800 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 hover:bg-gray-500 transition-all duration-300'>
                                                                    <Link2 className='text-white' />
                                                                </Link>

                                                                <Link to={project.github} target='_blank' className='bg-gray-800 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 hover:bg-gray-500 transition-all duration-300'>
                                                                    <Github className='text-white' />
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className='h-full px-8 py-6'>
                                                            <div className='inline-flex items-center rounded-full bg-red-500 px-2 py-1 text-xs text-white uppercase font-semibold mb-2 absolute top-4 left-4'>{project.category}</div>
                                                            <h4 className='text-base md:text-lg xl:text-xl font-bold mb-1'>{project.title}</h4>
                                                            <p className='text-sm text-gray-700 text-justify line-clamp-3'>{project.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Tab>
                            })}
                        </Tabs>
                    </Reveal>
                </div>
            </section>
        </PageTransition>
    );
}