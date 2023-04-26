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
import { useRouter } from "next/router";
import React from "react";
import ActiveLink from "./ui/ActiveLink";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();

  return (
    <div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white ">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <ActiveLink
            href="/"
            className="inline-flex flex-col items-center justify-center px-5 py-2  border-gray-200 border-r  "
            activeClassName="footer_bg border-none"
          >
            {router.pathname == "/" ? <ActiveHomeSvg /> : <HomeSvg />}
            {router.pathname == "/" ? (
              <span className="text-xs font-black py-2 text-white">خانه</span>
            ) : null}
          </ActiveLink>
          <ActiveLink
            href="/search"
            className="inline-flex flex-col items-center justify-center px-5 py-2  border-gray-200 border-r  "
            activeClassName="footer_bg border-none"
          >
            {router.pathname == "/search" ? <ActiveSearch /> : <SearchSvg />}
            {router.pathname == "/search" ? (
              <span className="text-xs font-black py-2 text-center text-white">
                جست و جو
              </span>
            ) : null}
          </ActiveLink>
          {/* <hr className="border-x border-rose-500" /> */}
          <ActiveLink
            href="/store"
            className="inline-flex flex-col items-center justify-center px-5 py-2 border-gray-200 border-x  "
            activeClassName="footer_bg border-none"
          >
            {router.pathname == "/store" ? <ActiveStoreSvg /> : <StoreSvg />}
            {router.pathname == "/store" ? (
              <span className="text-xs font-black py-2 text-white">
                فروشگاه
              </span>
            ) : null}
          </ActiveLink>
          <ActiveLink
            href="/profile"
            className="inline-flex flex-col items-center justify-center px-1 text-center border-gray-200"
            activeClassName="footer_bg border-none"
          >
            {router.pathname == "/profile" ? (
              <ActiveProfileSvg />
            ) : (
              <ProfileSvg />
            )}
            {router.pathname == "/profile" ? (
              <span className="text-xs py-2 font-black text-center text-white">
                حساب کاربری
              </span>
            ) : null}
          </ActiveLink>
        </div>
      </div>
    </div>
  );
};
export default Footer;
