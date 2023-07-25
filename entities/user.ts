export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  nationalCode: string;
  email: string;
  birthDate: string;
  phone: string;
  address: string;
  zipCode: string;
  commentId: string;
  city: string;
  cartId: string;
  roleId: string;
  oneCodeId: string;
  favorite: string[];
  lastView: string[];
}

export type UpdateUser = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  nationalCode?: string | undefined;
  email?: string | undefined;
  birthDate?: string | undefined;
  zipCode?: string | undefined;
  favorite?: string[] | undefined;
};
