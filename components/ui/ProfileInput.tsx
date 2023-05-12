import { EditSvg } from "@/assets/svg";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

function ProfileInput({ label, placeholder }: Props) {
  return (
    <div>
      <label className="font-black mb-1 text-xs" htmlFor="">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-2 top-2 pr-3">
          <EditSvg />
        </div>
        <input
          className="rounded py-1.5 text-right outline-none w-full border border-gray-300 placeholder:pr-1"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default ProfileInput;
