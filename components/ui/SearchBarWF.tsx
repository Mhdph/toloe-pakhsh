import SearchBarSvg from "@/assets/svg/SearchBarSvg";
import React from "react";

function SearchBarWF() {
  return (
    <div className="serach_bar w-full rounded-b-3xl h-[68px]">
      <div className="relative w-full px-4 pt-4">
        <input
          type="text"
          id="voice-search"
          className="bg-whit w-full rounded-[18px] pr-10 py-1.5 outline-none"
        />
        <div className="absolute inset-y-0 right-3 mt-3 flex items-center pr-4 pointer-events-none">
          <SearchBarSvg />
        </div>
      </div>
    </div>
  );
}

export default SearchBarWF;
