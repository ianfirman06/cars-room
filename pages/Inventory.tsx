
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
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-6">KOLEKSI KAMI</h1>
        
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  filterType === type 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white border text-gray-600 hover:bg-gray-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Cari Merk atau Model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCars.map(car => (
          <div key={car.id} className="group bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl transition-all">
            <div className="relative h-48">
              <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">BARU</div>
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{car.make}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{car.model}</h3>
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>{car.year}</span>
                <span>•</span>
                <span>{car.fuel}</span>
                <span>•</span>
                <span>{car.transmission}</span>
              </div>
              <div className="pt-4 border-t flex justify-between items-center">
                <span className="font-black text-gray-900">Rp {(car.price / 1000000000).toFixed(1)} M</span>
                <Link to={`/car/${car.id}`} className="text-blue-600 font-bold text-sm hover:underline">Detail</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">Mobil yang Anda cari tidak ditemukan.</p>
          <button onClick={() => {setFilterType('All'); setSearchQuery('');}} className="mt-4 text-blue-600 font-bold">Reset Filter</button>
        </div>
      )}
    </div>
  );
};

export default Inventory;
