import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

function SearchAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm font-black text-[#F13739]">
          دسته بندی
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <Accordion className="px-4" type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>شیرینی جات</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <hr className="border-[0.5px] border-black-items border-opacity-10" />
            <Accordion className="px-4" type="multiple">
              <AccordionItem value="item-2">
                <AccordionTrigger>شکلات</AccordionTrigger>
                <AccordionContent>
                  Yes. Its animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SearchAccordion;
