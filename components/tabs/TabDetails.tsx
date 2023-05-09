import React from "react";
import HistoryCard from "../ui/HistoryCard";

interface TabDetailsProps {
  openTab: number;
}

function TabDetails({ openTab }: TabDetailsProps) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full rounded">
      <div className="py-5 flex-auto">
        <div className="tab-content px-4 tab-space">
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
            <HistoryCard color="primary" />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
            <p>tab2</p>
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <p>tab3</p>
          </div>
          <div className={openTab === 4 ? "block" : "hidden"} id="link3">
            <p>tab4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabDetails;
