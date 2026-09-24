/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import Testimonials from './components/Testimonials';
import CustomerGallery from './components/CustomerGallery';
import Footer from './components/Footer';
import FpxPayment from './components/FpxPayment';
import SuccessPage from './components/SuccessPage';
import { useState } from 'react';

export default function App() {
  const [view, setView] = useState<'home' | 'fpx' | 'success'>('home');

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Header />
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero onSearch={() => setView('fpx')} />
            <FeaturedCars onRent={() => setView('fpx')} />
            <Testimonials />
            <CustomerGallery />
          </>
        )}
        {view === 'fpx' && (
          <FpxPayment onCancel={() => setView('home')} onSuccess={() => setView('success')} />
        )}
        {view === 'success' && (
          <SuccessPage onHome={() => setView('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
}
