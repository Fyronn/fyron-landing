'use client'

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = [
    {
      slug: "Kamyonet",
      title: "Mutfak Dolapları",
      description:
        "Furkan Mobilya'nın modern mutfak dolaplarıyla mutfağınızı yeniden keşfedin.",
      image: "/vehicle/tır.jpg",
    },
    {
      slug: "vestiyer",
      title: "Vestiyerler",
      description: "Şıklığı ve düzeni bir araya getiren kullanışlı vestiyer modelleri.",
      image: "/vehicle/headerimage.jpg",
    },
    {
      slug: "bedroom",
      title: "Yatak Odası",
      description:
        "Rahat ve lüks yatak odası mobilyaları ile her güne enerjik başlayın.",
      image: "/vehicle/tır.jpg",
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
