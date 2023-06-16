import Link from "next/link";
import React from "react";

interface SeeProductProps {
  link: string;
}

function SeeProduct({ link }: SeeProductProps) {
  return (
    <div className="flex justify-center md:justify-end text-white">
      <button className="btn_primary h-9 w-[350px] md:w-[196px] mt-48 mb-16 text-xs font-extrabold">
        <Link href={`store?q=${link}`}>مشاهده محصولات</Link>
      </button>
    </div>
  );
}

export default SeeProduct;
