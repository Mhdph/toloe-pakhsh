import { ActiveStoreSvg, LogoSvg, MenuSvg } from "@/assets/svg";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex fixed z-50 bg-white justify-between items-center w-full h-[72px] navbar_shadow">
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
  );
};
export default Navbar;
