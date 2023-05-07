import Image from "next/image";
import React from "react";
import Sohan from "@/assets/tempImages/sohan.png";
import StarSvg from "@/assets/svg/StarSvg";
import CloseSvg from "@/assets/svg/CloseSvg";
import ShoppingCard from "@/components/ShoppingCard";
import Navbar from "@/components/Navbar";

function ShopingBasket() {
  return (
    <div>
      <Navbar />
      <div></div>
      <div className="px-4 mt-2 flex flex-col gap-2">
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
      </div>
    </div>
  );
}

export default ShopingBasket;
