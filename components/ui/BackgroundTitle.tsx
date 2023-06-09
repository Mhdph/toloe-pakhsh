"use client";
import { ArrowBackIcon } from "@/assets/Icons";
import { useRouter } from "next/navigation";
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
    <div className="pt-[74px] md:hidden">
      <div className="serach_bar flex h-[60px]  rounded-b-3xl">
        <div className="mr-4 flex items-center gap-2">
          <div onClick={handleBackClick}>
            <ArrowBackIcon />
          </div>
          <p className="text-2xl font-normal text-white"> {name}</p>
        </div>
      </div>
    </div>
  );
}

export default BackgroundTitle;
