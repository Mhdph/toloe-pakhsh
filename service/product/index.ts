import {baseUrl} from '@/lib/config';

// get all product
export async function getAllProduct() {
  const res = await fetch(`${baseUrl}/product`, {cache: 'no-cache'});
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getAllOffProduct() {
  const res = await fetch(`${baseUrl}/product?off=true`, {cache: 'no-cache'});
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

//get one product
export async function getOneProduct(productId: number) {
  const res = await fetch(`${baseUrl}/product/getbyid/${productId}`, {cache: 'no-cache'});
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

//get favorite product
export async function getFavoriteProduct() {
  const res = await fetch(`${baseUrl}/favorite`, {cache: 'no-cache'});
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// get all shirini product
export async function getAllShiriniProduct() {
  const res = await fetch(`${baseUrl}/product?categoryName=شیرینی جات`, {cache: 'no-cache'});
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// get all torshi product
export async function getAllTorshiProduct() {
  const res = await fetch(`${baseUrl}/product?categoryName=ترشیجات`, {cache: 'no-cache'});
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
