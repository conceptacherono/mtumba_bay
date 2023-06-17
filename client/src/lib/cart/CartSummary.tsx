import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CartSummary = () => {
  const productsInCart = useSelector((state: RootState) => state.product.cart);
  let totalCartAmount = 0;

  for (let i = 0; i < productsInCart.length; i++) {
    totalCartAmount += productsInCart[i].price * productsInCart[i].quantity;
  }

  return (
    <div>
      <input
        type="text"
        id="coupon"
        className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-md py-4 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 my-4"
        placeholder="Enter coupon code"
        required
      />

      <div className="py-4">
        <div className="cart-amount">
          <p>Subtotal:</p>
          <p>Ksh. {parseFloat(totalCartAmount.toFixed(2))}</p>
        </div>
        <div className="cart-amount">
          <p>Shipping:</p>
          <p className="text-gray-500">Calculated at the next step</p>
        </div>
        <hr className="my-4" />
        <div className="cart-amount">
          <p>Total:</p>
          <p>Ksh. {parseFloat(totalCartAmount.toFixed(2))}</p>
        </div>
      </div>

      <button className="bg-gray-800 hover:bg-primary transition-colors text-lg text-white w-full py-4 mt-4 ">
        Continue to checkout
      </button>
    </div>
  );
};

export default CartSummary;
