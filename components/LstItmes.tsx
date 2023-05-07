import ItemLogo from "@/assets/images/ItemLogo.png";
import React from "react";
import Image from "next/image";
import Card from "./ui/Card";
import SeeProduct from "./ui/SeeProduct";
type LstItmesProps = {};

const LstItmes: React.FC<LstItmesProps> = () => {
  return (
    <div className="md:px-10">
      <div className="mt-12 w-full relative">
        <Image alt="logo" src={ItemLogo} />
        <p className="text-black-items font-normal text-2xl text-right absolute mt-2 top-3 right-6">
          آخرین محصولات
        </p>
        <div className="w-full flex items-center gap-3 absolute py-2 px-4 top-5 whitespace-nowrap my-12 scroll-smooth overflow-x-scroll scrollbar-none md:justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="md:ml-16">
        <SeeProduct />
      </div>
    </div>
  );
};
export default LstItmes;
