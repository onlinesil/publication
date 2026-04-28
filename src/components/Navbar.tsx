import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo and Site Name */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
            <Logo src="/images/logo.png" alt="Mullick Library Logo" className="h-12 md:h-14 w-auto object-contain" />
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">
              Mullick Library
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `font-sans text-sm font-medium tracking-wide transition-colors hover:text-gray-900 ${
                    isActive ? 'text-gray-900' : 'text-gray-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600 hover:text-gray-900">
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-sans text-lg font-medium tracking-wide transition-colors hover:text-gray-900 ${
                    isActive ? 'text-gray-900' : 'text-gray-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}