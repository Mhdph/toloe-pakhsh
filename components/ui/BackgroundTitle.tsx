import { ArrowBackSvg } from "@/assets/svg";
import React from "react";

type Props = {
  name: string;
};

function BackgroundTitle({ name }: Props) {
  return (
    <div className="pt-[74px]">
      <div className="serach_bar h-[60px] flex  rounded-b-3xl">
        <div className="flex items-center gap-2 mr-4">
          <ArrowBackSvg />
          <p className="text-2xl font-normal text-white"> {name}</p>
        </div>
      </div>
    </div>
  );
}

export default BackgroundTitle;
