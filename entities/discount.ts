export interface Discount {
  name: string;
  expireTime: Date;
  enable: boolean;
  percentage: number;
  password: string;
}
export interface DiscountAdd {
  name?: string;
  expireTime?: Date;
  percentage?: number;
  password?: string;
  category: string;
}
