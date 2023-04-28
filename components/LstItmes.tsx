import React from "react";
import ItemLogo from "@/assets/images/ItemLogo.png";
import Image from "next/image";
type LstItmesProps = {};

const LstItmes: React.FC<LstItmesProps> = () => {
  return (
    <div className="mt-12 w-full relative">
      <Image alt="logo" src={ItemLogo} />
      <p className="text-black-items font-normal text-2xl text-right absolute mt-2 top-3 right-6">
        آخرین محصولات
      </p>
      <div className="w-full flex items-center gap-3 absolute py-2 px-4 top-5 whitespace-nowrap my-12 scroll-smooth overflow-x-scroll scrollbar-none">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
      </div>
    </div>
  );
};
export default LstItmes;
