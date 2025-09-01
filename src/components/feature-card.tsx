import { CalendarPlus } from 'lucide-react';


export function FeatureCard(title?: string, description?: string) {
  return (
        <div>
          <div className="bg-black text-amber-50 p-8 rounded-lg m-4 flex gap-4">
            <CalendarPlus/>
            <div>
              <h3 className="font-bold text-[24px]">Feature</h3>
              <p className="text-[16px">Feature Description</p>
            </div>
          </div>
        </div>
  );
}