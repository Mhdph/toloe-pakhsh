import StarSvg from "@/assets/svg/StarSvg";
import { getOneProduct } from "@/lib/dataFn";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import MinusIcon from "@/assets/svg/MinusIcon";
import PlusIcon from "@/assets/svg/PlusIcon";
import MiddleIcon from "@/components/ui/MiddleIcon";

interface productData {
  id: number;
  name: string;
  unit: string;
  unitCount: string;
  price: number;
  picture: string;
  brand: string;
  exist: boolean;
}

async function SingleProduct({ params: { id } }: { params: { id: number } }) {
  const data = await getOneProduct(id);
  console.log(data);
  return (
    <div>
      {data.map((item: productData) => (
        <div key={item.id}>
          <Image
            src={item.picture}
            alt={item.name}
            width={390}
            height={200}
            className="h-[200px]"
          />
          <div className="flex font-semibold flex-col px-4">
            <div className="flex items-center justify-between">
              <p className=" text-4xl ">{item.name}</p>
              <StarSvg />
            </div>
            <p className="mt-3 text-base ">طرح سگ ۲۴ عددی</p>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <p className="text-base">برند:</p>
              <p className="text-xs font-normal text-black-items">
                {item.brand}
              </p>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <p className="text-base">قیمت:</p>
              <div className="flex items-center">
                <p className="text-xs font-black md:text-ca">{item.price}</p>
                <span className="mr-1 text-[10px] font-normal opacity-60 md:text-xs">
                  تومان
                </span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <p className="text-base">واحد:</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="یک کیلو گرم" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <p className="text-base">تعداد:</p>
              <div className="flex items-center gap-2">
                <MiddleIcon>
                  <MinusIcon />
                </MiddleIcon>
                <div className="numberItemBg h-9 w-[74px] flex items-center justify-center ">
                  1
                </div>
                <MiddleIcon>
                  <PlusIcon />
                </MiddleIcon>
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-center gap-2">
              <MiddleIcon>
                <PlusIcon />
              </MiddleIcon>
              <MiddleIcon>
                <PlusIcon />
              </MiddleIcon>
              <MiddleIcon>
                <PlusIcon />
              </MiddleIcon>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SingleProduct;
