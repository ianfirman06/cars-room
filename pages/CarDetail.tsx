
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CARS } from '../constants';
import { getDetailedCarDescription } from '../services/geminiService';

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = CARS.find(c => c.id === id);
  const [aiDescription, setAiDescription] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    if (car) {
      setLoadingAi(true);
      getDetailedCarDescription(`${car.make} ${car.model} ${car.year}`)
        .then(res => setAiDescription(res))
        .finally(() => setLoadingAi(false));
    }
  }, [car]);

  if (!car) {
    return <div className="p-32 text-center text-zinc-500">Mobil tidak ditemukan. <Link to="/inventory" className="text-blue-500">Kembali</Link></div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
         <Link to="/inventory" className="text-zinc-500 hover:text-white flex items-center gap-2 font-bold text-sm uppercase tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Kembali ke Koleksi
         </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Images */}
        <div className="space-y-6">
          <div className="aspect-[16/10] bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
            <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-all border border-white/5 p-1">
                <img src={`https://picsum.photos/seed/${car.id + i}/400/400`} alt="Gallery" className="w-full h-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600/20 text-blue-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-500/20">{car.type}</span>
              <span className="bg-zinc-800 text-zinc-300 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-zinc-700">{car.fuel}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter">{car.make} <br/>{car.model}</h1>
            <div className="flex gap-6 mt-6">
                <div className="text-center bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-2xl">
                    <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Year</div>
                    <div className="text-white font-bold">{car.year}</div>
                </div>
                <div className="text-center bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-2xl">
                    <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Mileage</div>
                    <div className="text-white font-bold">{car.mileage.toLocaleString()} km</div>
                </div>
                <div className="text-center bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-2xl">
                    <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Trans</div>
                    <div className="text-white font-bold">{car.transmission}</div>
                </div>
            </div>
          </div>

          <div className="text-5xl font-black text-blue-500 mb-12">
            Rp {car.price.toLocaleString('id-ID')}
          </div>

          <div className="space-y-6 mb-12 p-8 bg-zinc-900/50 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.9124 14 13.017 13.1046 13.017 12V6C13.017 4.89543 13.9124 4 15.017 4H21.017C22.1216 4 23.017 4.89543 23.017 6V12C23.017 13.1046 22.1216 14 21.017 14H21.017V16C21.017 18.7614 18.7784 21 16.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017V14H2.017C0.912431 14 0.017 13.1046 0.017 12V6C0.017 4.89543 0.912431 4 2.017 4H8.017C9.12157 4 10.017 4.89543 10.017 6V12C10.017 13.1046 9.12157 14 8.017 14H8.017V16C8.017 18.7614 5.77843 21 3.017 21H1.017Z"/></svg>
            </div>
            <h3 className="font-black text-xs uppercase tracking-[0.3em] text-blue-500">Narasi Eksklusif</h3>
            {loadingAi ? (
              <div className="animate-pulse space-y-3">
                <div className="h-3 bg-zinc-800 rounded w-3/4"></div>
                <div className="h-3 bg-zinc-800 rounded"></div>
                <div className="h-3 bg-zinc-800 rounded w-5/6"></div>
              </div>
            ) : (
              <p className="text-zinc-300 leading-relaxed text-lg font-light">
                {aiDescription || car.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {car.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                <span className="h-2 w-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span> {f}
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-5">
            <button className="flex-1 bg-white text-zinc-950 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all shadow-2xl">
              Hubungi Sales Advisor
            </button>
            <Link to="/financing" className="flex-1 bg-zinc-900 text-white border border-zinc-800 text-center py-5 rounded-2xl font-black text-lg hover:border-blue-500 transition-all">
              Simulasi Kredit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
