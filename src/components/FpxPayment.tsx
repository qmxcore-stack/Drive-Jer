import React, { useState } from 'react';
import { ArrowLeft, Building, ShieldCheck } from 'lucide-react';

export default function FpxPayment({ onCancel, onSuccess }: { onCancel: () => void; onSuccess: () => void }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBank) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  const banks = [
    "Maybank2U",
    "CIMB Clicks",
    "Public Bank",
    "RHB Now",
    "Hong Leong Connect",
    "AmBank",
    "Bank Islam",
    "Bank Rakyat"
  ];

  return (
    <div className="max-w-2xl mx-auto my-12 p-4 pt-24">
      <button onClick={onCancel} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors font-medium">
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-[#76C043] p-8 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">FPX Payment</h2>
            <p className="text-white/90">Safe and secure</p>
          </div>
          <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="font-medium text-sm">SSL Secured</span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-200">
            <span className="text-gray-500 font-medium">Amount to Pay</span>
            <span className="text-3xl font-extrabold text-gray-900">RM 350.00</span>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold text-gray-800 mb-4">Select Your Bank</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {banks.map((bank) => (
                <button
                  key={bank}
                  type="button"
                  onClick={() => setSelectedBank(bank)}
                  className={`flex items-center gap-3 p-4 border rounded-xl text-left transition-all ${
                    selectedBank === bank
                      ? 'border-[#76C043] bg-[#f0fdf4] ring-2 ring-[#76C043]'
                      : 'border-gray-200 hover:border-[#76C043] hover:bg-gray-50 bg-white'
                  }`}
                >
                  <Building className={`w-5 h-5 ${selectedBank === bank ? 'text-[#16a34a]' : 'text-gray-400'}`} />
                  <span className="font-medium text-gray-800">{bank}</span>
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={isProcessing || !selectedBank}
              className="w-full bg-[#00D659] hover:bg-[#00be4f] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              {isProcessing ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                "Pay Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
