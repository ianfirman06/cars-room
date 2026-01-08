
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CARS } from '../constants';
import { getCarRecommendation } from '../services/geminiService';

const Home: React.FC = () => {
  const [preference, setPreference] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAiConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preference.trim()) return;
    setLoading(true);
    const result = await getCarRecommendation(preference);
    setAiResponse(result || '');
    setLoading(false);
  };

  return (
    <div className="space-y-32 pb-32 bg-zinc-950">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-6 inline-block bg-blue-600/20 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase">
            Dealer Mobil Mewah Terpercaya
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
            THE ART OF <br/><span className="text-gradient">DRIVING</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Koleksi eksklusif mobil premium dengan standar inspeksi tertinggi dan layanan purna jual tanpa tanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/inventory" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-2xl shadow-blue-600/20">
              Jelajahi Koleksi
            </Link>
            <Link to="/sell" className="glass hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1">
              Jual Mobil
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path></svg>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white">Konsultan AI LuxeDrive</h2>
              </div>
              <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                Bingung memilih mobil yang sesuai gaya hidup Anda? Biarkan asisten cerdas kami membantu Anda menemukan unit yang tepat berdasarkan preferensi Anda.
              </p>
              <form onSubmit={handleAiConsult} className="space-y-5">
                <textarea
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                  placeholder="Ceritakan gaya berkendara atau kebutuhan Anda (misal: 'Saya butuh mobil mewah untuk bisnis dan akhir pekan bersama keluarga')..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  rows={4}
                />
                <button 
                  disabled={loading}
                  className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50"
                >
                  {loading ? 'Sedang Menganalisis...' : 'Minta Rekomendasi AI'}
                </button>
              </form>
            </div>
            {aiResponse && (
              <div className="flex-1 bg-zinc-950/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-zinc-300 animate-fade-in shadow-inner">
                <div className="text-blue-500 mb-4 font-bold uppercase tracking-widest text-xs">Hasil Rekomendasi:</div>
                <p className="leading-relaxed text-lg font-light italic">"{aiResponse}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white">UNGGULAN <span className="text-gradient">BULAN INI</span></h2>
            <p className="text-zinc-500 mt-4 text-lg">Unit terbaik dengan sertifikasi inspeksi 200 titik.</p>
          </div>
          <Link to="/inventory" className="group flex items-center gap-2 text-zinc-100 font-bold bg-zinc-900 px-6 py-3 rounded-full border border-zinc-800 hover:border-blue-500 transition-all">
            Lihat Semua Koleksi 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CARS.slice(0, 3).map((car) => (
            <div key={car.id} className="group bg-zinc-900/40 rounded-[2rem] border border-zinc-800/50 overflow-hidden hover:border-blue-500/50 hover:bg-zinc-900/80 transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img src={car.image} alt={car.model} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-5 right-5 glass px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white">{car.type}</div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                   <div>
                      <p className="text-blue-500 text-xs font-black uppercase tracking-widest mb-1">{car.make}</p>
                      <h3 className="text-2xl font-bold text-white">{car.model}</h3>
                   </div>
                   <div className="text-zinc-500 font-medium">{car.year}</div>
                </div>
                <div className="flex gap-4 text-xs text-zinc-500 mt-4 pb-6 border-b border-zinc-800">
                  <span className="flex items-center gap-1">⛽ {car.fuel}</span>
                  <span className="flex items-center gap-1">⚙️ {car.transmission}</span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-black text-white">Rp {(car.price / 1000000000).toFixed(1)} M</span>
                  <Link to={`/car/${car.id}`} className="bg-blue-600/10 text-blue-400 px-6 py-2.5 rounded-xl text-sm font-black hover:bg-blue-600 hover:text-white transition-all">Detail</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-24 border-y border-zinc-900 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-black text-white mb-2">500+</div>
            <div className="text-zinc-500 text-xs mt-1 uppercase tracking-widest font-bold">Mobil Terjual</div>
          </div>
          <div>
            <div className="text-5xl font-black text-white mb-2">12+</div>
            <div className="text-zinc-500 text-xs mt-1 uppercase tracking-widest font-bold">Tahun Pengalaman</div>
          </div>
          <div>
            <div className="text-5xl font-black text-white mb-2">98%</div>
            <div className="text-zinc-500 text-xs mt-1 uppercase tracking-widest font-bold">Nasabah Puas</div>
          </div>
          <div>
            <div className="text-5xl font-black text-blue-500 mb-2">24/7</div>
            <div className="text-zinc-500 text-xs mt-1 uppercase tracking-widest font-bold">Layanan Siaga</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
