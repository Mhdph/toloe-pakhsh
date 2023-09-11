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

export default async function Home() {
  const data = await getAllProduct();
  const dataOff = await getAllOffProduct();
  const images = ['https://tolouapi.iran.liara.run/Ajil.png', 'https://tolouapi.iran.liara.run/Property1=Variant4.png'];

  const categoryData = await getAllCategory();
  return (
    <main className='flex-col pt-1 md:pt-0'>
      <SliderImage images={images} />
      <CategoryList data={categoryData.data} />
      <OfferHero />
      <ListItems data={data.data} link='' title='آخرین محصولات' />
      <SpecialOffer data={dataOff.data} />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
