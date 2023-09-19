import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

interface Product {
  id: number;
  name: string;
  quantity: number; // Add quantity property to the Product type
  brand: string;
  unit: string;
  unitCount: string;
  price: number;
  picture: string;
  totalPrice?: number; // Add totalPrice property to the Product type
  off: number;
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
          const updatedProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity + 1,
            totalPrice: (existingProduct.quantity + 1) * product.price,
          };

          const updatedProducts = state.products.map((p) => (p.id === product.id ? updatedProduct : p));

          return {products: updatedProducts};
        }

        return {
          products: [...state.products, {...product, quantity: 1, totalPrice: product.price}],
        };
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
          product.id === productId ? {...product, quantity, totalPrice: quantity * product.price} : product,
        ),
      }));
    },
  })),
);

export default useProductStore;
