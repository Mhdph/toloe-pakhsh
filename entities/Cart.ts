export interface Cart {
  name: string;
  count: number;
  unit: string;
  price: number;
  totalPrice: number;
  start: string;
  brand: string;
}
export interface UpdateCart {
  count: number;
}
export interface AddCart {
  productId: number;
  count: number;
  price: number;
}
