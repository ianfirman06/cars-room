
import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-bold text-lg text-gray-800 focus:outline-none"
      >
        {question}
        <span className={`transform transition-transform text-2xl ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      {isOpen && <p className="mt-4 text-gray-600 leading-relaxed animate-fade-in">{answer}</p>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Apakah semua mobil di LuxeDrive memiliki garansi?",
      answer: "Ya, seluruh unit di LuxeDrive dilengkapi dengan garansi mesin dan transmisi selama 6 bulan atau 5.000 km (mana yang tercapai lebih dulu)."
    },
    {
      question: "Dapatkah saya melakukan test drive sebelum membeli?",
      answer: "Tentu! Kami sangat menyarankan test drive. Anda dapat menjadwalkan kunjungan melalui website atau menghubungi sales kami via WhatsApp."
    },
    {
      question: "Dokumen apa saja yang diperlukan untuk pengajuan kredit?",
      answer: "Umumnya diperlukan KTP (Suami/Istri), Kartu Keluarga, NPWP, Slip Gaji 3 bulan terakhir, dan Rekening Koran 3 bulan terakhir."
    },
    {
      question: "Apakah LuxeDrive menerima tukar tambah (trade-in)?",
      answer: "Ya, kami menerima tukar tambah dengan segala merk dan tahun. Mobil lama Anda akan kami hargai secara kompetitif."
    },
    {
      question: "Bagaimana cara mengecek keaslian surat-surat kendaraan?",
      answer: "Kami menjamin keabsahan surat kendaraan (STNK & BPKB). Anda dapat melakukan cek fisik bantuan kami di SAMSAT terdekat saat proses serah terima."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-center text-gray-900 mb-12">PERTANYAAN UMUM (FAQ)</h1>
      <div className="bg-white rounded-3xl shadow-xl border p-8 md:p-12">
        {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </div>
  );
};

export default FAQ;
