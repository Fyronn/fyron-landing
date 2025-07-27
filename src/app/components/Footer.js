import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-6 relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Logo */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <a href="#" className="mb-4">
                        <img className="h-[60px] md:h-[90px]" src="logo.png" alt="Furkan Mobilya Logo" />
                    </a>
                    {/* Menü */}
                    <ul className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg font-medium mb-4">
                        <li><a className="hover:text-blue-400 hover:underline underline-offset-4 transition" href="#faq">Hakkımızda</a></li>
                        <li><a className="hover:text-blue-400 hover:underline underline-offset-4 transition" href="#products">Araçlarımız</a></li>
                        <li><a className="hover:text-blue-400 hover:underline underline-offset-4 transition" href="#past-services">Hizmetlerimiz</a></li>
                        <li><a className="hover:text-blue-400 hover:underline underline-offset-4 transition" href="#contacts">İletişim</a></li>
                    </ul>
                </div>
                {/* Copyright */}
                <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
                    © {new Date().getFullYear()} Furkan Mobilya. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    )
}

export default Footer
