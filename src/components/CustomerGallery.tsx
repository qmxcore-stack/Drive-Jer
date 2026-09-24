import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const customerImages = [
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.10.37.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.10.43.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.10.29.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.09.52.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.10.20.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.09.59.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.10.34.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.10.07-1.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/photo_2026-09-09-19.10.52-1.jpeg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2026-09-24-21.43.41.jpg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2026-09-24-21.43.28.jpg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2026-09-24-21.43.23.jpg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2026-09-24-21.43.19.jpg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2026-09-24-21.43.15.jpg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2026-09-24-21.43.11.jpg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2026-09-24-21.43.32.jpg",
  "https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2026-09-24-21.43.37.jpg"
];

export default function CustomerGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + customerImages.length) % customerImages.length);
  };

  const nextImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % customerImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="w-12 h-[2px] bg-[#76C043]"></div>
            <h2 className="text-[#65a30d] font-bold tracking-widest uppercase text-sm">
              OUR GALLERY
            </h2>
            <div className="w-12 h-[2px] bg-[#76C043]"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Photos From <span className="text-[#76C043]">Our Customers</span>
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Thousands of customers have trusted our car rental services for a comfortable and safe journey.
          </p>
        </div>
        
        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {customerImages.map((src, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedIdx(index)}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 hover:border-[#76C043]/60 transition-all group relative bg-gray-50 aspect-square cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="p-2.5 rounded-full bg-white/90 text-gray-900 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-5 h-5 text-[#76C043]" />
                </div>
              </div>
              <img 
                src={src} 
                alt={`Pelanggan DriveJer ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={() => setSelectedIdx(null)}
        >
          <button 
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div 
            className="relative max-w-4xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={customerImages[selectedIdx]} 
              alt={`Gallery preview ${selectedIdx + 1}`} 
              className="max-h-[85vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              {selectedIdx + 1} / {customerImages.length}
            </div>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
}
