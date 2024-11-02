/* Import Components */
import { Socials } from "../Socials";

export function Footer() {
    return (
        <footer className="mb-[76px] md:mb-[80px] xl:mb-0 bg-slate-900 py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center px-8 md:px-0">
                    <Socials style={'text-white mb-4'} />

                    <div className="text-slate-400 text-sm md:text-base text-justify">
                        <p>Copyright &copy; 2024 Aleksander Balduino. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}