import Navbar from "@/components/Navbar";
import { Tabs } from "@/components/tabs";
import BackgroundTitle from "@/components/ui/BackgroundTitle";
import React from "react";

function History() {
  return (
    <div>
      <Navbar />
      <BackgroundTitle name="تاریخچه سفارشات" />
      <Tabs />
    </div>
  );
}

export default History;