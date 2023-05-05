import { AvatarSvg } from "@/assets/svg";
import React from "react";

function ProfileInfo() {
  return (
    <div className="pt-[72px]">
      <div className="serach_bar h-32 flex items-center px-5 gap-4">
        <AvatarSvg />
        <div className="text-white text-xs font-normal flex-1">
          <p className="font-black">نام و نام خانوادگی</p>
          <hr className="borde border-solid border-white my-1 opacity-20" />
          <p>+۹۸ ۹۲۳ ۲۵۳ ۲۹ ۱۳</p>
          <hr className="borde border-solid border-white my-1 opacity-20" />
          <p>آدرس: خراسان رضوی - مشهد - ...</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
