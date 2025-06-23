'use client';

import React from "react";
import { motion } from "framer-motion";

const locations = [
  { title: "Antalya", image: "/services/antalya.png" },
  { title: "Fethiye", image: "/services/Fethiye.png" },
  // Yeni lokasyonlar eklenecekse buraya devam edebilirsin
];

const Yaptiklarimiz = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl shadow-md">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:max-w-2xl text-center mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                Nerelerdeydik
              </h2>
              <p className="text-gray-500 font-semibold">
                Hizmet verdiğimiz bazı bölgeler.
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
                      alt={loc.title}
                      className="w-full h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white px-6">
                        <h3 className="text-2xl font-bold">{loc.title}</h3>
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
