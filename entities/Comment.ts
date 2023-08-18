export interface Comment {
  id: number;
  userId: number;
  productId: number;
  date: string;
  star: number;
  text: string;
  verify: boolean;
  replay: any;
  productName: string;
  productPicture: string;
  productDescription: any;
  productUnit: string;
  productUnitCount: string;
}

export interface AddComment {
  star: number;
  text: string;
}
