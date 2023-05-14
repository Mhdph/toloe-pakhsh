import ContactUs from "@/components/ContactUs";
import LstItmes from "@/components/LstItmes";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/ui/Card";
import Diveder from "@/components/ui/Diveder";
import SeeProduct from "@/components/ui/SeeProduct";
import React from "react";

function Search() {
  return (
    <div>
      <SearchBar />
      <div className="flex  max-w-[390px] min-w-[390px] md:w-full flex-wrap px-2 justify-center gap-2 mt-6">
        <Card />
        <Card />
        <Card /> <Card />
      </div>
      <hr className="divedr opacity-25 my-10" />
      <LstItmes />
      <hr className="divedr opacity-25 mb-10" />
      <LstItmes />
      <hr className="divedr opacity-0 mb-4" />
      <ContactUs />
    </div>
  );
}

export default Search;
