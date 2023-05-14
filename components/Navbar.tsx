import {
  AccoutIcon,
  ActiveHomeSvg,
  ActiveProfileSvg,
  ActiveSearch,
  ActiveStoreSvg,
  BucketBlackIcon,
  BucketIcon,
  HomeIcon,
  HomeSvg,
  LogoIcon,
  LogoSvg,
  MenuSvg,
  ProfileSvg,
  SearchSvg,
  StoreSvg,
} from "@/assets/svg";
import SearchBarSvg from "@/assets/svg/SearchBarSvg";
import { useRouter } from "next/router";
import React from "react";
import ActiveLink from "./ui/ActiveLink";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex md:hidden fixed z-50 bg-white justify-between items-center w-full h-[72px] navbar_shadow">
        <div className="navbar_bg_right flex items-center justify-center">
          <div className="cursor-pointer">
            <MenuSvg />
          </div>
        </div>
        <div className="mt-8">
          <LogoSvg />
        </div>
        <div className="navbar_bg_left flex items-center justify-center">
          <div className="cursor-pointer">
            <ActiveStoreSvg />
          </div>
        </div>
      </div>
      <div className="hidden md:inline">
        <div className="flex justify-between  py-6 items-center px-12">
          <LogoIcon />
          <div className="flex justify-between text-[14px] items-center gap-16">
            <p>وبلاگ</p>
            <p>درباره ما</p>
            <p>سیستم کسب درامد</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative  ">
              <input
                type="text"
                id="voice-search"
                className="bg-gray-200 w-[352px] rounded-[18px] pr-10 py-1.5 outline-none"
                placeholder="جستجو"
              />
              <div className="absolute inset-y-0 right-0  flex items-center pr-3 pointer-events-none">
                <SearchBarSvg />
              </div>
            </div>
            <div className="h-10 w-10 flex justify-center items-center bg-red-700 contact_us rounded-full">
              <BucketIcon />
            </div>
          </div>
        </div>
        <div className="flex h-10 flex-row-reverse w-full justify-between px-12 bg-[#E9EAEA]">
          <ActiveLink
            href="/profile"
            className="flex items-center gap-3 text-[14px] font-extrabold text-black-items"
            activeClassName="bg-white rounded-t-3xl px-24 text-[#F6622C] border-t border-t-[#F6622C]"
          >
            {router.pathname == "/profile" ? <ProfileSvg /> : <AccoutIcon />}
            <span className="text-xs py-2 font-black text-center">
              حساب کاربری
            </span>
          </ActiveLink>

          <ActiveLink
            href="/store"
            className="flex items-center gap-3 text-[14px] font-extrabold text-black-items"
            activeClassName="bg-white rounded-t-3xl px-24 text-[#F6622C] border-t border-t-[#F6622C]"
          >
            {router.pathname == "/store" ? <StoreSvg /> : <BucketBlackIcon />}
            <span className="text-xs font-black py-2">فروشگاه</span>
          </ActiveLink>
          <ActiveLink
            href="/search"
            className="flex items-center gap-3 text-[14px] font-extrabold text-black-items"
            activeClassName="bg-white rounded-t-3xl px-24 text-[#F6622C] border-t border-t-[#F6622C]"
          >
            {router.pathname == "/search" ? <SearchSvg /> : <SearchBarSvg />}
            <span className="text-xs font-black py-2 text-center">
              جست و جو
            </span>
          </ActiveLink>
          <ActiveLink
            href="/"
            className="flex items-center gap-3 text-[14px] font-extrabold text-black-items"
            activeClassName="bg-white rounded-t-3xl px-24 text-[#F6622C] border-t border-t-[#F6622C]"
          >
            {router.pathname == "/" ? <HomeSvg /> : <HomeIcon />}

            <span className="text-xs font-black py-2">خانه</span>
          </ActiveLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
