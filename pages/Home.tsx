
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
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">TEMUKAN MOBIL IMPIAN ANDA</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Koleksi eksklusif mobil premium dengan layanan purna jual terbaik di Indonesia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inventory" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
              Lihat Koleksi
            </Link>
            <Link to="/sell" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Jual Mobil
            </Link>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-bold mb-4">Konsultan AI LuxeDrive</h2>
              <p className="text-gray-400 mb-6 text-lg">
                Bingung memilih mobil yang tepat? Beritahu kami kebutuhan Anda (misal: "Saya butuh mobil keluarga yang irit tapi mewah"), dan AI kami akan memberikan rekomendasi terbaik.
              </p>
              <form onSubmit={handleAiConsult} className="space-y-4">
                <textarea
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                  placeholder="Ceritakan kebutuhan mobil Anda..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                <button 
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition disabled:opacity-50"
                >
                  {loading ? 'Berpikir...' : 'Dapatkan Rekomendasi'}
                </button>
              </form>
            </div>
            {aiResponse && (
              <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-gray-100 italic animate-fade-in">
                <p className="leading-relaxed">{aiResponse}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900">UNGGULAN BULAN INI</h2>
            <p className="text-gray-500 mt-2">Mobil pilihan terbaik dengan kondisi istimewa.</p>
          </div>
          <Link to="/inventory" className="text-blue-600 font-bold hover:underline">Lihat Semua →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.slice(0, 3).map((car) => (
            <div key={car.id} className="group bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={car.image} alt={car.model} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{car.type}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{car.make} {car.model}</h3>
                <p className="text-gray-500 text-sm mt-1">{car.year} • {car.transmission} • {car.fuel}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-black text-blue-600">Rp {(car.price / 1000000000).toFixed(1)} M</span>
                  <Link to={`/car/${car.id}`} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition">Detail</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-blue-600">500+</div>
            <div className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">Mobil Terjual</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-600">12</div>
            <div className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">Tahun Pengalaman</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-600">98%</div>
            <div className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">Nasabah Puas</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-600">24/7</div>
            <div className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">Layanan Siaga</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
