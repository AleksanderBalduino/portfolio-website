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
        <li className="mx-auto list-none" key="tab">
            <div className={`grid gap-3 xl:gap-1 items-center justify-center rounded-full p-1 w-full xl:bg-white xl:border-[1px] xl:border-gray-300 ${tabsStyle}`}>
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${activeTab === child.props.label ? 'bg-red-500 text-white shadow-sm' : 'hover:bg-red-100 hover:text-white'} w-[162px] xl:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-full p-3 text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 h-[50px]`}
                        onClick={e => handleClick(e, child.props.label, child.props.onClick)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>

            <div className="py-4">
                {children.map(child => {
                if (child.props.label === activeTab) {
                    return <div key={child.props.label} className="mt-4">{child.props.children}</div>;
                }
                    return null;
                })}
            </div>
        </li>
    );
}