export interface Comment {
  id: number;
  userId: number;
  productId: number;
  date: string;
  star: number;
  text: string;
  verify: boolean;
  replay: string;
  productName: string;
  productPicture: string;
  productDescription: any;
  productUnit: string;
  productUnitCount: string;
  userFirstName: string;
  userLastName: string;
  faDate: string;
}

export interface AddComment {
  star: number;
  text: string;
}
