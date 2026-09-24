import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aiman Hakim",
    role: "Mont Kiara, Kuala Lumpur",
    text: "Great service! The car was clean, well-maintained, and in perfect condition. Highly recommended for anyone visiting.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jason Lim",
    role: "Shah Alam, Selangor",
    text: "Very smooth process from booking to returning. Will definitely use DriveJer again on my next trip.",
    rating: 5,
  },
  {
    id: 3,
    name: "Nur Aisyah",
    role: "Petaling Jaya, Selangor",
    text: "Affordable rates and friendly customer support. The best car rental experience I've had so far!",
    rating: 5,
  },
  {
    id: 4,
    name: "Farhan Rosli",
    role: "Cheras, Selangor",
    text: "Servis hantar dan ambil terus ke rumah di Cheras memang sangat menyenangkan. Kereta bersih, selesa untuk family trip balik kampung.",
    rating: 5,
  },
  {
    id: 5,
    name: "Michelle Tan",
    role: "Bangsar, Kuala Lumpur",
    text: "Booked the Honda HRV for a weekend getaway. Fast WhatsApp response, quick verification, and tip-top condition.",
    rating: 5,
  },
  {
    id: 6,
    name: "Zulkifli Mansor",
    role: "Ampang, Selangor",
    text: "Sewa Alza New untuk urusan keluarga. Aircond sejuk beku, jimat minyak, dan urusan staf sangat peramah dan berdisiplin.",
    rating: 5,
  },
  {
    id: 7,
    name: "Siti Sarah",
    role: "Kajang, Selangor",
    text: "First time guna servis DriveJer. Proses booking mudah, tiada cas tersembunyi, dan kereta wangi macam baru keluar showroom!",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#fafbfa] border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="w-12 h-[2px] bg-[#76C043]"></div>
            <h2 className="text-[#65a30d] font-bold tracking-widest uppercase text-sm">
              TESTIMONIALS
            </h2>
            <div className="w-12 h-[2px] bg-[#76C043]"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What Our <span className="text-[#76C043]">Clients Say</span>
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-[#76C043]/50 transition-all rounded-2xl p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#76C043] text-[#76C043]" />
                ))}
              </div>
              <p className="text-gray-700 text-base mb-8 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f0fdf4] rounded-full flex items-center justify-center border border-[#bbf7d0] flex-shrink-0">
                  <span className="text-[#16a34a] font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
