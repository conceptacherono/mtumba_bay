import { useDispatch } from "react-redux";
import { ProductType } from "../../interfaces/Product";
import { removeProductFromCart } from "../../store/features/ProductSlice";

type CartItemProps = {
  product: ProductType;
};

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center gap-1 border border-primary pr-4 mb-4">
      <div className="h-48 flex items-center justify-center p-8">
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
      <div className="flex flex-col gap-2">
        <h2 className="text-xl line-clamp-1 font-semibold">{product.title}</h2>
        <p className="text-lg">Quantity: {product.quantity}</p>
        <p>Ksh. {product.price}</p>
        <button
          className="w-max ml-auto"
          onClick={() => dispatch(removeProductFromCart(product))}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
