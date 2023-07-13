import React, {ReactNode} from 'react';

type MiddleIconProps = {
  children: ReactNode;
};

const MiddleIcon: React.FC<MiddleIconProps> = ({children}) => {
  return (
    <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[0.5px] border-black-items md:h-10 md:w-10'>
      <div className=''>{children} </div>
    </div>
  );
};
export default MiddleIcon;
