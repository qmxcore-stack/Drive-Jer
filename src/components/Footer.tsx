import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Info Centered */}
        <div className="flex flex-col items-center mb-12 text-center">
          <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-21-2026-10_20_26-PM.png" alt="DriveJer Logo" className="h-16 w-auto object-contain mb-8" />
          
          <h4 className="text-[#65a30d] font-bold text-lg mb-6 uppercase tracking-wider">CONTACT INFO</h4>
          <ul className="space-y-4 max-w-md mx-auto text-left sm:text-center">
            <li className="flex items-start justify-center gap-3">
              <MapPin className="w-5 h-5 text-[#65a30d] mt-1 flex-shrink-0" />
              <div>
                <span className="text-gray-800 font-semibold block">Based in Cheras, Selangor</span>
                <span className="text-gray-500 text-sm font-medium">Pickup & Delivery Available</span>
              </div>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-[#65a30d] flex-shrink-0" />
              <a href="tel:01139025504" className="text-gray-700 font-medium hover:text-[#65a30d] transition-colors">
                011-39025504
              </a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-[#65a30d] flex-shrink-0" />
              <a href="mailto:drivejerhq@gmail.com" className="text-gray-700 font-medium hover:text-[#65a30d] transition-colors">
                drivejerhq@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2026 DriveJer. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
