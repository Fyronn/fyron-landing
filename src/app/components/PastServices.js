import React from "react";

const Yaptiklarimiz = () => {
    return (
        <div>
            <>
                <section className="py-10 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="py-16 px-8 bg-white rounded-3xl">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-10 md:max-w-2xl items-center justify-center text-center mx-auto">
                                    <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">
                                        Projelerimiz
                                    </span>
                                    <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                                        En Son Yaptıklarımız
                                    </h2>
                                    <p className="text-gray-500 font-bold">
                                        Mobilya şirketimizin özenle tamamladığı son projelere göz atın. Şıklık ve fonksiyonelliği bir araya getiriyoruz.
                                    </p>
                                </div>

                                <div className="flex flex-wrap -m-4 mb-12">
                                    {/* Proje 1 */}
                                    <div className="w-full md:w-1/2 p-4">
                                        <div className="relative group">
                                            <img
                                                className="w-full h-72 object-cover rounded-lg"
                                                src="/FF1.webp"
                                                alt="Modern Oturma Odası"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                                <div className="text-center text-white px-6">
                                                    <h3 className="text-2xl font-bold">Oturma Odası</h3>
                                                    <p className="mt-2 text-sm">
                                                        Modern ve rahat bir oturma odası tasarımı.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Proje 2 */}
                                    <div className="w-full md:w-1/2 p-4">
                                        <div className="relative group">
                                            <img
                                                className="w-full h-72 object-cover rounded-lg"
                                                src="/FF2.webp"
                                                alt="Şık Yemek Odası"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                                <div className="text-center text-white px-6">
                                                    <h3 className="text-2xl font-bold">Yemek Odası</h3>
                                                    <p className="mt-2 text-sm">
                                                        Şıklığı ve konforu birleştiren yemek odası tasarımı.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Proje 3 */}
                                    <div className="w-full md:w-1/2 p-4">
                                        <div className="relative group">
                                            <img
                                                className="w-full h-72 object-cover rounded-lg"
                                                src="/FF3.webp"
                                                alt="Lüks Yatak Odası"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                                <div className="text-center text-white px-6">
                                                    <h3 className="text-2xl font-bold">Yatak Odası</h3>
                                                    <p className="mt-2 text-sm">
                                                        Lüks ve huzurlu bir yatak odası tasarımı.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Proje 4 */}
                                    <div className="w-full md:w-1/2 p-4">
                                        <div className="relative group">
                                            <img
                                                className="w-full h-72 object-cover rounded-lg"
                                                src="/FF4.webp"
                                                alt="Şık Ofis Tasarımı"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                                <div className="text-center text-white px-6">
                                                    <h3 className="text-2xl font-bold">Ofis</h3>
                                                    <p className="mt-2 text-sm">
                                                        Şık ve ergonomik bir ofis mobilyası tasarımı.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap md:justify-center -m-2">
                                    <div className="w-full md:w-auto p-2">
                                        {/* <a
                                            className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                                            href="#"
                                        >
                                            Tüm Projelerimizi Gör
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    );
};

export default Yaptiklarimiz;
