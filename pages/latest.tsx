import Navbar from "@/components/Navbar";
import BackgroundTitle from "@/components/ui/BackgroundTitle";
import Card from "@/components/ui/Card";
import React from "react";

function latest() {
  return (
    <div>
      <Navbar />
      <BackgroundTitle name="بازدید های اخیر " />
      <div className="flex  max-w-[390px] min-w-[390px] flex-wrap px-2 justify-center gap-2 mt-6">
        <Card />
        <Card />
        <Card /> <Card />
      </div>
    </div>
  );
}

export default latest;
