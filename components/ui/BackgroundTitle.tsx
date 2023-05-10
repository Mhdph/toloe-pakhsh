import { ArrowBackSvg } from "@/assets/svg";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  name: string;
};

function BackgroundTitle({ name }: Props) {
  const router = useRouter();
  function handleBackClick() {
    router.back();
  }
  return (
    <div className="pt-[74px]">
      <div className="serach_bar h-[60px] flex  rounded-b-3xl">
        <div className="flex items-center gap-2 mr-4">
          <div onClick={handleBackClick}>
            <ArrowBackSvg />
          </div>
          <p className="text-2xl font-normal text-white"> {name}</p>
        </div>
      </div>
    </div>
  );
}

export default BackgroundTitle;
