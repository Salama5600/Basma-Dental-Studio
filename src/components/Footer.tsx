import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './SVGs';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#" className="brand footer-brand" aria-label="Basma Dental Studio">
              <BrandLogo />
              <span>
                basma
                <span className="brand-sub">DENTAL STUDIO</span>
              </span>
            </a>
            <p>A little brighter. A little more you.</p>
          </div>

          <div className="footer-details">
            <span>
              <MapPin className="w-3.5 h-3.5" />
              15 El-Nasr St, Nasr City, Cairo
            </span>
            <span>
              <Clock className="w-3.5 h-3.5" />
              Sat – Thu, 12 PM – 9 PM · Friday closed
            </span>
            <span>
              <Phone className="w-3.5 h-3.5" />
              0100 000 0000 <small>(demo number)</small>
            </span>
          </div>

          <a href="#smile-lab" className="footer-cta">
            Your smile starts here <ArrowUpRight />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Basma Dental Studio</span>
          <span>A fictional clinic. A real love for thoughtful design.</span>
          <a href="#">Back to the top ↑</a>
        </div>

        <p className="footer-disclaimer">
          A portfolio concept — all clinic details, doctor credentials, and patient stories are fictional. Not medical advice.
        </p>
      </div>
    </footer>
  );
}
