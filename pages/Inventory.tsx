
import React, { useState, useMemo } from 'react';
import { CARS } from '../constants';
import { Link } from 'react-router-dom';

const Inventory: React.FC = () => {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      const matchesType = filterType === 'All' || car.type === filterType;
      const matchesSearch = car.make.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           car.model.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [filterType, searchQuery]);

  const types = ['All', 'Sedan', 'SUV', 'Luxury', 'Sport', 'Electric'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-5xl font-black text-white mb-8 tracking-tight">KOLEKSI <span className="text-blue-500">TERBAIK</span></h1>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex gap-3 overflow-x-auto pb-4 w-full lg:w-auto scrollbar-hide">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-8 py-3 rounded-full text-sm font-black transition-all whitespace-nowrap border ${
                  filterType === type 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-[400px]">
            <input
              type="text"
              placeholder="Cari Merk atau Model Mobil..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-inner"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCars.map(car => (
          <div key={car.id} className="group bg-zinc-900/50 rounded-3xl border border-zinc-800 overflow-hidden hover:border-blue-500/40 hover:bg-zinc-900 transition-all duration-300">
            <div className="relative h-56 overflow-hidden bg-zinc-950">
              <img src={car.image} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl uppercase tracking-widest">New Arrival</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">{car.make}</p>
                  <h3 className="text-xl font-bold text-white truncate w-40">{car.model}</h3>
                </div>
                <div className="text-zinc-500 text-sm font-bold">{car.year}</div>
              </div>
              
              <div className="flex justify-between text-xs text-zinc-400 mb-6 bg-zinc-950/50 p-3 rounded-xl border border-white/5">
                <span className="flex items-center gap-1">⛽ {car.fuel}</span>
                <span className="flex items-center gap-1">⚙️ {car.transmission.slice(0, 4)}</span>
                <span className="flex items-center gap-1">⚡ {car.type}</span>
              </div>
              
              <div className="pt-2 flex justify-between items-center">
                <span className="font-black text-xl text-white">Rp {(car.price / 1000000000).toFixed(1)} M</span>
                <Link to={`/car/${car.id}`} className="p-3 bg-zinc-800 rounded-xl text-zinc-100 hover:bg-blue-600 hover:text-white transition-all">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="text-center py-32 bg-zinc-900/20 rounded-[3rem] border border-dashed border-zinc-800">
          <div className="text-6xl mb-6">🔍</div>
          <p className="text-zinc-500 text-xl font-medium">Mobil yang Anda cari tidak ditemukan.</p>
          <button 
            onClick={() => {setFilterType('All'); setSearchQuery('');}} 
            className="mt-6 text-blue-500 font-black hover:underline tracking-widest uppercase text-sm"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default Inventory;
