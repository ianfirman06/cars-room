
import React, { useState, useEffect } from 'react';

const Financing: React.FC = () => {
  const [price, setPrice] = useState(1000000000);
  const [downPayment, setDownPayment] = useState(20); // percentage
  const [tenor, setTenor] = useState(36); // months
  const [interest, setInterest] = useState(3.5); // per year
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);

  useEffect(() => {
    const loanAmount = price - (price * downPayment / 100);
    const totalInterest = (loanAmount * interest / 100) * (tenor / 12);
    const totalLoan = loanAmount + totalInterest;
    setMonthlyInstallment(Math.round(totalLoan / tenor));
  }, [price, downPayment, tenor, interest]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900">SIMULASI KREDIT</h1>
        <p className="text-gray-500 mt-2">Dapatkan estimasi cicilan bulanan dengan mudah.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Harga Mobil (Rp)</label>
              <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Uang Muka ({downPayment}%)</label>
              <input 
                type="range" 
                min="10" 
                max="80" 
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>10%</span>
                <span>80%</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Tenor ({tenor} Bulan)</label>
              <select 
                value={tenor}
                onChange={(e) => setTenor(Number(e.target.value))}
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value={12}>12 Bulan (1 Tahun)</option>
                <option value={24}>24 Bulan (2 Tahun)</option>
                <option value={36}>36 Bulan (3 Tahun)</option>
                <option value={48}>48 Bulan (4 Tahun)</option>
                <option value={60}>60 Bulan (5 Tahun)</option>
              </select>
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col justify-center items-center">
            <p className="text-blue-100 uppercase tracking-widest text-sm font-bold">Estimasi Cicilan</p>
            <div className="text-4xl md:text-5xl font-black my-4">
              Rp {monthlyInstallment.toLocaleString('id-ID')}
            </div>
            <p className="text-blue-100 text-sm text-center">Estimasi berdasarkan bunga flat {interest}% per tahun. Harga belum termasuk biaya administrasi & asuransi.</p>
            <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full font-black hover:bg-blue-50 transition shadow-lg">
              Ajukan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
