import React from "react";
import TabListName from "./TabListName";

interface TabListProps {
  openTab: number;
  setOpenTab: ({ number }: any) => void;
}

function TabList({ openTab, setOpenTab }: TabListProps) {
  return (
    <ul
      className="flex gap-12 justify-center border-gray-300  border-b-2 mt-6 items-center mb-0 px-3 list-none  pt-3 pb-4"
      role="tablist"
    >
      <TabListName
        TabName="جاری"
        TabNumber={1}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
      <TabListName
        TabName=" تحویل شده"
        TabNumber={2}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
      <TabListName
        TabName="لغو شده"
        TabNumber={3}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
      <TabListName
        TabName="مرجوع شده"
        TabNumber={4}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
    </ul>
  );
}

export default TabList;
