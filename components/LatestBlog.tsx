import Image from "next/image";
import React from "react";
import SeeProduct from "./ui/SeeProduct";
import BlogCard from "./ui/BlogCard";
import ItemLogo from "@/assets/images/ItemLogo.png";

function LatestBlog() {
  return (
    <div className="md:px-10">
      <div className="relative mt-12 w-full">
        <Image alt="logo" src={ItemLogo} />
        <p className="absolute right-6 top-3 mt-2 text-right text-2xl font-normal text-black-items">
          تازه ترین مقالات
        </p>
        <div className="absolute top-5 my-12 flex w-full items-center gap-3 overflow-x-scroll scroll-smooth whitespace-nowrap px-4 py-2 scrollbar-none md:justify-center md:pr-16">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <div className="md:ml-40 md:mt-28">
        <SeeProduct link="" />
      </div>
    </div>
  );
}

export default LatestBlog;
