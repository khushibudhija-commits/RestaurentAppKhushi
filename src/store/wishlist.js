import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlistItems: [],

      fetchWishlist: async () => {
        const user = JSON.parse(localStorage.getItem("customer"));
        if (!user?._id) return;
        try {
          const response = await fetch(
            `https://restaurent-app-backend.onrender.com/api/wishlist/user/${user._id}`
          );
          const result = await response.json();
          if (response.ok && result.data) {
            set({ wishlistItems: result.data });
          }
        } catch (err) {
          console.error("Fetch wishlist error:", err);
        }
      },

      addToWishlist: async (item) => {
        const exists = get().wishlistItems.find(
          (wishlist) => String(wishlist.id || wishlist.itemId) === String(item.id || item.itemId)
        );

        if (!exists) {
          set((state) => ({
            wishlistItems: [...state.wishlistItems, item],
          }));
        }

        const user = JSON.parse(localStorage.getItem("customer"));
        if (user?._id) {
          try {
            await fetch("https://restaurent-app-backend.onrender.com/api/wishlist/add", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: user._id,
                id: String(item.id || item.itemId),
                itemId: String(item.id || item.itemId),
                name: item.name,
                price: Number(item.price),
                image: item.image || "",
                category: item.category || "",
              }),
            });
          } catch (err) {
            console.error("Backend add wishlist error:", err);
          }
        }
      },

      removeFromWishlist: async (id) => {
        set((state) => ({
          wishlistItems: state.wishlistItems.filter(
            (item) => String(item.id || item.itemId) !== String(id)
          ),
        }));

        const user = JSON.parse(localStorage.getItem("customer"));
        if (user?._id) {
          try {
            await fetch("https://restaurent-app-backend.onrender.com/api/wishlist/remove", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: user._id,
                itemId: String(id),
              }),
            });
          } catch (err) {
            console.error("Backend remove wishlist error:", err);
          }
        }
      },

      isInWishlist: (id) => {
        return get().wishlistItems.some(
          (item) => String(item.id || item.itemId) === String(id)
        );
      },

      clearWishlist: async () => {
        set({ wishlistItems: [] });

        const user = JSON.parse(localStorage.getItem("customer"));
        if (user?._id) {
          try {
            await fetch(`https://restaurent-app-backend.onrender.com/api/wishlist/user/${user._id}`, {
              method: "DELETE",
            });
          } catch (err) {
            console.error("Backend clear wishlist error:", err);
          }
        }
      },
    }),
    {
      name: "restaurant-wishlist-storage",
    }
  )
);

export default useWishlistStore;