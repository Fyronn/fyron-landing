import Image from "next/image";
import Products from "./components/Products";
import PastServices from "./components/PastServices";
import References from "./components/References";
import Contacts from "./components/Contacts";
import FAQ from "./components/FAQ";
import Header from "./components/Header";

export default function Home() {
  return (

    <div className="relative pb-10 bg-coolGray-50 overflow-hidden">
      <Header/>
      <Products/>
      <PastServices/>
      <FAQ/>
      <References/>
      <Contacts/>

    </div>


  );
}
