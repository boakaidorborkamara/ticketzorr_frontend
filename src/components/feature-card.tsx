import { CalendarPlus } from 'lucide-react';


interface Props {
    title?: string,
    description?: string
}


export function FeatureCard ({title,description}:Props) {
  return (
        <div>
          <div className="bg-black text-amber-50 p-8 rounded-lg m-4 flex gap-4">
            <CalendarPlus/>
            <div>
              <h3 className="font-bold text-[24px]">{title}</h3>
              <p className="text-[16px]">{description}</p>
            </div>
          </div>
        </div>
  );
}