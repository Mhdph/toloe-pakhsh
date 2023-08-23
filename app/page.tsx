import AboutUs from '@/components/AboutUs';
import CategoryList from '@/components/CategoryList';
import ContactUs from '@/components/ContactUs';
import HeroSection from '@/components/HeroSection';
import ListItems from '@/components/ListItems';
import OfferHero from '@/components/OfferHero';
import SpecialOffer from '@/components/SpecialOffer';
import {getAllCategory} from '@/service/category';
import {getAllOffProduct, getAllProduct} from '@/service/product';

export default async function Home() {
  const data = await getAllProduct();
  const dataOff = await getAllOffProduct();

  const categoryData = await getAllCategory();
  return (
    <main className='flex flex-col'>
      <HeroSection />
      <CategoryList data={categoryData.data} />
      <OfferHero />
      <ListItems data={data.data} link='' title='آخرین محصولات' />
      <SpecialOffer data={dataOff.data} />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
