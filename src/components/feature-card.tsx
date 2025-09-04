
import { ReactNode } from 'react';


interface Props {
    title?: string,
    description?: string,
    icon?:ReactNode
}


export function FeatureCard ({title,description,icon}:Props) {
  return (
        <div>
          <div className="bg-black text-amber-50 p-8 rounded-lg m-4 flex items-center gap-4">
            <span className="text-primary">{icon}</span>
            <div>
              <h3 className="font-bold text-[24px]">{title}</h3>
              <p className="text-[16px]">{description}</p>
            </div>
          </div>
        </div>
  );
}