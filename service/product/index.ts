import {baseUrl} from '@/lib/config';

// get all product
export async function getAllProduct() {
  const res = await fetch(`${baseUrl}/product`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getAllOffProduct() {
  const res = await fetch(`${baseUrl}/product?off=true`);
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

// get all shirini product
export async function getAllShiriniProduct() {
  const res = await fetch(`${baseUrl}/product?categoryid=11`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// get all torshi product
export async function getAllTorshiProduct() {
  const res = await fetch(`${baseUrl}/product?categoryName=ترشی جات`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
