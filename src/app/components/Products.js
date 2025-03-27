import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    {
      slug: "mutfak_dolaplari",
      title: "Mutfak Dolapları",
      description:
        "Furkan Mobilya'nın modern mutfak dolaplarıyla mutfağınızı yeniden keşfedin.",
      image: "/mmutfak/1.jpg",
    },
    {
      slug: "vestiyer",
      title: "Vestiyerler",
      description:"Şıklığı ve düzeni bir araya getiren kullanışlı vestiyer modelleri.",
      image: "/vestiyer/v3.jpg",
    },
    
    {
      slug: "bedroom",
      title: "Yatak Odası",
      description:
        "Rahat ve lüks yatak odası mobilyaları ile her güne enerjik başlayın.",
      image: "/yyatakdolabi/2.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#b77c37] mb-8 text-center">
        Kategorilerimiz
      </h1>
      <div className="flex flex-wrap -m-4">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="w-full md:w-1/3 p-4 transition ease-in-out delay-180 hover:scale-105 duration-300"
          >
            <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={category.image}
                  alt={category.title}
                />
              </div>
              <div className="p-6">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
