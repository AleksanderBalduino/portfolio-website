interface CardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    description: string
}

export function Card({ icon, title, description }: CardProps) {
    const IconComponent = icon;

    return (
        <div className="rounded-3xl w-full max-w-[424px] h-[300px] flex flex-col justify-center items-center relative shadow-[-10px_-10px_15px_rgba(255,255,255,0.45),_10px_10px_15px_rgba(239,68,68,0.25)]">
            <div className="flex flex-col space-y-1.5 p-6 text-red-500 absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-white flex justify-center items-center">
                    <IconComponent className="size-12" strokeWidth={1} />
                </div>
            </div>

            <div className="p-6 pt-0 text-center">
                <div className="text-lg font-bold leading-none tracking-tight mb-4">{title}</div>
                <div className="text-sm">{description}</div>
            </div>
        </div>
    );
}