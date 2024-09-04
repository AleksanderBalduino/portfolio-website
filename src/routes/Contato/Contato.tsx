/* React Router */
import { Link } from 'react-router-dom';

/* Components */
import { FormContact } from '../../components/FormContact.tsx';
import PageTransition from '../../components/Animations/PageTransition.tsx';

/* Icons (Lucide React) */
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export function Contato() {
    return (
        <PageTransition>
            <div className="container p-8 mx-auto">
                <div className='grid xl:grid-cols-2 mb-24 xl:h-[480px]'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-6xl text-center font-bold mb-8 xl:text-start xl:max-w-md'>Let's Work Together.</h1>

                        <p className='text-center xl:text-justify xl:max-w-[400px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='hidden xl:flex w-full bg-illustration_contact bg-contain bg-top bg-no-repeat'></div>
                </div>

                <div className="grid xl:grid-cols-2 mb-12 xl:mb-24">
                    <div className="grid grid-cols-[400px] gap-y-6 justify-center mb-24 xl:text-lg xl:justify-start xl:mb-0">
                        <div className="flex flex-col items-center border border-gray-700 rounded-xl p-6 transition-all duration-300">
                            <div className='mb-2 flex justify-center items-center'>
                                <Mail size={36} className='text-red-500' />
                            </div>

                            <h3 className="font-medium text-lg">E-mail</h3>

                            <span className="mb-3">aleksbalduino@gmail.com</span>
                            
                            <Link to={'mailto:aleksbalduino@gmail.com'} target="_blank" className='inline-flex items-center justify-center gap-x-2 group font-medium text-red-500'>
                                Write me
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="flex flex-col items-center border border-gray-700 rounded-xl p-6 transition-all duration-300">
                            <div className='mb-2 flex justify-center items-center'>
                                <MessageCircle size={36} className='text-red-500 mb-2' />
                            </div>

                            <h3 className="font-medium text-lg">Whatsapp</h3>

                            <span className="mb-3">+55 (16) 93618-1335</span>

                            <Link to={'https://api.whatsapp.com/send?phone=16936181335&text=Hello,%20how%20u%20doing?'} target="_blank" className='inline-flex items-center justify-center gap-x-2 group font-medium text-red-500'>
                                Write me
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="flex flex-col items-center border border-gray-700 rounded-xl p-6 transition-all duration-300">
                            <div className='mb-2 flex justify-center items-center'>
                                <MessageCircle size={36} className='text-red-500 mb-2' />
                            </div>

                            <h3 className="font-medium text-lg">Lorem Ipsum</h3>

                            <span className="mb-3">Lorem.Ipsum</span>

                            <Link to={''} target="_blank" className='inline-flex items-center justify-center gap-x-2 group font-medium text-red-500'>
                                Write me
                                <ArrowRight size={18} /*className='transform transition-transform duration-300 group-hover:translate-x-1'*/ />
                            </Link>
                        </div>
                    </div>

                    <FormContact />
                </div>
            </div>
        </PageTransition>
    );
}