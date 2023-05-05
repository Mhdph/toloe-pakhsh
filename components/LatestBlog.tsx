import Image from "next/image";
import React from "react";
import SeeProduct from "./ui/SeeProduct";
import BlogCard from "./ui/BlogCard";
import ItemLogo from "@/assets/images/ItemLogo.png";

function LatestBlog() {
  return (
    <div>
      <div className="mt-12 w-full relative">
        <Image alt="logo" src={ItemLogo} />
        <p className="text-black-items font-normal text-2xl text-right absolute mt-2 top-3 right-6">
          تازه ترین مقالات
        </p>
        <div className="w-full flex items-center gap-3 absolute py-2 px-4 top-5 whitespace-nowrap my-12 scroll-smooth overflow-x-scroll scrollbar-none">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <SeeProduct />
    </div>
  );
}

export default LatestBlog;
