import React from 'react'

const Header = () => {
  return (
    <div>

<div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-5/12 px-4 mb-6 lg:mb-0">
                            <div className="flex flex-col h-full">
                                <img className="block w-full mb-6" src="asitrastudio-assets/headers/banner-left-medium.png" alt="Furkan Mobilya Ürünleri" />
                                <div className="py-10 px-10 h-full bg-white rounded-5xl">
                                    <h1 className="max-w-xs md:max-w-md font-heading text-5xl sm:text-7xl mb-4 tracking-tighter">
                                        Modern ve Özgün Mobilyalar
                                    </h1>
                                    <div className="max-w-sm ml-auto text-right">
                                        <span className="block mb-1 text-xs">Kuruluş</span>
                                        <span className="block mb-3 text-xs">2005</span>
                                        <p>
                                            <span className="block">Furkan Mobilya, modern tasarımlar ve kaliteli</span>
                                            <span className="block">üretimle yaşam alanlarınızı güzelleştiriyor.</span>
                                            <span className="block">Her detayda şıklık ve işlevsellik bir arada.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-7/12 px-4">
                            <div className="relative h-full">
                                <div className="absolute top-0 right-0 m-6 w-44 h-44 flex items-center justify-center">
                                    <img className="absolute top-0 left-0 animate-spinSlow" style={{ animationDirection: 'reverse' }} src="asitrastudio-assets/headers/spin-bonus.svg" alt="Furkan Mobilya Dekor" />
                                    <img className="relative" src="asitrastudio-assets/headers/arrow-spin.svg" alt="Furkan Mobilya İşaretçi" />
                                </div>
                                <img className="block h-full w-full rounded-5xl object-cover" src="/FFF.webp" alt="Furkan Mobilya Ürün Görseli" />
                            </div>
                        </div>
                    </div>
                </div>
      
    </div>
  )
}

export default Header
