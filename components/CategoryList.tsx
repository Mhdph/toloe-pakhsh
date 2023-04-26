import { CategoryListItem } from "@/constant/List";
import Image, { StaticImageData } from "next/image";
import React from "react";
type CategoryListProps = {};

interface CategoryListItems {
  name: string;
  image: StaticImageData;
}

const CategoryList: React.FC<CategoryListProps> = () => {
  return (
    <div className="flex items-center justify-center mt-4 flex-col">
      <div className="flex items-center justify-center flex-wrap gap-2">
        {CategoryListItem.map((item: CategoryListItems) => (
          <div key={item.name} className="category_card">
            <div>
              <Image
                src={item.image}
                alt={item.name}
                className="rounded-t-3xl"
              />
              <p className="text-center text-xs font-extrabold text-[#253031] mt-3">
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
