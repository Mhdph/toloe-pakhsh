import Navbar from "@/components/Navbar";
import BlogCard from "@/components/ui/BlogCard";
import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";

function blog() {
  return (
    <div>
      <Navbar />
      <div className="pt-[74px]">
        <div className="serach_bar w-full h-[128px] rounded-b-3xl">
          <div className="relative">
            <Image src={Logo} alt="logo" className="pt-8 pr-9" />
            <div className="absolute text-center bottom-11 right-[82px] text-white">
              <p className="font-semibold text-4xl">وبلاگ</p>
              <p className="font-normal text-xs mt-4">
                بهترین و بروز ترین مقالات را از اینجا دنبال کنید ..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  max-w-[390px] min-w-[390px] flex-wrap px-2 justify-center gap-2 mt-4">
        <BlogCard />
        <BlogCard />
        <BlogCard /> <BlogCard />
      </div>
    </div>
  );
}

export default blog;
