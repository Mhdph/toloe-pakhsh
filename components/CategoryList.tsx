import { CategoryListItem } from "@/constant/List";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CategoryListProps {
  data: [
    {
      name: string;
      picture: string;
    }
  ];
}

const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  return (
    <div className="flex items-center justify-center mt-4 flex-col">
      <p className="text-2xl font-normal text-black-items mb-1 lg:mb-3">
        دسته بندی محصولات
      </p>
      <div className="flex items-center justify-center flex-wrap gap-2">
        {data.map((item) => (
          <div key={item.name} className="category_card">
            <div>
              <Image
                height={110}
                width={110}
                src={item.picture}
                className="mt-3"
                alt={item.name}
              />
              <p className="text-center text-xs font-extrabold text-black-items">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
