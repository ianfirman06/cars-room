
import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800 last:border-b-0 py-6 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-bold text-xl text-zinc-100 focus:outline-none transition-colors group-hover:text-blue-500"
      >
        <span className="pr-8">{question}</span>
        <span className={`transform transition-all text-3xl font-light ${isOpen ? 'rotate-45 text-blue-500' : 'text-zinc-600'}`}>+</span>
      </button>
      {isOpen && <p className="mt-6 text-zinc-400 leading-relaxed animate-fade-in text-lg font-light">{answer}</p>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Apakah semua mobil di LuxeDrive memiliki garansi?",
      answer: "Ya, seluruh unit di LuxeDrive dilengkapi dengan garansi mesin dan transmisi selama 6 bulan atau 5.000 km. Kami menjamin ketenangan pikiran Anda pasca pembelian."
    },
    {
      question: "Dapatkah saya melakukan test drive sebelum membeli?",
      answer: "Tentu! Kami sangat menyarankan test drive untuk merasakan kemewahan unit kami. Anda dapat menjadwalkan kunjungan privat melalui tim sales kami."
    },
    {
      question: "Dokumen apa saja yang diperlukan untuk pengajuan kredit?",
      answer: "Umumnya diperlukan identitas resmi (KTP), Kartu Keluarga, NPWP, bukti penghasilan, dan mutasi rekening 3 bulan terakhir. Tim kami akan mendampingi proses administrasi Anda."
    },
    {
      question: "Apakah LuxeDrive menerima tukar tambah (trade-in)?",
      answer: "Ya, kami menerima tukar tambah dengan segala merk dan tahun. Mobil lama Anda akan diinspeksi secara profesional untuk mendapatkan nilai tukar terbaik."
    },
    {
      question: "Bagaimana cara mengecek keaslian surat-surat kendaraan?",
      answer: "Kami menjamin 100% keabsahan BPKB, STNK, dan Faktur. Seluruh surat telah diverifikasi legalitasnya sebelum unit masuk ke showroom kami."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <div className="text-center mb-20">
         <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">PRIVATE <span className="text-blue-500">CONCIERGE</span></h1>
         <p className="text-zinc-500 text-lg">Pertanyaan umum yang sering ditanyakan oleh klien eksklusif kami.</p>
      </div>
      <div className="bg-zinc-900/50 rounded-[3rem] border border-zinc-800 p-10 md:p-16 shadow-2xl">
        {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
      <div className="mt-20 text-center">
          <p className="text-zinc-500 mb-6 font-medium">Masih memiliki pertanyaan lain?</p>
          <a href="/#/contact" className="inline-block border border-zinc-700 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-zinc-950 transition-all">Hubungi Tim Advisor</a>
      </div>
    </div>
  );
};

export default FAQ;
