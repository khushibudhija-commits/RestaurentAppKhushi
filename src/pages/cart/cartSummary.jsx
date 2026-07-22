import useCartStore from "../../store/cart";
import EmptyCart from "./emptyCart";
import Cart from "./cart";

const CartSummary = ({ theme }) => {
  const cartItems = useCartStore((state) => state.cartItems);

  return cartItems.length === 0 ? (
    <EmptyCart theme={theme} />
  ) : (
    <Cart theme={theme} />
  );
};

export default CartSummary;