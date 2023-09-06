'use client';
import React from 'react';
import ContactUs from '@/components/ContactUs';
import ListItems from '@/components/ListItems';
import useSameProduct from '@/service/product/useSameProduct';
import ProductDetails from '@/components/store/ProductDetails';
import ProductTabs from '@/components/store/ProductTabs';

function SingleProduct() {
  const {data: product} = useSameProduct();
  console.log(product?.data);
  return (
    <div>
      <div>
        <ProductDetails />
        <ProductTabs />
      </div>
      <ListItems data={product?.data} link='/' title='محصولات مشابه' />
      <div className='hidden md:inline'>
        <ContactUs />
      </div>
    </div>
  );
}

export default SingleProduct;
