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

export interface CategoryandChilds {
  id: number;
  name: string;
  picture: string;
  hierarchy: boolean;
  chailds: Child[];
}

export interface Child {
  id: number;
  name: string;
  picture: string;
  hierarchy: boolean;
}
