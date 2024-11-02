/* Import Components */
import { Card } from './Card';

/* Icons (Lucide React) */
import { Paintbrush, Laptop, TabletSmartphone } from 'lucide-react';

const iconComponents: Record<string, React.ComponentType> = { Paintbrush , Laptop, TabletSmartphone };

/* Data JSON */
import servicesData from '../data/servicesData.json';

export function Services() {
    return (
        <section className='p-8 md:p-16'>
            <div className="container mx-auto">
                <h2 className='mb-16 md:mb-20 xl:mb-24 text-xl md:text-2xl xl:text-3xl text-center mx-auto font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-dots before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]'>Meus Serviços</h2>

                <div className='grid xl:grid-cols-3 justify-center gap-20 md:gap-24 xl:gap-12 md:px-24 lg:px-56 xl:px-0'>
                    {servicesData.map((item, index) => {
                        const IconComponent = iconComponents[item.icon];

                        return (
                            <Card key={index} icon={IconComponent} title={item.title} description={item.description} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}