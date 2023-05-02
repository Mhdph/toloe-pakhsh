import {
  InstaSvg,
  LocationSvg,
  MailSvg,
  PhoneSvg,
  TelegramSvg,
} from "@/assets/svg";
import SubTractSvg from "@/assets/svg/SubTractSvg";
import React from "react";

function ContactUs() {
  return (
    <div className="contact_us mt-4 px-4 text-black-items mb-16">
      <div className="relative pt-12">
        <p className="text-white font-semibold text-4xl">با ما در تماس باشید</p>
        <div className="absolute left-2 -bottom-4 ">
          <SubTractSvg />
        </div>
      </div>
      <p className="text-white text-xs font-normal mt-4">
        همیشه پاسخگو شما هستیم
      </p>
      <hr className="border border-white my-3 round3" />
      <div className="flex flex-col gap-4 pb-10">
        <div className="flex flex-col items-center bg-white card_shadow rounded-3xl py-4">
          <LocationSvg />
          <p className="text-center text mt-3 font-extrabold">
            مشهد - طرحچی ۱۳ - انبار طلوع پخش
          </p>
          <p>(مراجعه فقط با هماهنگی)</p>
        </div>
        <div className="flex flex-col items-center bg-white card_shadow rounded-3xl py-4">
          <PhoneSvg />
          <p className="text-center text mt-3 font-extrabold">
            0990 731 52 43 - (051) 3883 45 78
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center bg-white px-8 card_shadow rounded-3xl py-4">
            <InstaSvg />
            <p className="text-center text mt-3 font-extrabold">TolouPakhsh@</p>
          </div>
          <div className="flex flex-col items-center bg-white px-8 card_shadow rounded-3xl py-4">
            <TelegramSvg />
            <p className="text-center text mt-3 font-extrabold">TolouPakhsh@</p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white card_shadow rounded-3xl py-4">
          <MailSvg />
          <p className="text-center text mt-3 font-extrabold">
            Contact@TolouPakhsh.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
