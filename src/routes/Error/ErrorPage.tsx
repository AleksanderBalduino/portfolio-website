/* React Router */
import { Link } from 'react-router-dom';

/* Components */
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import PageTransition from '../../components/Animations/PageTransition.tsx';
import { Reveal } from '../../components/Animations/Reveal.tsx';

export function ErrorPage() {
    return (
        <PageTransition>
            <Header />

            <Reveal>
                <section className='h-screen flex flex-col justify-center'>
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center">
                            <h1 className='text-7xl md:text-8xl xl:text-9xl font-bold mb-10'>❌ 404 ❌</h1>

                            <h2 className='text-lg md:text-xl xl:text-2xl font-bold text-center mb-4'>Oops! Esta página não pode ser encontrada!</h2>
                            <p className='text-base md:text-lg xl:text-xl font-light text-center mb-10'>A página que você tentou acessar está indisponível ou não existe.</p>

                            <Link to='/portfolio-website/' className='py-3 md:py-4 px-8 inline-block bg-red-500 hover:bg-white text-white hover:text-red-500 rounded-full font-medium hover:shadow-[inset_0_0_1px_2px_rgba(239,68,68,1)] transition duration-300'>
                                Voltar para o site
                            </Link>
                        </div>
                    </div>
                </section>
            </Reveal>

            <Footer />
        </PageTransition>
    );
}