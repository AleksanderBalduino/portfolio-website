/* Import Components */
import { Socials } from "../Socials";

export function Footer() {
    return (
        <footer className="mb-[85px] xl:mb-0 bg-slate-900 py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    <Socials style={'text-white mb-4'} />

                    <div className="text-slate-400 text-sm">
                        Copyright &copy; Aleksander Balduino. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
}