'use client'
import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Dolapları hangi malzemeden imal ediyorsunuz?",
      answer:
        "Dayanıklı ve uzun ömürlü mobilyalar için sunta yerine MDF kullanıyoruz! Şıklığı ve sağlamlığı bir arada sunuyoruz.",
    },
    {
      question: "Atölyeniz nerede ?",
      answer:
        "Manisa Turgutlu Fatih Sanayi Sitesinde bulunan atölyemizden Manisa ve İzmir’in merkez ilçelerine de üretim ve montaj yapıyoruz.",
    },
    {
      question: "Ne tür işler yapıyorsunuz ? ",
      answer:
        "Furkan Mobilya olarak hazır mutfak, vestiyer(portmanto), elbise dolabı, yatak dolabı, komodin, şifonyer ve benzeri dolaplarımızın yanında alanında usta ekibimizle anahtar teslim tadilat hizmeti de veriyoruz.",
    },
    {
      question: "Ürettiğiniz dolapların teslim süresi kaç gündür?",
      answer:
        "Yoğunluk durumuna göre değişmekle birlikte dolaplarınız 10-15 gün içerisinde hazır ve yerine takılmış şekilde teslim edilmektedir.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight font-serif">
            Hakkımızda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed tracking-wide font-serif mt-4">
            30 yılı aşkın tecrübemizle otel taşımacılığında güvenin, hızın ve profesyonelliğin adresiyiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Misyonumuz */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-blue-500 relative"
          >
            <div className="absolute -top-6 left-6 bg-blue-500 p-3 rounded-full shadow-md">
              <FaBullseye className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pl-12 font-serif tracking-tight">Misyonumuz</h3>
            <p className="text-gray-700 leading-relaxed tracking-normal text-base font-serif space-y-4">
              <span className="block mb-3">
                Murat Nakliyat olarak, 30 yılı aşkın tecrübemizle Ege ve Akdeniz bölgelerinde faaliyet gösteren otellere özel taşımacılık hizmetleri sunuyoruz.
              </span>
              <span className="block mb-3">
                Farklı iş koşullarına uygun geniş araç filomuz, deneyimli kadromuz ve yurdun her köşesine ulaşabilen lojistik ağımız sayesinde
                müşterilerimize güvenilir, zamanında ve kaliteli hizmet sağlamayı misyon ediniyoruz.
              </span>
              <span className="block">
                Her taşıma sürecini titizlikle planlıyor ve müşteri memnuniyetini en üst seviyede tutuyoruz.
              </span>
            </p>
          </motion.div>

          {/* Vizyonumuz */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-green-500 relative"
          >
            <div className="absolute -top-6 left-6 bg-green-500 p-3 rounded-full shadow-md">
              <FaEye className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pl-12 font-serif tracking-tight">Vizyonumuz</h3>
            <p className="text-gray-700 leading-relaxed tracking-normal text-base font-serif space-y-4">
              <span className="block mb-3">
                Otel lojistiği alanında Ege ve Akdeniz’in lider firması olarak, hizmet kalitemizi sürekli geliştirerek sektördeki öncülüğümüzü sürdürmek.
              </span>
              <span className="block mb-3">
                Güçlü lojistik altyapımız ve esnek hizmet çözümlerimizle yalnızca bölgesel değil, yurdun dört bir yanında tercih edilen bir marka olmak.
              </span>
              <span className="block">
                Müşteri odaklı yaklaşımımız ve modern taşımacılık anlayışımızla sektöre yön vermeye devam etmek.
              </span>
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
