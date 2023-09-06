export interface AddCategoryChild {
  parentCategoryId: number;
  chaildCategoryId: number;
}

export interface AddCategory {
  name: string;
  picture: string;
  englishName: string;
}
export interface Category {
  id: string;
  name: string;
  picture: string;
  englishName: string;
}

export interface CategoryandChilds {
  id: number;
  name: string;
  englishName: string;
  picture: string;
  hierarchy: boolean;
  chailds: Child[];
}

export interface Child {
  id: number;
  name: string;
  picture: string;
  hierarchy: boolean;
  englishName: string;
}
