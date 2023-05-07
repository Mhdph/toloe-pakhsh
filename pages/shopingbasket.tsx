import Navbar from "@/components/Navbar";
import ShoppingCard from "@/components/ShoppingCard";
import Checkout from "@/components/shoppingBasket/Checkout";
import OffCode from "@/components/shoppingBasket/OffCode";
import BackgroundTitle from "@/components/ui/BackgroundTitle";

function ShopingBasket() {
  return (
    <div>
      <Navbar />
      <BackgroundTitle name="سبد خرید" />
      <div className="px-4 mt-8 flex flex-col gap-2">
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
      </div>
      <OffCode />
      <Checkout />
      <div className="h-[222px] background-gray mb-16">
        <div className="pt-1 flex  flex-col gap-6">
          <p className="font-semibold mt-12 text-center text-4xl">تکرار خرید</p>
          <p className="text-xs font-normal text-center text-cente">
            شما میتوانید سفارشات پیشین خود را تکرار کنید.
          </p>
          <div className="flex justify-center px-4  md:justify-end text-white">
            <button className="btn_primary h-9 w-full text-xs font-extrabold">
              تاریخچه سفارشات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopingBasket;
