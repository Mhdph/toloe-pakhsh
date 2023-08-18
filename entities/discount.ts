export interface Discount {
  name: string;
  expireTime: Date;
  enable: boolean;
  percentage: number;
  password: string;
}
export interface DiscountAdd {
  name?: string;
  expireTime?: string;
  percentage?: number;
  code?: string;
  categoryId: string;
}
