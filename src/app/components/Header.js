'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="relative z-10 py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Sol taraf */}
          <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0">
            <div className="flex flex-col h-full">

              {/* Görsel */}
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block w-full mb-6 rounded-xl shadow-lg"
                src="/asitrastudio-assets/headers/banner-left-medium.png"
                
              />

              {/* Metin Kartı */}
              <div className="py-10 px-10 h-full bg-white/80 backdrop-blur-md rounded-5xl shadow-2xl relative overflow-hidden">
                
                {/* Parlayan efekt (opsiyonel) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse pointer-events-none"></div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-xs md:max-w-md font-heading text-5xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900"
                >
                  Güvenilir ve Profesyonel Taşımacılık
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="max-w-sm ml-auto text-right text-gray-700 text-base leading-relaxed space-y-2 font-serif"
                >
                  <div>
                    <span className="block text-xs font-semibold text-gray-500">Kuruluş</span>
                    <span className="block text-sm mb-3">1995</span>
                  </div>
                  <p>
                    <span className="block">Murat Nakliyat, otel taşımacılığında uzmanlaşmış,</span>
                    <span className="block">geniş araç filosu ve güçlü lojistik ağıyla,</span>
                    <span className="block">her taşımada güven, hız ve kalite sunar.</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Sağ taraf: Ana görsel */}
          <div className="w-full lg:w-7/12 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative rounded-5xl overflow-hidden shadow-2xl"
            >
              <img
                className="block h-[615px] w-full object-cover"
                src="/vehicle/headerimage.jpg"
                alt="Murat Nakliyat Ürün Görseli"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
