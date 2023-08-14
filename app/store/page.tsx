import ContactUs from '@/components/ContactUs';
import ListItems from '@/components/ListItems';
import SpecialOffer from '@/components/SpecialOffer';
import SearchBarWF from '@/components/ui/SearchBarWF';
import {getAllOffProduct, getAllProduct, getAllShiriniProduct, getAllTorshiProduct} from '@/service/product';

export default async function Store() {
  const data = await getAllProduct();
  const dataOff = await getAllOffProduct();
  // const TorshiData = await getAllTorshiProduct();
  // const ShiriniData = await getAllShiriniProduct();
  return (
    <div>
      <SearchBarWF />
      <ListItems data={data.data} link='account' title='آخرین محصولات' />
      <SpecialOffer data={dataOff.data} />
      {/* <ListItems data={ShiriniData.data} link='account' title='شیرینی جات' /> */}
      {/* <ListItems data={TorshiData.data} link='account' title='ترشی جات' /> */}
      <ContactUs />
    </div>
  );
}
