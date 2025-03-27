export default function CategoryPage({ params }) {
  const { category } = params;

  const categoryData = {
    mutfak_dolaplari: {
      title: "Şık ve Fonksiyonel Mutfak Dolapları",
      description: "Furkan Mobilya’nın zarif ve işlevsel mutfak dolaplarını keşfedin. Uzmanlıkla tasarlanan modellerimiz, maksimum depolama kapasitesi, ergonomik düzen ve modern estetik ile mutfağınızı hem şık hem de kullanışlı bir alana dönüştürür.",
      products: [
        { id: 1, image: "/mmutfak/1.jpg" },
        { id: 2, image: "/mmutfak/2.jpg" },
        { id: 3, image: "/mmutfak/3.jpg" },
        { id: 4, image: "/mmutfak/4.jpg" },
        { id: 5, image: "/mmutfak/5.jpg" },
        { id: 6, image: "/mmutfak/6.jpg" },
      ],
    },
    vestiyer: {
      title: "Dining Room Furniture",
      description: "Elegant dining room furniture for memorable moments.",
      products: [
        { id: 1, image: "/vvestiyer/1.jpg" },
        { id: 2, image: "/vvestiyer/2.jpg" },
        { id: 3, image: "/vvestiyer/3.jpg" },
        { id: 4, image: "/vvestiyer/4.jpg" },
        { id: 5, image: "/vvestiyer/5.jpg" },
        { id: 6, image: "/vvestiyer/6.jpg" },
      ],
    },
    bedroom: {
      title: "Bedroom Furniture",
      description: "Luxurious and comfortable bedroom sets.",
      products: [
        { id: 1, image: "/yyatakdolabi/1.jpg" },
        { id: 2, image: "/yyatakdolabi/7.jpg" },
        { id: 3, image: "/yyatakdolabi/3.jpg" },
        { id: 4, image: "/yyatakdolabi/4.jpg" },
        { id: 5, image: "/yyatakdolabi/5.jpg" },
        { id: 6, image: "/yyatakdolabi/6.jpg" },
      ],
    },
  };

  const categoryContent = categoryData[category];

  if (!categoryContent) {
    return (
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-red-600">Category bulunamadı</h1>
        <p className="text-gray-600">Lütfen geçerli bir kategori seçiniz.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{categoryContent.title}</h1>
      <p className="text-gray-600 mb-10">{categoryContent.description}</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryContent.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
          >

            <div className="relative">
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-[270px] object-cover transition-transform duration-400 group-hover:scale-105"
              />

              <div className="absolute inset-0 border-3 border-transparent group-hover:border-[#b77c37] rounded-lg transition duration-400"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
