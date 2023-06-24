import { useDispatch } from "react-redux";
import { ProductType } from "../../interfaces/Product";
import {
  removeProductFromCart,
  updateCartProducts,
} from "../../store/features/ProductSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import React, { useEffect } from "react";

type CartItemProps = {
  product: ProductType;
};

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState<number>(product.quantity);

  useEffect(() => {
    const handleUpdateCart = () => {
      dispatch(
        updateCartProducts({
          ...product,
          quantity: quantity,
        })
      );
    };
    handleUpdateCart();
  }, [quantity]);

  return (
    <div className="flex items-center gap-1 border border-primary pr-4 mb-4">
      <div className="h-48 w-40 flex items-center justify-center p-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
        {/* <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-opacity-20 opacity-0 group-hover:h-full group-hover:opacity-100 duration-300">
          <Link
            className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
            to={`/products/${product.id}`}
          >
            View Details
          </Link>
        </div> */}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h2 className="text-xl line-clamp-1 font-semibold">{product.title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-lg">Quantity: {product.quantity}</p>
          <div className="flex gap-4 items-center">
            <button
              className="update-quantity-btn"
              disabled={quantity === 1}
              onClick={() => {
                setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
              }}
            >
              <AiOutlineMinus />
            </button>
            <button
              className="update-quantity-btn"
              onClick={() => {
                setQuantity((quantity) => quantity + 1);
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <p>Ksh. {product.price * product.quantity}</p>
        <button
          className="w-max ml-auto border rounded-md p-2 border-red-500 bg-red-200 transition-colors hover:bg-red-300"
          onClick={() => dispatch(removeProductFromCart(product))}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
