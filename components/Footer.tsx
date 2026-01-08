
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">LUXEDRIVE</h3>
          <p className="text-gray-400 text-sm">
            Dealer mobil mewah terkemuka di Indonesia. Kami menghadirkan pengalaman berkendara kelas dunia langsung ke tangan Anda.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/inventory" className="hover:text-white transition">Koleksi Mobil</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Layanan & Bengkel</Link></li>
            <li><Link to="/financing" className="hover:text-white transition">Simulasi Kredit</Link></li>
            <li><Link to="/sell" className="hover:text-white transition">Jual Mobil Anda</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Informasi</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition">Tentang Kami</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition">Testimonial</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Hubungi Kami</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Kontak Kami</h4>
          <p className="text-gray-400 text-sm">Jl. Boulevard Gading Serpong, No. 12<br />Tangerang, Indonesia</p>
          <p className="text-gray-400 text-sm mt-2">+62 21 555 1234</p>
          <div className="flex space-x-4 mt-4">
            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">IG</span>
            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">FB</span>
            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">YT</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LuxeDrive Indonesia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
