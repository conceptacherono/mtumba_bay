import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartContainer from "./CartContainer";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.product.cart);
  return (
    <div>
      <h1 className="text-3xl font-bold py-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <CartContainer productsInCart={cartItems} />
      ) : (
        <div>Nothing in cart yet</div>
      )}
    </div>
  );
};

export default Cart;
