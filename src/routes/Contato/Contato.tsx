/* React Router */
import { Link } from 'react-router-dom';

/* Components */
import { FormContact } from '../../components/FormContact.tsx';
import PageTransition from '../../components/Animations/PageTransition.tsx';

/* Icons (Lucide React) */
import { Mail, MessageCircle, ArrowRight, Linkedin } from 'lucide-react';

export function Contato() {
    return (
        <PageTransition>
            <section className='p-8 md:p-16'>
                <div className="container mx-auto">
                    <div className='grid xl:grid-cols-2 gap-8 mb-16 xl:mb-24'>
                        <div className='flex flex-col justify-center'>
                            <div className='flex justify-center xl:block'>
                                <h1 className='text-4xl md:text-5xl 2xl:text-6xl text-center font-bold mb-8 xl:text-start'>Vamos trabalhar juntos!</h1>
                            </div>

                            <div className='text-base md:text-lg text-center xl:text-justify max-w-full xl:max-w-md 2xl:max-w-xl'>
                                <p className='mb-5'>Sou apaixonado por tecnologia, comprometido e orientado a resultados, dedico minha vocação em transformar ideias em soluções inovadoras. Estou pronto para iniciar uma nova jornada, para encarar desafios e colaborar em novos projetos.</p>
                                
                                <p className='mb-5'>Estou a procura de novas oportunidades e experiências que possam agregar conhecimento, metodologias e técnicas, tanto no meu âmbito pessoal como também profissional.</p>

                                <p className=''>Envie uma mensagem e vamos construir algo incrível juntos 🚀😄</p>
                            </div>
                        </div>

                        <div className='hidden w-full h-[480px] bg-illustration_contact bg-contain bg-top bg-no-repeat xl:flex'></div>
                    </div>

                    <div className="grid xl:grid-cols-2 mb-8 md:mb-16">
                        <div className="grid md:grid-cols-[400px] gap-y-6 justify-center mb-24 xl:text-lg xl:justify-start xl:mb-0">
                            <div className="flex flex-col items-center border border-gray-700 rounded-xl p-6 transition-all duration-300">
                                <div className='mb-2 flex justify-center items-center'>
                                    <Mail size={36} className='text-red-500' />
                                </div>

                                <h3 className="font-medium text-lg">E-mail</h3>

                                <span className="mb-3">aleksbalduino@gmail.com</span>
                                
                                <Link to={'mailto:aleksbalduino@gmail.com'} target="_blank" className='inline-flex items-center justify-center gap-x-2 group font-medium text-red-500'>
                                    <span>Enviar mensagem</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div className="flex flex-col items-center border border-gray-700 rounded-xl p-6 transition-all duration-300">
                                <div className='mb-2 flex justify-center items-center'>
                                    <MessageCircle size={36} className='text-red-500 mb-2' />
                                </div>

                                <h3 className="font-medium text-lg">Whatsapp</h3>

                                <span className="mb-3">+55 (16) 93618-1335</span>

                                <Link to={'https://api.whatsapp.com/send?phone=16936181335&text=Olá Aleksander,%20gostaria%20de%20bater%20um%20papo%20contigo!'} target="_blank" className='inline-flex items-center justify-center gap-x-2 group font-medium text-red-500'>
                                    <span>Enviar mensagem</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div className="flex flex-col items-center border border-gray-700 rounded-xl p-6 transition-all duration-300">
                                <div className='mb-2 flex justify-center items-center'>
                                    <Linkedin size={36} className='text-red-500 mb-2' />
                                </div>

                                <h3 className="font-medium text-lg">LinkedIn</h3>

                                <span className="mb-3">Conecte-se comigo e vamos conversar</span>

                                <Link to={'https://www.linkedin.com/in/aleksander-balduino/'} target="_blank" className='inline-flex items-center justify-center gap-x-2 group font-medium text-red-500'>
                                    <span>Enviar mensagem</span>
                                    <ArrowRight size={18} /*className='transform transition-transform duration-300 group-hover:translate-x-1'*/ />
                                </Link>
                            </div>
                        </div>

                        <FormContact />
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}