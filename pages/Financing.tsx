
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
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">SIMULASI <span className="text-blue-500">KREDIT</span></h1>
        <p className="text-zinc-500 text-lg font-light">Layanan finansial fleksibel untuk kenyamanan kepemilikan Anda.</p>
      </div>

      <div className="bg-zinc-900 rounded-[3rem] shadow-2xl border border-zinc-800 p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">Harga Unit Kendaraan (Rp)</label>
              <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-2xl font-bold text-white focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-xs font-black uppercase tracking-widest text-zinc-500">Uang Muka (DP)</label>
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-lg text-sm font-bold border border-blue-500/20">{downPayment}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="80" 
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full accent-blue-600 bg-zinc-800 h-2 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-600 mt-3">
                <span>Min 10%</span>
                <span>Max 80%</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">Tenor Pinjaman</label>
              <div className="grid grid-cols-3 gap-3">
                  {[12, 24, 36, 48, 60].map(t => (
                      <button 
                        key={t}
                        onClick={() => setTenor(t)}
                        className={`py-3 rounded-xl font-bold border transition-all ${
                            tenor === t 
                            ? 'bg-blue-600 border-blue-500 text-white' 
                            : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-600'
                        }`}
                      >
                          {t/12} Tahun
                      </button>
                  ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 text-white flex flex-col justify-center items-center shadow-2xl relative group">
            <div className="absolute inset-0 bg-zinc-950/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
            <p className="text-blue-100 uppercase tracking-[0.3em] text-[10px] font-black mb-6">Estimasi Cicilan Bulanan</p>
            <div className="text-5xl md:text-6xl font-black mb-8 drop-shadow-lg">
              Rp {monthlyInstallment.toLocaleString('id-ID')}
            </div>
            <div className="w-full space-y-4 mb-10 text-sm font-medium border-t border-white/20 pt-8">
                <div className="flex justify-between text-blue-100">
                    <span>Suku Bunga</span>
                    <span className="text-white font-bold">{interest}% p.a (Flat)</span>
                </div>
                <div className="flex justify-between text-blue-100">
                    <span>Total Tenor</span>
                    <span className="text-white font-bold">{tenor} Bulan</span>
                </div>
            </div>
            <button className="w-full bg-white text-zinc-900 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-xl">
              Ajukan Kredit Sekarang
            </button>
            <p className="text-blue-200/60 text-[10px] text-center mt-6 leading-relaxed">
                * Hasil simulasi hanyalah estimasi awal. Harga dapat berubah sewaktu-waktu sesuai kebijakan showroom dan lembaga pembiayaan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
