import { useState } from 'react';
import { featuredCars } from '../data/cars';
import { Users, Briefcase, Settings2, Fuel, Star, Car } from 'lucide-react';

const filters = [
  { id: 'MPV', label: 'MPV', icon: Users },
  { id: 'Others Car', label: 'Others Car', icon: Car },
];

export default function FeaturedCars({ onRent }: { onRent?: () => void } = {}) {
  const [filter, setFilter] = useState<'MPV' | 'Others Car'>('MPV');
  const [showAll, setShowAll] = useState(false);

  const filteredCars = featuredCars.filter((c) => c.type === filter);
  const displayedCars = showAll ? filteredCars : filteredCars.slice(0, 6);

  // Reset showAll when filter changes
  const handleFilterChange = (newFilter: 'MPV' | 'Others Car') => {
    setFilter(newFilter);
    setShowAll(false);
  };

  return (
    <section id="vehicles" className="relative pt-6 sm:pt-8 pb-16 bg-[#fafbfa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="mb-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-[2px] bg-[#76C043]"></div>
            <h2 className="text-[#65a30d] font-bold tracking-widest uppercase text-sm">OUR FLEET</h2>
            <div className="w-12 h-[2px] bg-[#76C043]"></div>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-gray-900 leading-[1.05] tracking-tight">
            Explore Our <span className="text-[#76C043]">Top Deals</span>
          </h3>
          <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
            Quality vehicles for every journey.<br />
            Drive better, travel further.
          </p>
        </div>

        {/* Filters: strictly 2 categories: MPV & Others Car */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {filters.map((f) => {
            const Icon = f.icon;
            const isActive = filter === f.id;
            return (
              <button 
                key={f.id}
                onClick={() => handleFilterChange(f.id as 'MPV' | 'Others Car')}
                className={`flex items-center gap-2.5 px-7 py-3 rounded-full font-bold text-base transition-all border ${
                  isActive 
                    ? 'bg-[#76C043] border-[#76C043] text-white shadow-md shadow-[#76C043]/20 scale-105' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-[#76C043] hover:text-[#65a30d] shadow-sm'
                }`}
              >
                <Icon className="w-5 h-5" /> {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCars.map((car) => (
              <div 
                key={car.id}
                className="bg-white rounded-[28px] overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#76C043]/60 transition-all group flex flex-col p-4 sm:p-5"
              >
                {/* Image Area */}
                <div className="relative h-[220px] w-full rounded-2xl overflow-hidden bg-gray-100">
                  {/* Badges */}
                  <div className="absolute top-3 left-3 bg-[#B8F635] text-black px-3.5 py-1 rounded-full font-bold flex items-center gap-1.5 z-20 text-xs shadow-sm">
                    <Star className="w-3 h-3 fill-black text-black" /> POPULAR
                  </div>
                  
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm text-white px-3.5 py-1 rounded-full font-bold z-20 text-xs">
                    {car.type}
                  </div>
                  
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                </div>
                
                {/* Content Area */}
                <div className="pt-4 flex-1 flex flex-col">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 leading-tight min-h-[56px]">{car.name}</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-5 flex-1">
                    <div className="flex items-center gap-3">
                      <Settings2 className="w-6 h-6 text-[#76C043] flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-bold text-sm leading-tight">{car.transmission}</p>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">TRANS</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-[#76C043] flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-bold text-sm leading-tight">{car.seats} Seats</p>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">SEATING</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-[#76C043] flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-bold text-sm leading-tight">{car.luggage} Luggage</p>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">LUGGAGE</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Fuel className="w-6 h-6 text-[#76C043] flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-bold text-sm leading-tight">{car.fuel}</p>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">FUEL</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dividing line */}
                  <div className="h-[1px] w-full bg-gray-100 my-4"></div>
                  
                  <a 
                    href={`https://wa.me/601139025504?text=${encodeURIComponent(`Hi, saya berminat nak sewa ${car.name}`)}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center bg-[#00D659] hover:bg-[#00be4f] text-white py-3.5 rounded-xl font-bold text-base transition-colors shadow-sm"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 bg-white rounded-3xl border border-gray-200">
            <p>No vehicles found for this category.</p>
          </div>
        )}

        {/* View All Button */}
        {filteredCars.length > 6 && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center bg-white border-2 border-gray-200 hover:border-[#76C043] hover:text-[#65a30d] text-gray-800 px-8 py-3.5 rounded-full font-bold transition-all shadow-sm"
            >
              {showAll ? `Show Less (${filteredCars.length} total)` : `View All ${filter} (${filteredCars.length} Vehicles)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
