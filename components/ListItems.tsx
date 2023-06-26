import ItemLogo from "@/assets/images/ItemLogo.png";
import React from "react";
import Image from "next/image";
import SeeProduct from "./ui/SeeProduct";
import ListCard from "./ui/ListCard";
import { ProductData } from "@/types";
type ListItemsProps = {
  title: string;
  link: string;
  data: ProductData;
};

const ListItems: React.FC<ListItemsProps> = ({ title, link, data }) => {
  return (
    <div className="md:px-10">
      <div className="relative mt-12 w-full">
        <Image alt="logo" src={ItemLogo} />
        <p className="absolute right-6 top-3 mt-2 text-right text-2xl font-normal text-black-items">
          {title}
        </p>
        <div>
          <div className="absolute top-5 my-12 flex w-full items-center gap-3 overflow-x-scroll scroll-smooth whitespace-nowrap px-4 py-2 scrollbar-none md:justify-center 2xl:gap-8">
            {data.map((item) => (
              <ListCard key={item.id} data={item} />
            ))}
          </div>
          <div className="mt-5  flex justify-center ">
            <div className="2xl:w-[1100px] w-[1030px]">
              <SeeProduct link={link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListItems;
