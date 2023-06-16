import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Product {
  id: number;
  name: string;
  quantity: number; // Add quantity property to the Product type
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
      set((state) => {
        const existingProduct = state.products.find((p) => p.id === product.id);

        if (existingProduct) {
          // If product already exists, increase the quantity
          const updatedProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity + 1,
          };

          const updatedProducts = state.products.map((p) =>
            p.id === product.id ? updatedProduct : p
          );

          return { products: updatedProducts };
        }

        // If product does not exist, add it with quantity = 1
        return { products: [...state.products, { ...product, quantity: 1 }] };
      });
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
