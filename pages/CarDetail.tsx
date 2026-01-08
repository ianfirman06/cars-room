
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
    return <div className="p-20 text-center">Mobil tidak ditemukan. <Link to="/inventory">Kembali</Link></div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[16/10] bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
            <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition">
                <img src={`https://picsum.photos/seed/${car.id + i}/400/400`} alt="Gallery" />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{car.type}</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{car.fuel}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900">{car.make} {car.model}</h1>
            <p className="text-lg text-gray-500 mt-2">{car.year} • {car.transmission} • {car.mileage} km</p>
          </div>

          <div className="text-4xl font-black text-blue-600 mb-8">
            Rp {car.price.toLocaleString('id-ID')}
          </div>

          <div className="space-y-6 mb-10">
            <h3 className="font-bold text-xl border-b pb-2">Deskripsi Eksklusif</h3>
            {loadingAi ? (
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ) : (
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {aiDescription || car.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {car.features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-blue-500">✓</span> {f}
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
              Hubungi Sales via WhatsApp
            </button>
            <Link to="/financing" className="flex-1 border-2 border-gray-900 text-center py-4 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition">
              Simulasi Kredit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
