import { ReactNode } from "react";

interface Props {
  title?: string;
  description?: string;
  icon?: ReactNode;
}

export function FeatureCard({ title, description, icon }: Props) {
  return (
    <div className="w-full">
      <div className="bg-black text-amber-50 p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 h-full transition-transform duration-200 hover:scale-105">
        <span className="text-primary flex-shrink-0 text-xl sm:text-2xl">
          {icon}
        </span>
        <div className="flex flex-col space-y-1 sm:space-y-2">
          <h3 className="font-bold text-responsive-xl leading-tight">
            {title}
          </h3>
          <p className="text-responsive-base leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
