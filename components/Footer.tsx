"use client";
import React from "react";
import ActiveLink from "./ui/ActiveLink";
import {
  ActiveHomeSvg,
  HomeSvg,
  ActiveSearch,
  SearchSvg,
  ActiveStoreSvg,
  StoreSvg,
  ActiveProfileSvg,
  ProfileSvg,
} from "@/assets/svg";
import { usePathname } from "next/navigation";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const pathName = usePathname();

  return (
    <div className="lg:hidden">
      <div className="fixed bottom-0 left-0 z-50 h-16 w-full bg-white ">
        <div className="mx-auto grid h-full max-w-lg grid-cols-4 pt-1 font-medium">
          <ActiveLink
            href="/profile"
            className="inline-flex flex-col items-center justify-center border-gray-200 px-1 text-center"
            activeClassName="footer_bg border-none"
          >
            {pathName == "/profile" ? <ActiveProfileSvg /> : <ProfileSvg />}
            {pathName == "/profile" ? (
              <span className="py-2 text-center text-xs font-black text-white">
                حساب کاربری
              </span>
            ) : null}
          </ActiveLink>

          <ActiveLink
            href="/store"
            className="inline-flex flex-col items-center justify-center border-x border-gray-200 px-5 py-2  "
            activeClassName="footer_bg border-none"
          >
            {pathName == "/store" ? <ActiveStoreSvg /> : <StoreSvg />}
            {pathName == "/store" ? (
              <span className="py-2 text-xs font-black text-white">
                فروشگاه
              </span>
            ) : null}
          </ActiveLink>
          <ActiveLink
            href="/search"
            className="inline-flex flex-col items-center justify-center border-r border-gray-200  px-5 py-2  "
            activeClassName="footer_bg border-none"
          >
            {pathName == "/search" ? <ActiveSearch /> : <SearchSvg />}
            {pathName == "/search" ? (
              <span className="py-2 text-center text-xs font-black text-white">
                جست و جو
              </span>
            ) : null}
          </ActiveLink>
          <ActiveLink
            href="/"
            className="inline-flex flex-col items-center justify-center border-r border-gray-200  px-5 py-2  "
            activeClassName="footer_bg border-none"
          >
            {pathName == "/" ? <ActiveHomeSvg /> : <HomeSvg />}
            {pathName == "/" ? (
              <span className="py-2 text-xs font-black text-white">خانه</span>
            ) : null}
          </ActiveLink>
        </div>
      </div>
    </div>
  );
};
export default Footer;
