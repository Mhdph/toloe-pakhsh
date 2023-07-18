export interface Discount {
  name: string;
  expireTime: string;
  enable: boolean;
  precentage: number;
  password: string;
}
export interface DiscountAdd {
  name?: string;
  expireTime?: string;
  precentage?: number;
  password?: string;
}
