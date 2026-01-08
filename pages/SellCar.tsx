
import React, { useState } from 'react';

const SellCar: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-black text-gray-900 leading-tight">JUAL MOBIL ANDA DENGAN HARGA TERBAIK</h1>
          <p className="text-xl text-gray-500 mt-6 leading-relaxed">
            Dapatkan taksiran harga instan dan penawaran transparan dalam waktu kurang dari 24 jam. Kami melayani tukar tambah ke unit baru kami.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h4 className="font-bold text-lg">Input Data Mobil</h4>
                <p className="text-gray-500">Isi formulir singkat mengenai kondisi dan riwayat mobil Anda.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h4 className="font-bold text-lg">Inspeksi Profesional</h4>
                <p className="text-gray-500">Tim kami akan mengunjungi lokasi Anda untuk cek fisik mendalam.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h4 className="font-bold text-lg">Cair Hari Ini</h4>
                <p className="text-gray-500">Terima pembayaran instan segera setelah kesepakatan tercapai.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border">
          <h3 className="text-2xl font-bold mb-6">Formulir Penjualan</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Merk Mobil</label>
              <input type="text" placeholder="Misal: Toyota, BMW" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Model & Varian</label>
              <input type="text" placeholder="Misal: Alphard 2.5 G" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tahun</label>
                <input type="number" placeholder="2020" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kilometer</label>
                <input type="number" placeholder="15000" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Pemilik</label>
              <input type="text" placeholder="Nama Lengkap" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">No. WhatsApp</label>
              <input type="tel" placeholder="0812xxxx" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg mt-4 shadow-lg hover:bg-blue-700 transition">
              Kirim & Dapatkan Estimasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
