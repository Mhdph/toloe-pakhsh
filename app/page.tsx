import HeroSection from '@/components/HeroSection';
import CategoryList from '@/components/CategoryList';
import ListItems from '@/components/ListItems';
import SpecialOffer from '@/components/SpecialOffer';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import OfferHero from '@/components/OfferHero';
import {getAllProduct, getAllOffProduct} from '@/service/product';
import {getAllCategory} from '@/service/category';

export default async function Home() {
  const data = await getAllProduct();
  const dataOff = await getAllOffProduct();

  const categoryData = await getAllCategory();
  console.log(dataOff.data.products);
  return (
    <main className='flex flex-col'>
      <HeroSection />
      <CategoryList data={categoryData.data} />
      <OfferHero />
      <ListItems data={data.data.products} link='' title='آخرین محصولات' />
      <SpecialOffer data={dataOff.data.products} />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
