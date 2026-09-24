import { Menu, X, Phone, Home, Car, Star, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'vehicles' | 'testimonials' | 'gallery'>('home');

  const scrollTo = (id: 'home' | 'vehicles' | 'testimonials' | 'gallery') => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'vehicles' as const, label: 'Vehicles', icon: Car },
    { id: 'testimonials' as const, label: 'Reviews', icon: Star },
    { id: 'gallery' as const, label: 'Gallery', icon: ImageIcon },
  ];

  return (
    <header className="fixed w-full top-4 z-50 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-2xl md:rounded-3xl">
        <div className="flex justify-between items-center h-20 md:h-[86px] px-6 sm:px-8">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <img 
              src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-21-2026-10_20_26-PM.png" 
              alt="DriveJer Logo" 
              className="h-14 md:h-[58px] w-auto object-contain" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('home')} className="text-gray-700 hover:text-[#76C043] font-semibold transition-colors">Home</button>
            <button onClick={() => scrollTo('vehicles')} className="text-gray-700 hover:text-[#76C043] font-semibold transition-colors">Vehicles</button>
            <button onClick={() => scrollTo('testimonials')} className="text-gray-700 hover:text-[#76C043] font-semibold transition-colors">Reviews</button>
            <button onClick={() => scrollTo('gallery')} className="text-gray-700 hover:text-[#76C043] font-semibold transition-colors">Gallery</button>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-2 text-gray-900">
              <Phone className="w-4 h-4 text-[#76C043]" />
              <span className="font-semibold text-sm lg:text-base">011-39025504</span>
            </div>
            <a 
              href="https://wa.me/601139025504" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#1ebd57] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.555 4.192 1.613 6.009L.432 24l6.113-1.603c1.734.981 3.7 1.498 5.748 1.498 6.643 0 12.029-5.386 12.029-12.031C24.322 5.385 18.937 0 12.031 0zm0 21.84c-1.802 0-3.56-.484-5.111-1.405l-.366-.217-3.793.995 1.011-3.7-.238-.379C2.552 15.342 1.996 13.568 1.996 11.758c0-5.54 4.508-10.048 10.048-10.048 5.54 0 10.049 4.508 10.049 10.048 0 5.54-4.509 10.048-10.049 10.048zm5.518-7.53c-.302-.151-1.792-.885-2.069-.986-.277-.101-.479-.151-.68.151-.202.302-.782.986-.958 1.187-.176.201-.353.226-.655.075-1.956-.97-3.327-2.73-3.83-3.578-.101-.176.096-.14.394-.734.101-.201.05-.378-.025-.529-.076-.151-.68-1.638-.933-2.242-.246-.589-.496-.51-.68-.519-.176-.008-.378-.011-.58-.011-.202 0-.529.076-.806.378-.277.302-1.058 1.033-1.058 2.518s1.083 2.919 1.234 3.121c.151.202 2.128 3.249 5.155 4.555.72.311 1.282.497 1.722.637.723.23 1.381.197 1.9.12.583-.086 1.792-.733 2.044-1.44.252-.707.252-1.313.176-1.44-.076-.126-.277-.201-.58-.352z"/>
              </svg>
              WhatsApp
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 hover:text-[#76C043] p-2 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Open menu modal"
              title="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-900 hover:text-[#76C043] focus:outline-none p-2 rounded-xl active:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Glassmorphic Navigation Modal matching design */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Modal Card */}
          <div 
            className="w-full max-w-[360px] sm:max-w-[380px] bg-neutral-900/70 backdrop-blur-2xl border border-white/20 rounded-[38px] p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button at top-right */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/15 flex items-center justify-center text-white/90 hover:text-white transition-all shadow-sm"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Brand Logo Centered */}
            <div className="flex flex-col items-center justify-center mt-3 mb-7">
              <img 
                src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-12-2026-12_10_53-AM.png" 
                alt="DriveJer - MPV Rental Specialist" 
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]" 
              />
            </div>

            {/* Menu List */}
            <div className="flex flex-col space-y-2.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full rounded-full px-5 py-3.5 flex items-center justify-between transition-all group active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#152e15]/85 border border-[#22c55e] text-white shadow-[0_0_15px_rgba(34,197,94,0.25)]'
                        : 'bg-transparent hover:bg-white/10 border border-transparent text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-5 h-5 text-white flex-shrink-0" />
                      <span className={`text-[15px] sm:text-base ${isActive ? 'font-semibold' : 'font-medium'} text-white`}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-white/15 my-4" />

            {/* Chat on WhatsApp CTA Button */}
            <a
              href="https://wa.me/601139025504"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#29d668] hover:to-[#17b050] text-white rounded-full px-5 py-3.5 sm:py-4 flex items-center justify-between shadow-[0_8px_25px_rgba(34,197,94,0.45)] transition-all font-semibold active:scale-[0.98] group"
            >
              <div className="flex items-center gap-3.5">
                {/* WhatsApp Icon */}
                <svg className="w-6 h-6 fill-white flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.555 4.192 1.613 6.009L.432 24l6.113-1.603c1.734.981 3.7 1.498 5.748 1.498 6.643 0 12.029-5.386 12.029-12.031C24.322 5.385 18.937 0 12.031 0zm0 21.84c-1.802 0-3.56-.484-5.111-1.405l-.366-.217-3.793.995 1.011-3.7-.238-.379C2.552 15.342 1.996 13.568 1.996 11.758c0-5.54 4.508-10.048 10.048-10.048 5.54 0 10.049 4.508 10.049 10.048 0 5.54-4.509 10.048-10.049 10.048zm5.518-7.53c-.302-.151-1.792-.885-2.069-.986-.277-.101-.479-.151-.68.151-.202.302-.782.986-.958 1.187-.176.201-.353.226-.655.075-1.956-.97-3.327-2.73-3.83-3.578-.101-.176.096-.14.394-.734.101-.201.05-.378-.025-.529-.076-.151-.68-1.638-.933-2.242-.246-.589-.496-.51-.68-.519-.176-.008-.378-.011-.58-.011-.202 0-.529.076-.806.378-.277.302-1.058 1.033-1.058 2.518s1.083 2.919 1.234 3.121c.151.202 2.128 3.249 5.155 4.555.72.311 1.282.497 1.722.637.723.23 1.381.197 1.9.12.583-.086 1.792-.733 2.044-1.44.252-.707.252-1.313.176-1.44-.076-.126-.277-.201-.58-.352z"/>
                </svg>
                <span className="text-[15px] sm:text-base">Chat on WhatsApp</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
