import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface Product {
  id: number;
  name: string;
  quantity: number;
}

interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
}

const useProductStore = create<ProductStore>()(
  devtools((set) => ({
    products: [],
    addProduct: (product) => {
      set((state) => ({
        products: [...state.products, product],
      }));
    },

    removeProduct: (productId) => {
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      }));
    },

    updateProductQuantity: (productId, quantity) => {
      set((state) => ({
        products: state.products.map((product) =>
          product.id === productId ? { ...product, quantity } : product
        ),
      }));
    },
  }))
);

export default useProductStore;
