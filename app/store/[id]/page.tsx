import StarSvg from "@/assets/Icons/StarIcon";
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
import MiddleIcon from "@/components/ui/MiddleIcon";
import {
  FavouriteIcon,
  MiniBucketIcon,
  MinusIcon,
  PlusIcon,
  ShareIcon,
} from "@/assets/Icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import ContactUs from "@/components/ContactUs";
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
          <div className="md:grid md:grid-cols-3 md:px-10 md:mt-7">
            <div className="md:col-span-1">
              <Image
                src={item.picture}
                alt={item.name}
                width={390}
                height={200}
                className="h-[200px]"
              />
            </div>
            <div className="flex font-semibold flex-col px-4 md:col-span-2 md:bg-white md:shadow-2xl md:rounded-3xl md:p-4">
              <div className="flex items-center justify-between">
                <p className=" text-4xl md:text-5xl ">{item.name}</p>
                <StarSvg />
              </div>
              <p className="mt-3 text-base md:text-xl">طرح سگ ۲۴ عددی</p>
              <hr className="my-2" />
              <div className="flex items-center justify-between">
                <p className="text-base">برند:</p>
                <p className="text-xs font-normal text-black-items">
                  {item.brand}
                </p>
              </div>
              <hr className="my-2" />
              <div className="flex items-center justify-between">
                <p className="text-base md:text-xl">قیمت:</p>
                <div className="flex items-center">
                  <p className="text-xs font-black md:text-ca">{item.price}</p>
                  <span className="mr-1 text-[10px] font-normal opacity-60 md:text-xs">
                    تومان
                  </span>
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex items-center justify-between">
                <p className="text-base md:text-[20px]">واحد:</p>
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
                <p className="text-base md:text-xl">تعداد:</p>
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
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MiddleIcon>
                  <ShareIcon />
                </MiddleIcon>
                <MiddleIcon>
                  <FavouriteIcon />
                </MiddleIcon>
                <MiddleIcon>
                  <MiniBucketIcon />
                </MiddleIcon>
              </div>
            </div>
          </div>
          <Tabs defaultValue="product details" className="mt-4 md:px-10">
            <TabsList className="flex justify-end gap-2">
              <TabsTrigger value="compare">مقایسه</TabsTrigger>
              <hr className="border-l h-6 border-black-items border-opacity-25" />
              <TabsTrigger value="comment">نظر خریداران</TabsTrigger>
              <hr className="border-l h-6 border-black-items border-opacity-25" />
              <TabsTrigger value="product details">مشخصات محصول</TabsTrigger>
            </TabsList>
            <TabsContent
              className="justify-start md:flex md:flex-row md:justify-between"
              value="product details"
            >
              <div className="flex items-center justify-between md:flex-col-reverse">
                <p className="text-xs font-normal text-black-items md:text-sm opacity-60">
                  توضیحات
                </p>
                <p className="text-base md:text-xl">:عنوان</p>
              </div>
              <hr className="my-2" />
              <div className="flex items-center justify-between md:flex-col-reverse">
                <p className="text-xs font-normal text-black-items md:text-sm opacity-60">
                  توضیحات
                </p>
                <p className="text-base md:text-xl">:عنوان</p>
              </div>
              <hr className="my-2" />
              <div className="flex items-center justify-between md:flex-col-reverse">
                <p className="text-xs font-normal text-black-items md:text-sm opacity-60">
                  توضیحات
                </p>
                <p className="text-base md:text-xl">:عنوان</p>
              </div>
              <hr className="my-2 md:hidden" />
            </TabsContent>
            <TabsContent value="comment"></TabsContent>
            <TabsContent value="compare"></TabsContent>
          </Tabs>
        </div>
      ))}
      <div className="hidden md:inline">
        <ContactUs />
      </div>
    </div>
  );
}

export default SingleProduct;
