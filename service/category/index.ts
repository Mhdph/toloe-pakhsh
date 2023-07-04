import {baseUrl} from '@/lib/config';

// get all category
export async function getAllCategory() {
  const res = await fetch(`${baseUrl}/category`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
