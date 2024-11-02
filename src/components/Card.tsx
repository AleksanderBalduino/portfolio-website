interface CardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    description: string
}

export function Card({ icon, title, description }: CardProps) {
    const IconComponent = icon;

    return (
        <div className="rounded-3xl p-16 flex flex-col justify-center items-center relative shadow-[-10px_-10px_15px_rgba(255,255,255,0.45),_10px_10px_15px_rgba(239,68,68,0.25)]" >
            <div className="flex flex-col space-y-1.5 p-6 text-red-500 absolute -top-[45px] md:-top-[50px] xl:-top-[55px]">
                <div className="flex justify-center items-center">
                    <IconComponent className="size-10 md:size-12 xl:size-14 rounded-xl" strokeWidth={1} />
                </div>
            </div>

            <div className="md:py-8 xl:py-6 2xl:py-12 text-center">
                <div className="text-base md:text-lg xl:text-xl font-bold mb-4">{title}</div>
                <div className="text-sm xl:text-base">{description}</div>
            </div>
        </div>
    );
}