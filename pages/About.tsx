
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">KAMI ADALAH LUXEDRIVE</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Misi kami adalah mendefinisikan kembali cara orang Indonesia membeli dan memiliki mobil mewah melalui transparansi, inovasi, dan dedikasi.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop" className="rounded-3xl shadow-2xl" alt="Showroom" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Warisan Kepercayaan</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Berdiri sejak tahun 2012 di jantung kota Tangerang, LuxeDrive memulai perjalanannya sebagai butik mobil mewah dengan hanya 5 unit mobil. Hari ini, kami telah menjadi salah satu pemimpin pasar dengan ratusan unit terjual setiap tahunnya.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Kepercayaan Anda adalah aset terbesar kami. Itulah mengapa setiap unit yang masuk ke showroom kami harus melewati 200 titik inspeksi ketat oleh tim ahli bersertifikasi internasional.
          </p>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Integritas</h3>
            <p className="text-blue-100">Jujur dalam setiap detail kondisi kendaraan, tanpa ada yang disembunyikan.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kualitas</h3>
            <p className="text-blue-100">Hanya menghadirkan unit terbaik yang lulus seleksi ketat tim teknisi kami.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Inovasi</h3>
            <p className="text-blue-100">Memanfaatkan teknologi terbaru untuk memudahkan proses pembelian Anda.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
