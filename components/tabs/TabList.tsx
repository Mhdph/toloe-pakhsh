import React from 'react';
import TabListName from './TabListName';

interface TabListProps {
  openTab: number;
  setOpenTab: ({ number }: any) => void;
}

function TabList({ openTab, setOpenTab }: TabListProps) {
  return (
    <ul
      className='mb-0 mt-6 flex list-none items-center  justify-center gap-12 border-b-2 border-gray-300 px-3 pb-4  pt-3 md:justify-between'
      role='tablist'
    >
      <TabListName TabName='جاری' TabNumber={1} setOpenTab={setOpenTab} openTab={openTab} />
      <TabListName TabName=' تحویل شده' TabNumber={2} setOpenTab={setOpenTab} openTab={openTab} />
      <TabListName TabName='لغو شده' TabNumber={3} setOpenTab={setOpenTab} openTab={openTab} />
      <TabListName TabName='مرجوع شده' TabNumber={4} setOpenTab={setOpenTab} openTab={openTab} />
    </ul>
  );
}

export default TabList;
