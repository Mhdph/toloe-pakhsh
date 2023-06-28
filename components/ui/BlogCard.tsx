import { EyeIcon } from "@/assets/Icons";
import coffe from "@/assets/tempImages/coffe.png";
import Image from "next/image";

function BlogCard() {
  return (
    <div className="h-[264px] min-w-[170px] max-w-[170px] rounded-3xl border border-black-items border-opacity-40 bg-white md:h-[372px] md:min-w-[304px] md:max-w-[304px]">
      <Image
        src={coffe}
        alt="product image"
        height={120}
        className="w-full rounded-t-3xl border-b"
      />
      <div className="mt-2 px-2">
        <div className="flex items-center justify-between ">
          <p className="text-[8px] font-normal text-black-items md:text-xs">
            ۱۵ / ۱۲ / ۱۴۰۱
          </p>
          <div className="flex items-center gap-1">
            <p className="text-[8px] font-normal text-black-items md:text-xs">
              ۱۲
            </p>
            <EyeIcon />
          </div>
        </div>
        <p className="mt-2 text-xs font-black md:text-sm">
          مزایای شکلات تلخ برای آقایان
        </p>
        <hr className="my-1" />
        <p className="h-4  text-ellipsis whitespace-normal  text-[10px] font-normal text-black-items md:text-sm">
          شکلات تلخ دارای مزایای بسیاری است که از نظر علمی ثابت شده و فواید
          زیادی برای آقایان و بانوان دارد.
        </p>
        <div className="mt-12 flex items-center gap-4 md:mt-16">
          <button className="btn_primary flex w-full items-center justify-around rounded-[18px] py-2 text-xs font-extrabold text-white">
            ادامه مطلب
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
