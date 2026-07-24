
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (item) =>
        set((state) => {
          const existing = state.cartItems.find((i) => i.id === item.id);

          if (existing) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }

          return {
            cartItems: [...state.cartItems, { ...item, quantity: 1 }],
          };
        }),

      increaseQuantity: (id) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cartItems: state.cartItems
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "restaurant-cart-storage",
    }
  )
);

export default useCartStore;