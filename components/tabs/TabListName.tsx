import React from "react";

interface TabListNameProps {
  openTab: number;
  setOpenTab: ({ number }: any) => void;
  TabNumber: number;
  TabName: string;
}

function TabListName({
  openTab,
  setOpenTab,
  TabNumber,
  TabName,
}: TabListNameProps) {
  return (
    <li className="text-center cursor-pointer ">
      <a
        className={
          "text-xs text-[#929798] " +
          (openTab === TabNumber ? "font-black text-black" : "")
        }
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(TabNumber);
        }}
        data-toggle="tab"
        role="tablist"
      >
        <div className="flex items-center  gap-1">
          <p className="font-black text-xs">{TabName}</p>
        </div>
      </a>
      {/* <hr
          className={
            openTab === TabNumber
              ? "border-b relative top-[1.15rem] border-white "
              : ""
          }
        /> */}
    </li>
  );
}

export default TabListName;
