import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <Logo src="/images/logo.png" alt="Mullick Library Logo" className="h-14 w-auto object-contain" />
              <span className="font-serif text-3xl font-semibold tracking-tight text-gray-100 group-hover:text-white transition-colors">
                Mullick Library
              </span>
            </Link>
            <p className="font-sans text-sm text-gray-400 max-w-sm mb-8 leading-relaxed font-light">
              Curating voices that matter. We are an independent publishing house dedicated to bringing powerful stories and transformative ideas to life.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest mb-6 text-gray-500">Navigation</h3>
            <ul className="space-y-4 font-sans text-sm font-light text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-800 font-sans text-xs text-gray-500 font-light flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Mullick Library. All rights reserved.</p>
          <p className="mt-4 md:mt-0 uppercase tracking-widest text-[10px]">
            design by <a href="https://printedgroup.in/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-2 decoration-gray-700 hover:decoration-white">printed group team</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
