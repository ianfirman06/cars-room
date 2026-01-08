
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Koleksi', path: '/inventory' },
    { name: 'Layanan', path: '/services' },
    { name: 'Financing', path: '/financing' },
    { name: 'Jual Mobil', path: '/sell' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter text-blue-500">LUXE<span className="text-zinc-100">DRIVE</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-sm font-semibold text-zinc-400 hover:text-white transition-all hover:tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link 
              to="/inventory" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
            >
              Cari Mobil
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-100 focus:outline-none p-2 bg-zinc-900 rounded-lg"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-white/10 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-lg font-medium text-zinc-300 hover:bg-zinc-900 rounded-xl"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/inventory"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-4 py-4 rounded-xl text-lg font-bold"
              >
                Cari Mobil
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
