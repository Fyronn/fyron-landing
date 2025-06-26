'use client';

import React from "react";
import { motion } from "framer-motion";

const locations = [
  { alt: "Murat Nakliyat Alanya evden eve nakliye hizmeti", title: "Alanya", image: "/iller/alanya.jpg" },
  { alt: "Belek’te şehir içi ve şehirlerarası taşıma – Murat Nakliyat", title: "Belek", image: "/iller/belek.webp" },
  { alt: "Murat Nakliyat Bodrum ev taşımacılığı ve yük nakliyesi", title: "Bodrum", image: "/iller/bodrum.jpg" },
  { alt: "Didim’de profesyonel nakliye ve taşıma hizmeti – Murat Nakliyat", title: "Didim", image: "/iller/didim.webp" },
  { alt: "Fethiye bölgesinde güvenli ve hızlı nakliye – Murat Nakliyat", title: "Fethiye", image: "/iller/fethiye.jpg" },
  { alt: "Göcek’te villa taşımacılığı ve özel nakliyat çözümleri", title: "Göcek", image: "/iller/gocek.jpg" },
  { alt: "Manavgat evden eve nakliyat ve eşya taşıma – Murat Nakliyat", title: "Manavgat", image: "/iller/manavgat.jpg" },
  { alt: "Marmaris’te taşınmanın en kolay hali: Murat Nakliyat", title: "Marmaris", image: "/iller/marmaris.jpg" },
];


const Yaptiklarimiz = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl shadow-md">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:max-w-lg text-center mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                Bizi Tercih Eden Şehirler
              </h2>
              <p className="text-gray-500 font-semibold">
                Türkiye’nin dört bir yanına ulaşan hizmet ağımız.
              </p>
            </div>

            <div className="flex flex-wrap -m-4 mb-8">
              {locations.map((loc, index) => (
                <motion.div
                  key={loc.title}
                  className="w-full md:w-1/2 p-4"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={loc.image}
                      alt={loc.alt}
                      title={loc.alt}
                      className="w-full h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white px-6">
                        <h3 className="text-2xl font-bold tracking-[0.2em]  ">{loc.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yaptiklarimiz;
