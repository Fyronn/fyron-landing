'use client'
import React, { useState } from "react";

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
    <div className="bg-gray-50 min-h-screen py-15">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Sıkça Sorulan Sorular
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between text-gray-800 text-lg font-semibold hover:text-blue-600 focus:outline-none"
              >
                {item.question}
                <span
                  className={`transform transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-4 text-gray-600 mb-4 text-sm">{item.answer}</p>
              </div>
              {index < faqData.length - 1 && <hr className="my-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
