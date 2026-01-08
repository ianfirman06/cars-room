
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-gray-900 mb-4">LAYANAN PURNA JUAL</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Kami tidak hanya menjual mobil, tapi kami menjaga performa mobil Anda tetap prima dengan layanan bengkel kelas atas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <div key={s.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group text-center">
            <div className="text-6xl mb-6 transition-transform group-hover:scale-125 duration-300">{s.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{s.description}</p>
            <button className="text-blue-600 font-bold hover:underline">Booking Sekarang →</button>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gray-900 rounded-[3rem] p-12 overflow-hidden relative">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-bold mb-6">Darurat di Jalan? Kami Siap Membantu 24 Jam.</h2>
            <p className="text-gray-400 mb-8 text-lg">LuxeDrive Emergency Roadside Assistance tersedia untuk seluruh pelanggan setia kami di seluruh wilayah JABODETABEK.</p>
            <a href="tel:0215551234" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition shadow-xl">
              📞 021-555-1234
            </a>
          </div>
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-2xl rotate-3" alt="Service Van" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
