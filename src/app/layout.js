import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Murat Nakliyat | Otel Taşımacılığı ve Lojistik Hizmetleri - 1995'ten Beri",
  description:
    "Murat Nakliyat, 1995 yılından bu yana Ege ve Akdeniz bölgelerinde otel taşımacılığı alanında güvenilir ve profesyonel lojistik hizmetler sunmaktadır. Geniş araç filosu, zamanında teslimat ve müşteri memnuniyeti odaklı yaklaşımıyla sektörde öncü firma.",
    icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico", 
  other: [
    {
      rel: "icon",
      url: "/favicon-192.png",
      sizes: "200x200",
      type: "image/png",
    },
  ],
}

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      <body>
        <Navigation/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
