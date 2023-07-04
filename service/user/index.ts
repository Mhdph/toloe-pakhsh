import {api, baseUrl} from '@/lib/config';

//get one product
export async function getUser(userId: number) {
  const res = await fetch(`${baseUrl}/user/get/${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const updateUserFn = async (user: any) => {
  const response = await api.patch(`/user/update`, user);
  return response.data;
};
