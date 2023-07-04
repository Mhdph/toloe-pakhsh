import ContactUs from '@/components/ContactUs';
import LatestBlog from '@/components/LatestBlog';
import ListItems from '@/components/ListItems';
import SpecialOffer from '@/components/SpecialOffer';
import SearchBarWF from '@/components/ui/SearchBarWF';
import {getAllProduct} from '@/service/product';

export default async function Store() {
  const data = await getAllProduct();
  return (
    <div>
      <SearchBarWF />
      <ListItems data={data.data} link='account' title='آخرین محصولات' />
      <SpecialOffer data={data.data} />
      {/* <ListItems link='account' title='شیرینی جات' />
      <ListItems link='account' title='ترشی جات' /> */}
      {/* <LatestBlog /> */}
      <ContactUs />
    </div>
  );
}
