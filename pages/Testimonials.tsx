
import React from 'react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">APA KATA MEREKA?</h1>
        <p className="text-gray-500">Kisah nyata dari para pemilik mobil yang telah bergabung dengan keluarga LuxeDrive.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REVIEWS.map((review) => (
          <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.date}</p>
              </div>
              <div className="ml-auto flex text-yellow-400">
                {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed italic">"{review.comment}"</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bg-gray-50 rounded-3xl p-12">
        <h2 className="text-2xl font-bold mb-4">Sudah Siap Memulai Kisah Anda?</h2>
        <p className="text-gray-500 mb-8">Jadilah bagian dari ribuan nasabah puas kami hari ini.</p>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-black hover:bg-blue-700 transition shadow-xl">
          Hubungi Kami Sekarang
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
