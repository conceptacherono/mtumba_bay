import { Link } from "react-router-dom";
import { ProductType } from "../../interfaces/Product";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  // removeProductFromCart,
} from "../../store/features/ProductSlice";
import { RootState } from "../../store/store";
import useFindProductInCart from "../../hooks/useFindProductInCart";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.product.cart);

  const { isInCart } = useFindProductInCart({
    array: cartProducts,
    productId: product.id,
  });

  const handleAddToCart = () => {
    dispatch(addProductToCart({ ...product, quantity: 1 }));
  };

  // const handleRemoveFromCart = () => {
  //   dispatch(removeProductFromCart(product));
  // };

  return (
    <div className="flex flex-col">
      <Link
        to={`/products/${product.id}`}
        className="hover:scale-105 transition-all cursor-pointer"
      >
        <div className="h-72 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain transition hover:scale-105"
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
        <div className="px-4">
          <div className="flex py-2 mt-2">
            <h4 className="flex-1 text-left line-clamp-1 font-semibold">
              {product.title}
            </h4>
            <p className="flex-1 font-bold text-right">Ksh. {product.price}</p>
          </div>
          <p className="line-clamp-2 text-sm">{product.description}</p>
        </div>
      </Link>
      <button
        className={`px-6 w-fit py-2 border my-4 rounded-full font-semibold ${
          isInCart && "bg-darkGreen text-white"
        } border-black transition-colors hover:bg-darkGreen hover:text-white hover:border-darkGreen disabled:cursor-not-allowed`}
        // onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "In cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductCard;
