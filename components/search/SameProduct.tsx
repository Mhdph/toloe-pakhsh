import React from 'react';
import ListItems from '../ListItems';
import useSameProduct from '@/service/product/useSameProduct';

function SameProduct() {
  const {data: product} = useSameProduct();

  return (
    <div>
      {' '}
      <ListItems data={product?.data} link='store' title='محصولات مشابه' />
    </div>
  );
}

export default SameProduct;
