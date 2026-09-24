import { CheckCircle2 } from 'lucide-react';

export default function SuccessPage({ onHome }: { onHome: () => void }) {
  return (
    <div className="max-w-2xl mx-auto my-20 p-8 pt-32 text-center">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12">
        <div className="w-24 h-24 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#bbf7d0]">
          <CheckCircle2 className="w-12 h-12 text-[#16a34a]" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 text-lg mb-8">Thank you. Your car rental booking has been confirmed. A receipt will be sent to your email shortly.</p>
        <button onClick={onHome} className="bg-[#76C043] hover:bg-[#68ab3a] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-md">
          Back to Home
        </button>
      </div>
    </div>
  );
}
