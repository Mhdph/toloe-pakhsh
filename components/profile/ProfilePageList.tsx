import { ArrowOrangeSvg } from "@/assets/svg";
import { ProfileLinkListItem } from "@/constant/List";
import Link from "next/link";
import React from "react";

function ProfilePageList() {
  return (
    <div className="mt-8">
      {ProfileLinkListItem.map((item) => (
        <div key={item.url}>
          <div className="flex items-center justify-between px-3">
            <Link
              className="text-base font-semibold text-black-items"
              href={item.url}
            >
              {item.name}
            </Link>
            <ArrowOrangeSvg />
          </div>
          <hr className="border border-solid border-[#F6602D] opacity-50 my-4" />
        </div>
      ))}
      <div className="flex items-center justify-between px-3">
        <p className="text-base font-semibold text-black-items">خروج </p>
        <ArrowOrangeSvg />
      </div>
      <hr className="border border-solid border-[#F6602D] opacity-50 my-4" />
    </div>
  );
}

export default ProfilePageList;
