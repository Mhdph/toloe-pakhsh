import {
  AbousUsSvgLeft,
  AboutUsSvgRight,
  InstaSvg,
  InstagramIcon,
  LocationIcon,
  LocationSvg,
  MailIcon,
  MailSvg,
  PhoneIcon,
  PhoneSvg,
  TelegramIcon,
  TelegramSvg,
} from "@/assets/svg";
import SubTractSvg from "@/assets/svg/SubTractSvg";
import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="contact_us mt-4 px-4 text-black-items mb-16 md:mb-0 md:hidden">
        <div className="relative pt-12">
          <p className="text-white font-semibold text-4xl">
            با ما در تماس باشید
          </p>
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
              <p className="text-center text mt-3 font-extrabold">
                TolouPakhsh@
              </p>
            </div>
            <div className="flex flex-col items-center bg-white px-8 card_shadow rounded-3xl py-4">
              <TelegramSvg />
              <p className="text-center text mt-3 font-extrabold">
                TolouPakhsh@
              </p>
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
      <div className="hidden md:inline">
        <div className="px-60 h-96 pb-20 flex justify-between contact_us">
          <div className="absolute right-1 pt-8 pr-10 xl:pr-16">
            <AboutUsSvgRight />
          </div>
          <div className="mt-16 text-white text-center flex-grow">
            <p className="text-4xl font-semibold mr-5">با ما در تماس باشید</p>
            <p className="text-xs font-normal  mt-2 mr-5">
              همیشه پاسخگو شما هستیم
            </p>
            <hr className="border border-opacity-60 mt-4 border-white" />
            <div className="flex justify-between text-xs mt-4">
              <div className="flex flex-col items-center gap-1">
                <PhoneIcon />
                <p className="text-center  mt-3 font-extrabold">
                  0990 731 52 43 - (051) 3883 45 78
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <LocationIcon />
                <p className="text-center  mt-3 font-extrabold">
                  مشهد - طرحچی ۱۳ - انبار طلوع پخش
                </p>
                <p>(مراجعه فقط با هماهنگی)</p>
                <div className="flex items-center justify-center mt-10 gap-4">
                  <div className="bg-white flex items-center justify-center h-12 w-12 rounded-full">
                    <TelegramIcon />
                  </div>
                  <div className="bg-white flex items-center justify-center h-12 w-12 rounded-full">
                    <InstagramIcon />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <MailIcon />
                <p className="text-center  mt-3 font-extrabold">
                  Contact@TolouPakhsh.com
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1 pt-8 pl-10 xl:pl-16">
            <AbousUsSvgLeft />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
