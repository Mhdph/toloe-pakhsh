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
import Link from "next/link";
import { cn } from "@/lib/cn";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const pathName = usePathname();

  return (
    <div className="lg:hidden">
      <div className="fixed bottom-0 left-0 z-50 h-16 w-full bg-white ">
        <div className="mx-auto grid h-full max-w-lg grid-cols-4 pt-1 font-medium">
          <Link
            href="/profile"
            className={cn(
              pathName === "/profile" ? "footer_bg border-none" : "",
              "inline-flex flex-col items-center justify-center px-1 text-center"
            )}
          >
            {pathName == "/profile" ? <ActiveProfileSvg /> : <ProfileSvg />}
            {pathName == "/profile" ? (
              <span className="py-2 text-center text-xs font-black text-white">
                حساب کاربری
              </span>
            ) : null}
          </Link>

          <Link
            href="/store"
            className={cn(
              pathName === "/store" ? "footer_bg border-none" : "",
              "inline-flex flex-col items-center justify-center px-1 text-center"
            )}
          >
            {pathName == "/store" ? <ActiveStoreSvg /> : <StoreSvg />}
            {pathName == "/store" ? (
              <span className="py-2 text-xs font-black text-white">
                فروشگاه
              </span>
            ) : null}
          </Link>
          <Link
            href="/search"
            className={cn(
              pathName === "/search" ? "footer_bg border-none" : "",
              "inline-flex flex-col items-center justify-center px-1 text-center"
            )}
          >
            {pathName == "/search" ? <ActiveSearch /> : <SearchSvg />}
            {pathName == "/search" ? (
              <span className="py-2 text-center text-xs font-black text-white">
                جست و جو
              </span>
            ) : null}
          </Link>
          <Link
            href="/"
            className={cn(
              pathName === "/" ? "footer_bg border-none" : "",
              "inline-flex flex-col items-center justify-center px-1 text-center"
            )}
          >
            {pathName == "/" ? <ActiveHomeSvg /> : <HomeSvg />}
            {pathName == "/" ? (
              <span className="py-2 text-xs font-black text-white">خانه</span>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
