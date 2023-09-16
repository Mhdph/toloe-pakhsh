'use client';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import useGetCategoriesAndChilds from '@/service/category/useGetCategoriesandChilds';
import useProductQueryStore from '@/store/search';
import {useRouter} from 'next/navigation';

function SearchAccordion() {
  const {data: categoryData} = useGetCategoriesAndChilds();
  const {setCategoryName} = useProductQueryStore();
  const router = useRouter();

  const handleCategorySearch = (item: string) => {
    router.push(`/product-category/${item}`);
  };
  const handleSubCategorySearch = (item: string, sub: string) => {
    router.push(`/product-category/${item}/${sub}`);
  };
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='text-sm font-black text-[#F13739]'>دسته بندی</AccordionTrigger>
        <AccordionContent>
          <div>
            {categoryData?.data.map((item) => (
              <div key={item.id}>
                <Accordion className='px-4' type='multiple'>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger onClick={() => handleCategorySearch(item.englishName)}>
                      {item.name}
                    </AccordionTrigger>
                    {item.chailds.length > 0 ? (
                      <AccordionContent className='cursor-pointer'>
                        {item.chailds.map((sub) => (
                          <p key={sub.id} onClick={() => handleSubCategorySearch(item.englishName, sub.englishName)}>
                            {sub.name}
                          </p>
                        ))}
                      </AccordionContent>
                    ) : null}{' '}
                  </AccordionItem>
                </Accordion>
                <hr className='border-[0.5px] border-black-items border-opacity-10' />
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SearchAccordion;
