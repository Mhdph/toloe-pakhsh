import { EditSvg, ProfilePicSvg } from "@/assets/svg";
import Navbar from "@/components/Navbar";
import BackgroundTitle from "@/components/ui/BackgroundTitle";
import ProfileInput from "@/components/ui/ProfileInput";
import React from "react";

function account() {
  return (
    <div className="mb-20">
      <Navbar />
      <BackgroundTitle name="اطلاعات حساب کاربری" />
      <div className="flex items-center justify-center mt-10">
        <ProfilePicSvg />
      </div>
      <div className="flex flex-col px-4 mt-7 gap-6">
        <ProfileInput label="نام*" placeholder="محمد حسین" />
        <ProfileInput label="نام خانوادگی*" placeholder="بدری" />
        <ProfileInput label="تاریخ تولد*" placeholder="۱۳۷۷/۰۳/۰۹" />
        <hr className="my-6 border opacity-50" />
        <div>
          <ProfileInput label=" شماره تلفن" placeholder="۰۹۲۳۲۵۳۲۹۱۳" />
          <p className="text-xs mt-1">
            برای تغییر شماره تلفن ارسال کد اعتبار سنجی الزامی است
          </p>
        </div>
        <ProfileInput
          label="کد ملی"
          placeholder="ـ  ـ  ـ  ـ  ـ  ـ  ـ  ـ  ـ  ـ  "
        />
        <ProfileInput label="ایمیل" placeholder="com.----@-----" />
        <hr className="my-6 border opacity-50" />
        <p className="text-2xl">آدرس ۱</p>
        <ProfileInput label="نام شهر" placeholder="مشهد" />
        <ProfileInput
          label="  آدرس"
          placeholder="احمد آباد - پاستور ۱۲ - پلاک ۲۴"
        />
        <button className="bg_primary text-xs font-extrabold text-white w-full py-2.5 rounded-3xl">
          افزودن آدرس جدید
        </button>
      </div>
    </div>
  );
}

export default account;
