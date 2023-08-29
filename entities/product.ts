export interface Product {
  id: number;
  name: string;
  unit: string;
  unitCount: string;
  price: number;
  picture: string;
  brand: string;
  exist: boolean;
  off: number;
  description: string;
  categoryId: number;
  star: number;
  FaPrice: number;
  properties: Property[];
}

export interface AddProduct {
  name: string;
  unit: string;
  unitCount: string;
  price: number;
  picture: string;
  brand: string;
  exist: boolean;
  description: string;
  properties: Property[];
  categoryId: number;
}
export interface Property {
  key: string;
  value: string;
}
