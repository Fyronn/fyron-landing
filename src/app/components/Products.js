'use client'

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = [
  {
    slug: "kapali-kasa-kamyonet",
    title: "Murat Nakliyat Kamyonet",
    description: "Otel mobilyaları, elektronik eşyalar ve dekorasyon ürünlerinin hava şartlarından korunarak taşınması için kapalı kasa kamyonet hizmetimiz.",
    image: "/vehicle/3kamyonet.png",
    alt: "Murat Nakliyat'ın kamyonetleri ile otel taşımacılığı ve hassas yük transferi - Murat Nakliyat"
  },
  {
    slug: "acik-kasa-nakliye-araci",
    title: "Murat Nakliyat Kamyonet",
    description: "Yatak, baza, gardırop gibi büyük hacimli otel ekipmanlarının taşınması için ideal açık kasa taşıma çözümleri.",
    image: "/vehicle/headerimage.jpg",
    alt: "Murat Nakliyat'ın kamyonetleri ile büyük otel mobilyalarının taşınması - Murat Nakliyat"
  },
  {
    slug: "tek-kabin-kamyonet",
    title: "Murat Nakliyat Kamyonet",
    description: "Daha dar alanlara erişebilen araçlarımızla butik oteller, pansiyonlar ve şehir içi otel taşımalarında esnek çözümler.",
    image: "/vehicle/tekkamyonet.png",
    alt: "Murat Nakliyat'ın kamyonetleri ile şehir içi otel malzemesi taşımacılığı - Murat Nakliyat"
  },
];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">
        Araçlarımız
      </h1>

      <div className="flex flex-wrap -m-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.slug}
            className="w-full md:w-1/3 p-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay:0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 md:h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Kart alt açıklama aktif etmek istersen */}
              {/* <div className="p-6">
                <p className="text-sm text-gray-500 mb-2 font-semibold">
                  {category.title}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {category.description}
                </h3>
                <Link
                  href={`/category/${category.slug}`}
                  className="text-blue-600 hover:underline text-sm flex items-center font-medium"
                >
                  Daha Fazla İncele
                </Link>
              </div> */}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
