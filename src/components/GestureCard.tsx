
import { cn } from "@/lib/utils";
import { GestureType } from "@/data/gestureData";

interface GestureCardProps {
  gesture: GestureType;
}

export function GestureCard({ gesture }: GestureCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img 
            src={gesture.imageUrl} 
            alt={gesture.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 m-3 rounded-full">
          {gesture.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{gesture.name}</h3>
        <p className="text-gray-600 mb-4">{gesture.description}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">How to perform:</h4>
          <p className="text-gray-600 text-sm">{gesture.howTo}</p>
        </div>
        
        {gesture.tips && (
          <div className="mt-4 bg-purple-50 p-3 rounded-lg">
            <h4 className="text-sm font-semibold text-purple-800 mb-1">Pro Tip:</h4>
            <p className="text-purple-700 text-sm">{gesture.tips}</p>
          </div>
        )}
      </div>
    </div>
  );
}
