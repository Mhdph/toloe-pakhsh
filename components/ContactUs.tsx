import {
  LocationIcon,
  PhoneIcon,
  InstagramIcon,
  TelegramIcon,
  MailIcon,
  InstagramDesktopIcon,
  TelegramDesktopIcon,
} from '@/assets/Icons';
import {AbousUsSvgLeft, AboutUsSvgRight} from '@/assets/svg';
import SubTractSvg from '@/assets/svg/SubTractSvg';
import React from 'react';

function ContactUs() {
  return (
    <div>
      <div className='contact_us mb-16 mt-4 px-4 text-black-items md:mb-0 md:hidden'>
        <div className='relative pt-12'>
          <p className='text-4xl font-semibold text-white'>با ما در تماس باشید</p>
          <div className='absolute -bottom-4 left-2 '>
            <SubTractSvg />
          </div>
        </div>
        <p className='mt-4 text-xs font-normal text-white'>همیشه پاسخگو شما هستیم</p>
        <hr className='round3 my-3 border border-white' />
        <div className='flex flex-col gap-4 pb-10'>
          <div className='card_shadow flex flex-col items-center rounded-3xl bg-white py-4'>
            <LocationIcon />
            <p className='text mt-3 text-center font-extrabold'>مشهد - طرحچی ۱۳ - انبار طلوع پخش</p>
            <p>(مراجعه فقط با هماهنگی)</p>
          </div>
          <div className='card_shadow flex flex-col items-center rounded-3xl bg-white py-4'>
            <PhoneIcon />
            <a href='tel:+98990731243 ' className='text mt-3 text-center font-extrabold'>
              78 45 3883 (051) - 43 52 731 0990
            </a>
          </div>
          <div className='flex items-center justify-center gap-4'>
            <div className='card_shadow flex flex-col items-center rounded-3xl bg-white px-8 py-4'>
              <InstagramIcon />
              <a href='https://www.instagram.com/TolouPakhsh/' className='text mt-3 text-center font-extrabold'>
                TolouPakhsh@
              </a>
            </div>
            <div className='card_shadow flex flex-col items-center rounded-3xl bg-white px-8 py-4'>
              <TelegramIcon />
              <a href='https://telegram.me/toloupakhsh_iran/' className='text mt-3 text-center font-extrabold'>
                TolouPakhsh@
              </a>
            </div>
          </div>
          <div className='card_shadow flex flex-col items-center rounded-3xl bg-white py-4'>
            <MailIcon />
            <a href='mailto: Contact@TolouPakhsh.com' className='text mt-3 text-center font-extrabold'>
              Contact@TolouPakhsh.com
            </a>
          </div>
        </div>
      </div>
      <div className='hidden md:inline'>
        <div className='contact_us flex h-96 justify-between px-60 pb-20'>
          <div className='absolute right-1 pr-10 pt-8 xl:pr-16'>
            <AboutUsSvgRight />
          </div>
          <div className='mt-16 flex-grow text-center text-white'>
            <p className='mr-5 text-4xl font-semibold'>با ما در تماس باشید</p>
            <p className='mr-5 mt-2  text-xs font-normal'>همیشه پاسخگو شما هستیم</p>
            <hr className='mt-4 border border-white border-opacity-60' />
            <div className='mt-4 flex justify-between text-xs'>
              <div className='flex flex-col items-center gap-1'>
                <PhoneIcon />
                <a href='tel:+98990731243 ' className='mt-3  text-center font-extrabold'>
                  78 45 3883 (051) - 43 52 731 0990
                </a>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <LocationIcon />
                <p className='mt-3  text-center font-extrabold'>مشهد - طرحچی ۱۳ - انبار طلوع پخش</p>
                <p>(مراجعه فقط با هماهنگی)</p>
                <div className='mt-10 flex items-center justify-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white'>
                    <a href='https://www.telegram.me/@toloupakhsh_iran/'>
                      <TelegramDesktopIcon />
                    </a>
                  </div>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white'>
                    <a href='https://www.instagram.com/TolouPakhsh/'>
                      <InstagramDesktopIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <MailIcon />
                <a href='mailto: Contact@TolouPakhsh.com' className='mt-3  text-center font-extrabold'>
                  Contact@TolouPakhsh.com
                </a>
              </div>
            </div>
          </div>

          <div className='absolute left-1 pl-10 pt-8 xl:pl-16'>
            <AbousUsSvgLeft />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
