import React from 'react';
import { MapPin, Search } from 'lucide-react';

export default function SearchForm({ onSearch }: { onSearch?: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 relative z-10 w-full max-w-5xl mx-auto mt-4 md:-mt-12 lg:-mt-24 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-end">
        
        {/* Pick Up Location */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Pick-up Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select required className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#76C043] focus:border-transparent outline-none transition-all text-gray-900 appearance-none">
              <option value="">Select Location</option>
              <option value="klia1">KLIA Terminal 1</option>
              <option value="klia2">KLIA Terminal 2</option>
              <option value="subang">Subang Airport (SZB)</option>
              <option value="klsentral">KL Sentral</option>
              <option value="penang">Penang Airport (PEN)</option>
              <option value="johor">Senai Airport (JHB)</option>
            </select>
          </div>
        </div>

        {/* Drop Off Location */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Drop-off Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select required className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#76C043] focus:border-transparent outline-none transition-all text-gray-900 appearance-none">
              <option value="">Select Location</option>
              <option value="klia1">KLIA Terminal 1</option>
              <option value="klia2">KLIA Terminal 2</option>
              <option value="subang">Subang Airport (SZB)</option>
              <option value="klsentral">KL Sentral</option>
              <option value="penang">Penang Airport (PEN)</option>
              <option value="johor">Senai Airport (JHB)</option>
            </select>
          </div>
        </div>

        {/* Pick Up Date/Time */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Pick-up Date</label>
          <div className="flex gap-2">
            <div className="relative w-full">
              <input 
                type="date" 
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#76C043] focus:border-transparent outline-none transition-all text-gray-900 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Drop Off Date/Time */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Drop-off Date</label>
          <div className="flex gap-2">
            <div className="relative w-full">
              <input 
                type="date" 
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#76C043] focus:border-transparent outline-none transition-all text-gray-900 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-1">
          <button type="submit" className="w-full bg-[#00D659] hover:bg-[#00be4f] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors h-[50px] shadow-md">
            <Search className="w-5 h-5 flex-shrink-0" />
            <span>Search & Book</span>
          </button>
        </div>

      </div>
    </form>
  );
}
