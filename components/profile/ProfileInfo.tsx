import { AvatarIcon } from "@/assets/Icons";
import React from "react";

function ProfileInfo() {
  return (
    <div className="pt-[72px] md:pt-8 ">
      <div className="serach_bar flex h-full items-center gap-4 rounded-t-3xl px-5 py-4 md:flex-col">
        <AvatarIcon />
        <div className="flex-1 text-xs font-normal text-white md:text-center">
          <p className="font-black">نام و نام خانوادگی</p>
          <hr className="borde my-1 border-solid border-white opacity-20" />
          <p>+۹۸ ۹۲۳ ۲۵۳ ۲۹ ۱۳</p>
          <hr className="borde my-1 border-solid border-white opacity-20" />
          <p>آدرس: خراسان رضوی - مشهد - ...</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
