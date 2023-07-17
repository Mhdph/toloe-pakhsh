import {baseUrl} from '@/lib/config';

// get all product
export async function getAllProduct() {
  const res = await fetch(`${baseUrl}/product`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

//get one product
export async function getOneProduct(productId: number) {
  const res = await fetch(`${baseUrl}/product/getbyid/${productId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

//get favorite product
export async function getFavoriteProduct() {
  const res = await fetch(`${baseUrl}/favorite`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
