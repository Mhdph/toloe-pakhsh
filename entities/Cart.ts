export interface UpdateCart {
  count: number;
}
export interface AddCart {
  productId: number;
  count: number;
  price: number;
}
export interface AddCartList {
  productId: number;
  count: number;
}

export interface Cart {
  id: number;
  sumPrice: string;
  sumOff: string;
  state: string;
  userId: number;
  payId: any;
  postId: any;
  cartRows: CartRow[];
  description: any;
  codeCart: string;
  date: string;
  lastName: string;
  firstName: string;
  FaDate: string;
}

export interface CartRow {
  count: string;
  price: number;
  cartRowId: number;
  sumRow: string;
  productId: number;
  sumRowOff: string;
  productOff: number;
  productName: string;
  productStar: number;
  productUnit: string;
  productPicture: string;
  productUnitCount: string;
  productDescription: any;
  faPrice: string;
  faproductOff: string;
}
