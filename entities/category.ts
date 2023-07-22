export interface AddCategoryChild {
  parentCategoryId: string;
  name: string;
}

export interface AddCategory {
  formData: FormData;
}
export interface Category {
  id: string;
  name: string;
  picture: string;
}
