'use client';
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import useBrand from '@/service/product/useBrand';
import useProductQueryStore from '@/store/search';
function SearchBrand() {
  const {setBrand} = useProductQueryStore();
  const {data} = useBrand();
  return (
    <Accordion type='multiple'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='text-main-red'> برند</AccordionTrigger>
        {data?.data.map((item) => (
          <AccordionContent className='cursor-pointer  border-gray-300 pt-1' key={item}>
            <p onClick={() => setBrand(item.name)}>{item}</p>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}

export default SearchBrand;
