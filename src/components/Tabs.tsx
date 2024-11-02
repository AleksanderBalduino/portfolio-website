/* React */
import { useState } from "react";

/* Import Components */
import { TabProps } from "./Tab.tsx";

interface TabsProps {
    tabsStyle: string;
    children: React.ReactElement<TabProps>[];
}

export function Tabs({ tabsStyle, children }: TabsProps) {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string, onClick?: () => void) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
        if(onClick) {
            onClick();
        }
    };

    return (
        <li className="mx-auto list-none grid gap-8" key="tab">
            <div className={`grid gap-3 items-center justify-center rounded-full p-1 w-full md:gap-1 md:bg-white md:shadow-[0_0_25px_-10px_rgba(0,0,0,0.3)] ${tabsStyle}`}> {/*xl:border-[1px] xl:border-gray-300*/}
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${activeTab === child.props.label ? 'bg-red-500 text-white shadow-sm' : 'hover:bg-red-100 hover:text-white'} md:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-full p-3 md:p-4 px-16 md:px-0 lg:p-4 text-sm mdtext-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50`}
                        onClick={e => handleClick(e, child.props.label, child.props.onClick)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>

            <div>
                {children.map(child => {
                if (child.props.label === activeTab) {
                    return <div key={child.props.label}>{child.props.children}</div>;
                }
                    return null;
                })}
            </div>
        </li>
    );
}