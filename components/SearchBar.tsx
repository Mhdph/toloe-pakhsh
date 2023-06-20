import { CloseWhiteIcon, FilterIcon, UpDownIcon } from "@/assets/Icons";
import SearchBarSvg from "@/assets/svg/SearchBarSvg";
import React from "react";

function SearchBar() {
  return (
    <div className="pt-16 md:hidden">
      <div className="serach_bar px-4 w-full rounded-b-3xl h-[152px]">
        <div className="relative w-full pt-4">
          <input
            type="text"
            id="voice-search"
            className="bg-whit w-full rounded-[18px] pr-10 py-1.5 outline-none"
          />
          <div className="absolute inset-y-0 right-3 mt-3 flex items-center pr-4 pointer-events-none">
            <SearchBarSvg />
          </div>
        </div>
        <div className="flex items-center mt-4 justify-between">
          <div className="bg-white rounded-[14px] px-3 py-1.5 gap-2 flex items-center">
            <FilterIcon />
            <p className="font-extrabold text-xs ">فیلترها</p>
          </div>
          <p className="font-normal text-xs tracking-widest text-white">
            نمایش ۱ - ۱۶ از ۲۷۴ نتیجه
          </p>
          <div className="bg-white rounded-[14px] px-3 py-1.5 gap-2 flex items-center">
            <UpDownIcon />
          </div>
        </div>
        <hr className="mt-3 mb-2   opacity-25" />
        <div className="flex w-[90px] px-2 items-center gap-2  rounded-xl py-1 filter_background">
          <p className="text-white  font-normal text-[10px]">موجود در انبار</p>
          <CloseWhiteIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
