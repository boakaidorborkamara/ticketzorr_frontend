import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  variant?: "default" | "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
}

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  default:
    "bg-white text-black hover:bg-gray-100 hover:text-gray-700 border border-gray-300",
  primary: "bg-primary text-white hover:bg-primary/90 border border-primary",
  secondary:
    "bg-gray-200 text-black hover:bg-gray-300 hover:text-gray-700 border border-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700 border border-red-600",
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-3 py-2 text-sm min-h-9",
  md: "px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base min-h-10 sm:min-h-11",
  lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg min-h-11 sm:min-h-12",
};

function toCssSize(value?: string | number) {
  if (typeof value === "number") return `${value}px`;
  return value || undefined;
}

export const Button: React.FC<Props> = ({
  name,
  variant = "default",
  size = "md",
  width,
  height,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`
                rounded-2xl cursor-pointer transition-all duration-200
                font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center whitespace-nowrap
                ${variantClasses[variant]}
                ${sizeClasses[size]}
                ${className}
            `}
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
