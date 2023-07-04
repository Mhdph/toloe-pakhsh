import {api, baseUrl} from '@/lib/config';

//get user card
export async function getUserCard() {
  const res = await fetch(`${baseUrl}/cart/openCart`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const updateCardRow = async (user: any) => {
  const response = await api.patch(`/cart-row/update`, user);
  return response.data;
};

export const deleteCardRow = async (id: string) => {
  const response = await api.delete(`/cart-row/delete/${id}`);
  return response.data;
};

export const addCardRow = async (user: any) => {
  const response = await api.post(`/cart-row/add`, user);
  return response.data;
};

export const completeOrder = async (user: any) => {
  const response = await api.post(`/cart/completeOrder`, user);
  return response.data;
};
