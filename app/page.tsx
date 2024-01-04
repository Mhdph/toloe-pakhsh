import AboutUs from '@/components/AboutUs';
import CategoryList from '@/components/CategoryList';
import ContactUs from '@/components/ContactUs';
import HeroSection from '@/components/HeroSection';
import ListItems from '@/components/ListItems';
import OfferHero from '@/components/OfferHero';
import SpecialOffer from '@/components/SpecialOffer';
import SliderImage from '@/components/ui/Slider';
import {getAllCategory} from '@/service/category';
import {getAllOffProduct, getAllProduct} from '@/service/product';
import OfferHero2 from '@/components/OfferHero-2';

export default async function Home() {
  const data = await getAllProduct();
  const dataOff = await getAllOffProduct();

  const categoryData = await getAllCategory();
  return (
    <main className='flex-col pt-1 md:pt-0'>
      <SliderImage />
      {/* <OfferHero2 /> */}
      <CategoryList data={categoryData.data} />
      {/* <OfferHero /> */}
      <ListItems data={data.data} link='' title='آخرین محصولات' />
      <SpecialOffer data={dataOff.data} />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
