import ContactUs from '@/components/ContactUs';
import ListItems from '@/components/ListItems';
import ListStore from '@/components/ListStore';
import SpecialOffer from '@/components/SpecialOffer';
import SearchBarWF from '@/components/ui/SearchBarWF';
import {getAllCategory} from '@/service/category';
import {getAllOffProduct, getAllProduct, getAllShiriniProduct, getAllTorshiProduct} from '@/service/product';

export default async function Store() {
  const data = await getAllProduct();
  const dataOff = await getAllOffProduct();
  const TorshiData = await getAllTorshiProduct();
  const ShiriniData = await getAllShiriniProduct();
  const categoryData = await getAllCategory();

  return (
    <div>
      <SearchBarWF />
      <ListItems data={data.data} link='' title='آخرین محصولات' />
      <SpecialOffer data={dataOff.data} />
      <>
        {categoryData.data.map((item: any) => (
          <ListStore key={item.id} categoryName={item.name} urlName={item.englishName} />
        ))}
      </>

      <ContactUs />
    </div>
  );
}
