import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    variant?: 'default' | 'primary' | 'secondary' | 'danger';
    width?: string | number;
    height?: string | number;
}

const variantClasses: Record<NonNullable<Props['variant']>, string> = {
    default: 'bg-white text-black hover:text-gray-600',
    primary: 'bg-primary text-white hover:text-slate-600',
    secondary: 'bg-gray-200 text-black hover:text-gray-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
};

function toCssSize(value?: string | number) {
    if (typeof value === "number") return `${value}px`;
    return value || undefined;
}

export const Button: React.FC<Props> = ({
    name,
    variant = 'default',
    width,
    height,
    className = '',
    ...rest
}) => {
    return (
        <button
            className={`p-3 rounded-2xl cursor-pointer transition-colors duration-200 ${variantClasses[variant]} ${className}`}
            style={{
                width: toCssSize(width),
                height: toCssSize(height),
            }}
            {...rest}
        >
            {name}
        </button>
    );
};
