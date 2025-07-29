"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <section className="relative pb-5 bg-coolGray-50 overflow-hidden">
                <nav>
                    <div className="container mx-auto px-4">
                        <div className="flex h-24 items-center">
                            <a className="inline-block" href="#">
                                <img className="h-[60px] md:h-[90px]" src="logo.png"  />
                            </a>
                            {/* Hamburger buton */}
                            <button
                                className="lg:hidden py-1 ml-auto z-30"
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Menüyü Aç"
                            >
                                <svg width={44} height={16} viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={44} height={2} rx={1} fill="black" />
                                    <rect y={14} width={44} height={2} rx={1} fill="black" />
                                </svg>
                            </button>
                            {/* Masaüstü menü */}
                            <div className="hidden lg:flex ml-auto mr-12 items-center">
                                <a className="inline-block hover:underline mr-10" href="#faq">Hakkımızda</a>
                                <a className="inline-block hover:underline mr-10" href="#products">Araçlarımız</a>
                                <a className="inline-block hover:underline mr-10" href="#past-services">Hizmetlerimiz</a>
                                <a className="inline-block hover:underline" href="#contacts">İletişim</a>
                            </div>
                            <a
                                className="group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200"
                                href="tel:+905387470238"
                            >
                                <span className="mr-2">Hemen başlayalım</span>
                                <span className="group-hover:rotate-45 transform transition duration-100">
                                    <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L1 9" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 8.33571V1H1.66429" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </nav>
                {/* Mobil Menü */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-50 flex"
                        >
                            {/* Arka plan */}
                            <div
                                className="fixed inset-0 bg-black bg-opacity-40"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                            {/* Menü paneli */}
                            <motion.nav
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="relative flex flex-col py-8 px-8 w-4/5 max-w-xs h-full bg-white shadow-2xl"
                            >
                                <div className="flex items-center mb-8">
                                    <a className="inline-block mr-auto" href="#">
                                        <img className="h-8" src="logo.png"  />
                                    </a>
                                    <button
                                        className="ml-4 p-2 rounded-full hover:bg-gray-100"
                                        onClick={() => setMobileMenuOpen(false)}
                                        aria-label="Menüyü Kapat"
                                    >
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <ul className="flex flex-col space-y-6 text-lg font-medium">
                                    <li><a className="block text-black hover:text-blue-600" href="#faq" onClick={() => setMobileMenuOpen(false)}>Hakkımızda</a></li>
                                    <li><a className="block text-black hover:text-blue-600" href="#products" onClick={() => setMobileMenuOpen(false)}>Araçlarımız</a></li>
                                    <li><a className="block text-black hover:text-blue-600" href="#past-services" onClick={() => setMobileMenuOpen(false)}>Hizmetlerimiz</a></li>
                                    <li><a className="block text-black hover:text-blue-600" href="#contacts" onClick={() => setMobileMenuOpen(false)}>İletişim</a></li>
                                </ul>
                                <a
                                    className="mt-10 block px-4 py-4 text-center font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                                    href="tel:+905387470238"
                                >
                                    Hemen Başlayalım
                                </a>
                            </motion.nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </>
    )
}

export default Navigation
