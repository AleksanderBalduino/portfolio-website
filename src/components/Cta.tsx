/* React Router */
import { Link } from 'react-router-dom';

export function Cta() {
    return (
        <section className='py-4 lg:py-12 bg-red-50/50'>
            <div className="container p-8 mx-auto">
                <div className='flex flex-col items-center'>
                    <h2 className='text-2xl font-bold max-w-xl text-center mb-8'>Prepared to turn your ideas into reality? I'm here to help!</h2>

                    <Link to='/contato' className='py-3 px-4 inline-block bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full font-medium hover:shadow-[inset_0_0_1px_2px_rgba(239,68,68,1)] transition duration-300'>
                        Contact me
                    </Link>
                </div>
            </div>
        </section>
    );
}