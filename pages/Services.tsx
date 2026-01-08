
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">CARE & <span className="text-blue-500">MAINTENANCE</span></h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">Dedikasi kami melampaui penjualan. Kami memastikan unit Anda tetap dalam performa puncak dengan standar pelayanan global.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES.map((s) => (
          <div key={s.id} className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500 group text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 group-hover:bg-blue-600 transition-colors"></div>
            <div className="text-7xl mb-10 transition-transform group-hover:scale-110 group-hover:-translate-y-2 duration-500 block">{s.icon}</div>
            <h3 className="text-2xl font-black text-white mb-5 uppercase tracking-tight">{s.title}</h3>
            <p className="text-zinc-500 leading-relaxed mb-10 font-medium">{s.description}</p>
            <button className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] group-hover:text-white transition-colors">
              Booking Appointment →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-32 bg-zinc-900 border border-zinc-800 rounded-[4rem] p-12 md:p-20 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 -skew-x-12 translate-x-1/2"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest inline-block mb-6 shadow-xl shadow-blue-600/30">Layanan Darurat</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">BANTUAN JALAN <br/>TETAP SIAGA <span className="text-blue-500">24 JAM</span>.</h2>
            <p className="text-zinc-400 mb-10 text-xl font-light leading-relaxed">Ketengangan pikiran Anda adalah prioritas kami. Tim teknis siaga 24/7 untuk segala kendala teknis di manapun Anda berada.</p>
            <a href="tel:0215551234" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black text-2xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl">
              <span className="text-blue-500 group-hover:text-white">📞</span> 021-555-1234
            </a>
          </div>
          <div className="flex-1 w-full lg:w-auto">
             <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-[3rem]"></div>
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" className="relative rounded-[2.5rem] shadow-2xl border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Service Van" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
