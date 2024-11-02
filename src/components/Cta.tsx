/* React Router */
import { Link } from 'react-router-dom';

export function Cta() {
    return (
        <section className='px-12 py-12 md:px-0 lg:py-24 bg-red-50/50'>
            <div className="container mx-auto">
                <div className='flex flex-col items-center'>
                    <h2 className='text-lg md:text-xl xl:text-2xl font-bold max-w-5xl text-center mb-4'>Estou muito feliz que você tenha vindo até aqui para me conhecer melhor 😄</h2>

                    <p className='text-base md:text-lg xl:text-xl font-light max-w-3xl text-center mb-10'>Adoraria me conectar com você e poder te conhecer também, então não deixe de entrar em contato comigo, será um prazer bater um papo!</p>

                    <Link to='/contato' className='py-3 md:py-4 px-8 inline-block bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full font-medium hover:shadow-[inset_0_0_1px_2px_rgba(239,68,68,1)] transition duration-300'>
                        Bater um papo
                    </Link>
                </div>
            </div>
        </section>
    );
}