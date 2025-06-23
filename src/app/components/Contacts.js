'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';

const Contacts = () => {
  const cardStyle = "p-10 text-center h-full bg-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300";

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:max-w-2xl mx-auto text-center">
              <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-extrabold tracking-tight">
                Bize Ulaşın
              </h2>
              <p className="text-gray-500 font-medium">
                Her türlü taşıma ve lojistik ihtiyaçlarınız için bizimle iletişime geçin.
                Size en hızlı ve güvenilir çözümleri sunmak için buradayız.
              </p>
            </div>

            <div className="flex flex-wrap -m-4">
              {/* Mail */}
              <div className="w-full md:w-1/3 p-4">
                <motion.a
                  href="mailto:muratnakliyat95@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className={cardStyle}
                >
                  <div className="flex items-center justify-center mb-6 w-14 h-14 mx-auto bg-white rounded-xl shadow">
                    <FaEnvelope className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl text-gray-900 font-bold mb-1">Mail Adresimiz</h3>
                  <p className="text-gray-600 font-medium">muratnakliyat95@gmail.com</p>
                </motion.a>
              </div>

              {/* Telefon */}
              <div className="w-full md:w-1/3 p-4">
                <motion.a
                  href="tel:+905323150238"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={cardStyle}
                >
                  <div className="flex items-center justify-center mb-6 w-14 h-14 mx-auto bg-white rounded-xl shadow">
                    <FaPhoneAlt className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl text-gray-900 font-bold mb-1">Telefon Numaralarımız</h3>
                  <p className="text-gray-600 font-medium">+90 532 315 0238</p>
                  <p className="text-gray-600 font-medium">+90 538 747 0238</p>
                </motion.a>
              </div>

              {/* Adres */}
              <div className="w-full md:w-1/3 p-4">
                <motion.a
                  href="https://maps.google.com/?q=Eski+Sanayi+Sitesi,+07010+Muratpaşa/Antalya"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className={cardStyle}
                >
                  <div className="flex items-center justify-center mb-6 w-14 h-14 mx-auto bg-white rounded-xl shadow">
                    <FaMapMarkedAlt className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl text-gray-900 font-bold mb-1">Adresimiz</h3>
                  <p className="text-gray-600 font-medium">Cumhuriyet Mahallesi</p>
                  <p className="text-gray-600 font-medium">Eski Sanayi Sitesi, 07010 Muratpaşa / Antalya</p>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
