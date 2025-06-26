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
    "Murat Nakliyat, 1995 yılından bu yana Antalya merkezli olarak Ege ve Akdeniz bölgelerinde otel taşımacılığı, evden eve nakliyat ve kurumsal lojistik alanında profesyonel hizmet sunmaktadır. Geniş araç filosu, zamanında teslimat ve müşteri memnuniyeti odaklı yaklaşımıyla sektörde öncü bir firmadır.",
  verification: {
    google: "mBLJtkJBJGCKjLhVhjROyACX1ZEzpRWk-cOZlnoqFc0"
  },


  keywords: [
    // Genel anahtar kelimeler
    "otel taşımacılığı",
    "nakliyat",
    "Antalya nakliyat",
    "lojistik firması",
    "profesyonel taşımacılık",
    "Antalya lojistik",
    "eşya taşıma hizmeti",
    "mobilya nakliyesi",
    "kurumsal nakliye",
    "şehirlerarası nakliyat",
    "taşımacılık firması",
    "kapalı kasa kamyonet",
    "taşıma şirketi",

    // Lokasyon bazlı anahtar kelimeler
    "Murat Nakliyat Alanya evden eve nakliye hizmeti",
    "Belek şehir içi ve şehirlerarası taşıma Murat Nakliyat",
    "Murat Nakliyat Bodrum ev taşımacılığı ve yük nakliyesi",
    "Didim profesyonel nakliye ve taşıma hizmeti Murat Nakliyat",
    "Fethiye güvenli ve hızlı nakliye Murat Nakliyat",
    "Göcek villa taşımacılığı özel nakliyat çözümleri",
    "Manavgat evden eve nakliyat ve eşya taşıma Murat Nakliyat",
    "Marmaris taşınmanın en kolay hali Murat Nakliyat"
  ],
  alternates: {
    canonical: "https://www.muratnakliyat95.com",
  },
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
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body>
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
