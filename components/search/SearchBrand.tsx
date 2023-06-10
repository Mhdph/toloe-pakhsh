import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
function SearchBrand() {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[#253031]"> برند</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SearchBrand;
