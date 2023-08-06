export interface Cart {
  cartId: number;
  count: number;
  id: number;
  price: number;
  productDescription: any;
  productId: number;
  productName: string;
  productOff: number;
  productPicture: string;
  productStar: number;
  productUnit: string;
  productUnitCount: string;
  sumRow: string;
}
export interface UpdateCart {
  count: number;
  id: number;
}
export interface AddCart {
  productId: number;
  count: number;
  price: number;
}
