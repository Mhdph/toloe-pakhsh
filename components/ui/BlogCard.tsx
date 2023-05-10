import { EyeSvg } from "@/assets/svg";
import coffe from "@/assets/tempImages/coffe.png";
import Image from "next/image";

function BlogCard() {
  return (
    <div className="card">
      <Image
        src={coffe}
        alt="product image"
        height={120}
        width={170}
        className="border-b rounded-t-3xl"
      />
      <div className="px-2 mt-2">
        <div className="flex items-center justify-between ">
          <p className="font-normal text-[8px] text-black-items">
            ۱۵ / ۱۲ / ۱۴۰۱
          </p>
          <div className="flex gap-1 items-center">
            <p className="font-normal text-[8px] text-black-items">۱۲</p>
            <EyeSvg />
          </div>
        </div>
        <p className="text-xs font-black mt-2">مزایای شکلات تلخ برای آقایان</p>
        <hr className="my-1" />
        <p className="font-normal  text-[10px]   text-ellipsis h-4 text-black-items whitespace-normal">
          شکلات تلخ دارای مزایای بسیاری است که از نظر علمی ثابت شده و فواید
          زیادی برای آقایان و بانوان دارد.
        </p>
        <div className="flex items-center gap-4 mt-12">
          <button className="btn_primary justify-around rounded-[18px] w-full py-2 text-white flex items-center text-xs font-extrabold">
            ادامه مطلب
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
