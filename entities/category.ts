export interface AddCategoryChild {
  parentCategoryId: string;
  name: string;
}

export interface AddCategory {
  name: string;
  picture: string;
}
export interface Category {
  id: string;
  name: string;
  picture: string;
}
