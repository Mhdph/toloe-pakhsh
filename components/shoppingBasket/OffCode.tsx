import React from "react";

function OffCode() {
  return (
    <div className="serach_bar flex flex-col text-white  h-[184px] mt-6">
      <div className="px-4 flex items-center justify-center flex-col gap-4 mt-6">
        <p className="text-2xl font-normal">کد تخفیف خود را وارد کنید</p>
        <input
          type="text"
          className="rounded w-full h-10 border border-solid border-gray-300 outline-none"
        />
        <button className="text-[#F6622C] rounded-3xl bg-white w-full py-1.5">
          اعمال کد
        </button>
      </div>
    </div>
  );
}

export default OffCode;
