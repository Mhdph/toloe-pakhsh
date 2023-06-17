import { baseUrl } from "./config";

export async function getAllProduct() {
  const res = await fetch(`${baseUrl}/product`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getOneProduct(productId: number) {
  const res = await fetch(`${baseUrl}/product/${productId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getAllCategory() {
  const res = await fetch(`${baseUrl}/category`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
