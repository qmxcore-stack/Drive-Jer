export default function Hero({ onSearch }: { onSearch?: () => void } = {}) {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-0 bg-white overflow-hidden">
      <div className="w-full">
        <img 
          src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/6da3978d-96d1-46f8-84b5-e5c9e7522dc5.png" 
          alt="DriveJer MPV Rental KL & Selangor" 
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
}
