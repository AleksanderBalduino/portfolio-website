export interface TabProps {
    label: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export function Tab({ children, onClick }: TabProps) {
    return (
        <div onClick={onClick}>{children}</div>
    );
}