import React from "react";

function page() {
  return (
    <div className=" flex flex-col">
      <div className="absolute top-5 my-12 flex w-full items-center gap-3 overflow-x-scroll scroll-smooth whitespace-nowrap px-4 py-2 scrollbar-none md:justify-center 2xl:gap-8 bg-blue-500"></div>
      <div className="h-4  flex justify-end">
        <div className="bg-blue-500 w-10 h-4"></div>
      </div>
    </div>
  );
}

export default page;
