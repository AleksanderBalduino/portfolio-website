interface CardProps {
    icon: JSX.Element,
    title: string,
    description: string,
    years: string
}

export function QualificationItem({ icon, title, description, years }: CardProps) {
    return (
        <div className="relative pl-8 pb-6 last:pb-0 before:content-[''] before:w-[1px] before:h-full before:bg-red-500 before:absolute before:left-1 before:top-0">
            <i className="absolute -left-[0.4375rem] top-0 bg-white p-[0.4375rem_0]">{icon}</i>
            <span className="text-gray-500 text-xs lg:text-sm">{years}</span>
            <h3 className="font-bold text-sm lg:text-base my-1">{title}</h3>
            <p className="text-xs lg:text-sm">{description}</p>
        </div>
    );
}