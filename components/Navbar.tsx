"use client";
import {
  AccoutIcon,
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
import { usePathname } from "next/navigation";
import React from "react";
import ActiveLink from "./ui/ActiveLink";
import Link from "next/link";
import { cn } from "@/lib/cn";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="navbar_shadow fixed z-50 flex h-[72px] w-full items-center justify-between bg-white lg:hidden">
        <div className="navbar_bg_right flex items-center justify-center">
          <div className="cursor-pointer">
            <MenuSvg />
          </div>
        </div>
        <Link href="/" className="mt-8">
          <LogoSvg />
        </Link>
        <div className="navbar_bg_left flex items-center justify-center">
          <div className="cursor-pointer">
            <ActiveStoreSvg />
          </div>
        </div>
      </div>
      <div className="hidden lg:inline">
        <div className="flex items-center  justify-between px-12 py-6">
          <LogoIcon />
          <div className="flex items-center justify-between gap-16 text-[14px]">
            <p>وبلاگ</p>
            <p>درباره ما</p>
            <p>سیستم کسب درامد</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative  ">
              <input
                type="text"
                id="voice-search"
                className="w-[352px] rounded-[18px] bg-gray-200 py-1.5 pr-10 outline-none"
                placeholder="جستجو"
              />
              <div className="pointer-events-none absolute inset-y-0  right-0 flex items-center pr-3">
                <SearchBarSvg />
              </div>
            </div>
            <div className="contact_us flex h-10 w-10 items-center justify-center rounded-full bg-red-700">
              <BucketIcon />
            </div>
          </div>
        </div>
        <div className="flex h-10 w-full flex-row-reverse justify-between bg-[#E9EAEA] px-12">
          <Link
            href="/profile"
            className={cn(
              pathName === "/profile"
                ? "bg-white rounded-t-3xl  text-[#F6622C] border-t border-t-[#F6622C]"
                : "text-black-items",
              "flex items-center gap-3 px-24 text-[14px] font-extrabold"
            )}
          >
            {pathName == "/profile" ? <ProfileSvg /> : <AccoutIcon />}
            <span className="py-2 text-center text-xs font-black">
              حساب کاربری
            </span>
          </Link>

          <Link
            href="/store"
            className={cn(
              pathName === "/store"
                ? "bg-white rounded-t-3xl  text-[#F6622C] border-t border-t-[#F6622C]"
                : "text-black-items",
              "flex items-center gap-3 px-24 text-[14px] font-extrabold"
            )}
          >
            {pathName == "/store" ? <StoreSvg /> : <BucketBlackIcon />}
            <span className="py-2 text-xs font-black">فروشگاه</span>
          </Link>
          <Link
            href="/search"
            className={cn(
              pathName === "/search"
                ? "bg-white rounded-t-3xl  text-[#F6622C] border-t border-t-[#F6622C]"
                : "text-black-items",
              "flex items-center gap-3 px-24 text-[14px] font-extrabold"
            )}
          >
            {pathName == "/search" ? <SearchSvg /> : <SearchBarSvg />}
            <span className="py-2 text-center text-xs font-black">
              جست و جو
            </span>
          </Link>
          <Link
            href="/"
            className={cn(
              pathName === "/"
                ? "bg-white rounded-t-3xl  text-[#F6622C] border-t border-t-[#F6622C]"
                : "text-black-items",
              "flex items-center gap-3 px-24 text-[14px] font-extrabold"
            )}
          >
            {pathName == "/" ? <HomeSvg /> : <HomeIcon />}

            <span className="py-2 text-xs font-black">خانه</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
