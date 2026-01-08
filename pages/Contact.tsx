
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-6 uppercase">HUBUNGI KAMI</h1>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Tim kami siap membantu Anda menjawab segala pertanyaan seputar koleksi mobil, simulasi kredit, hingga penjadwalan servis.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <h4 className="font-bold">Alamat Showroom</h4>
                <p className="text-gray-500">Jl. Boulevard Gading Serpong No. 12, Tangerang, Banten 15810</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <h4 className="font-bold">Telepon</h4>
                <p className="text-gray-500">+62 21 555 1234 / +62 812 3456 7890</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">✉️</div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-500">hello@luxedrive.co.id</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🕒</div>
              <div>
                <h4 className="font-bold">Jam Operasional</h4>
                <p className="text-gray-500">Senin - Minggu: 09.00 - 19.00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nama Lengkap</label>
                <input type="text" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Andi" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="andi@mail.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Subjek</label>
              <select className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Tanya Koleksi Mobil</option>
                <option>Simulasi Kredit</option>
                <option>Keluhan / Saran</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Pesan</label>
              <textarea rows={5} className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ketik pesan Anda di sini..."></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-lg shadow-lg hover:bg-blue-700 transition">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20 h-96 bg-gray-200 rounded-3xl overflow-hidden grayscale">
        <iframe 
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.14441052672!2d106.59101!3d-6.23078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb2082f80c5d%3A0x6e788e2c0d453b70!2sGading%20Serpong!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
