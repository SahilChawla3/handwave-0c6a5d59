
import { useState } from "react";
import { GestureCard } from "@/components/GestureCard";
import { gestureData } from "@/data/gestureData";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredGestures = activeCategory === "all" 
    ? gestureData 
    : gestureData.filter(gesture => gesture.category === activeCategory);

  const categories = ["all", ...Array.from(new Set(gestureData.map(gesture => gesture.category)))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-20 sm:py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gesture Glide
              <span className="block text-indigo-200 mt-2">Master Your Mouse Controls</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Your comprehensive guide to mouse gestures that will transform how you interact with your computer. Increase productivity and reduce strain with intuitive controls.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#gestures" className="px-8 py-3 bg-white text-purple-900 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Gestures
              </a>
              <a href="#categories" className="px-8 py-3 bg-purple-700 bg-opacity-40 border border-purple-400 rounded-lg font-medium hover:bg-opacity-60 transition-all">
                View Categories
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section id="categories" className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all",
                  activeCategory === category
                    ? "bg-purple-700 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gestures Gallery */}
      <section id="gestures" className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
            Gesture Manual
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn all the essential mouse gestures to navigate and control your computer with ease and efficiency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGestures.length > 0 ? (
              filteredGestures.map((gesture) => (
                <GestureCard key={gesture.id} gesture={gesture} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-500">No gestures found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Gesture Glide Manual</h2>
            <p className="mb-6 text-gray-400">
              Master the art of gesture control for an enhanced computing experience.
            </p>
            <p className="text-sm text-gray-500">© 2025 Gesture Glide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
