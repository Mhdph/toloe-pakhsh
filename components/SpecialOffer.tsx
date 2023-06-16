import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import Card from "./ui/Card";
import ListCard from "./ui/ListCard";
import Link from "next/link";

type SpecialOfferProps = {};

const SpecialOffer: React.FC<SpecialOfferProps> = () => {
  return (
    <div className="special_offer relative h-[564px] w-full md:h-full">
      <Image src={Logo} alt="logo" className="pt-8" />
      <p className="absolute right-6 top-1 mt-10 text-right text-2xl font-normal text-white md:right-20 md:top-2">
        تخفیفات ویژه
      </p>
      <div className="absolute right-4 top-28 flex items-center gap-3 md:hidden">
        <div className="h-[60px] w-[60px] rounded-3xl bg-white">
          <p></p>
          <p></p>
        </div>
        <div className="h-[60px] w-[60px] rounded-3xl bg-white">2</div>
        <div className="h-[60px] w-[60px] rounded-3xl bg-white">3</div>
        <div className="h-[60px] w-[60px] rounded-3xl bg-white">4</div>
      </div>
      <div className="absolute top-0 mt-48 flex w-full items-center gap-3 overflow-x-scroll scroll-smooth whitespace-nowrap 2xl:gap-8 px-4 py-2 scrollbar-none md:mt-32 md:justify-center">
        <ListCard /> <ListCard /> <ListCard /> <ListCard /> <ListCard />
      </div>
      <div className="mt-80 flex justify-center md:ml-40 md:mt-60 md:justify-end md:pb-10 2xl:ml-[420px]">
        <button className="h-9 w-[350px] rounded-3xl bg-white text-center text-xs font-extrabold text-[#f02d3c] md:w-[196px]">
          <Link href="/store">مشاهده محصولات</Link>
        </button>
      </div>
    </div>
  );
};
export default SpecialOffer;
