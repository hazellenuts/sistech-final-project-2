import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    classname : string;
};

function Button({ children, classname }: ButtonProps) {
    return (
        <button className={`bg-ocean-500 text-white hover:bg-ocean-300 ${classname}`}>
        {children}
        </button>
    );
}

export { Button };