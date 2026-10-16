/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmileProvider } from './context/SmileContext';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmileLab } from './components/SmileLab';
import { Journey } from './components/Journey';
import { Services } from './components/Services';
import { Doctor } from './components/Doctor';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <SmileProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-[#88ba9e]/30">
          <Navbar />
          <main>
            <Hero />
            <SmileLab />
            <Journey />
            <Services />
            <Doctor />
            <Testimonials />
            <FAQ />
            <Booking />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </SmileProvider>
  );
}
