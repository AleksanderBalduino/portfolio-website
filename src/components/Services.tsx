/* Import Components */
import { Card } from './Card';

/* Icons (Lucide React) */
import { SquareGanttChart, Blocks, Gem } from 'lucide-react';

const iconComponents: Record<string, React.ComponentType> = { SquareGanttChart, Blocks, Gem };

/* Data JSON */
import servicesData from '../data/servicesData.json';

export function Services() {
    return (
        <section className='py-4 lg:py-12'>
            <div className="container p-8 mx-auto">
                <h2 className='mb-12 xl:mb-16 text-3xl text-center mx-auto font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-dots before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]'>My Services</h2>

                <div className='grid xl:grid-cols-3 justify-center gap-y-12 lg:gap-x-10 xl:gap-y-24'>
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