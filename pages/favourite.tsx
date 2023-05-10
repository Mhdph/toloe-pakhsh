import { FilterSvg, UpDownSvg } from "@/assets/svg";
import Navbar from "@/components/Navbar";
import BackgroundTitle from "@/components/ui/BackgroundTitle";
import Card from "@/components/ui/Card";
import React from "react";

function favourite() {
  return (
    <div>
      <Navbar />
      <BackgroundTitle name="موارد دلخواه" />
      <div className="flex items-center justify-between px-4 mt-6">
        <p className="font-normal text-xs tracking-wider text-black-items">
          نمایش ۱ - ۱۶ از ۲۷۴ موارد
        </p>

        <div className="border-black-items h-[30px] w-[30px] flex items-center justify-center border rounded-full">
          <div className="">
            <UpDownSvg />
          </div>
        </div>
      </div>
      <div className="flex  max-w-[390px] min-w-[390px] flex-wrap px-2 justify-center gap-2 mt-6">
        <Card />
        <Card />
        <Card /> <Card />
      </div>
    </div>
  );
}

export default favourite;
