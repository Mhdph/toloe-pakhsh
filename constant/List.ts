import ProductImage from '@/assets/tempImages/Product Photo.png';
import advie from '@/assets/tempImages/advie.png';
import ajil from '@/assets/tempImages/ajil.png';
import shokolat from '@/assets/tempImages/shokolat.png';
import torshijat from '@/assets/tempImages/torshijat.png';
import mive from '@/assets/tempImages/mive.png';

export const CategoryListItem = [
  {
    name: 'شیرینی جات',
    image: ProductImage,
  },
  {
    name: 'شکلات',
    image: shokolat,
  },
  {
    name: 'میوه خشک',
    image: mive,
  },
  {
    name: 'آجیل و خشکبار',
    image: ajil,
  },
  {
    name: 'ادویه',
    image: advie,
  },
  {
    name: 'ترشیجات',
    image: torshijat,
  },
];

export const ProfileLinkListItem = [
  {
    name: 'سبد خرید',
    url: '/shopingbasket',
  },
  {
    name: 'تاریخچه سفارشات',
    url: '/history',
  },
  {
    name: 'موارد دلخواه',
    url: '/favourite',
  },
  {
    name: 'بازدید های اخیر',
    url: '/lastvisit',
  },
  {
    name: 'اطلاعات حساب کاربری',
    url: '/account',
  },
];
export const FilterList = [
  {name: 'پربازدید', value: 'fetchCount', sortDirection: 1},
  {name: 'جدید', value: 'dateCreate', sortDirection: 1},
  {name: 'پرفروش', value: 'countSell', sortDirection: 1},
  {name: 'ارزان ترین', value: 'price', sortDirection: -1},
  {name: 'گران ترین', value: 'price', sortDirection: 1},
];

export const sidebar = [
  {name: 'سفارشات', url: '/dashboard/orders'},
  {name: 'دسته بندی ها', url: '/dashboard/categories'},
  {name: 'محصولات', url: '/dashboard/products'},
  {name: 'دیدگاه ها', url: '/dashboard/comments'},
  {name: 'کاربران', url: '/dashboard/users'},
  {name: 'تخفیفات', url: '/dashboard/offers'},
  {name: 'تنظیمات', url: '/dashboard/slider'},
  {name: 'درباره طلوع پخش', url: '/dashboard/about'},
];
