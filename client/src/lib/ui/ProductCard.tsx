import { ProductType } from "../../interfaces/Product";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <div className="h-72 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className=" h-full object-contain transition hover:scale-105"
        />
      </div>
      <div className="px-4">
        <div className="flex py-2 mt-2">
          <h4 className="flex-1 text-left line-clamp-1 font-semibold">
            {product.title}
          </h4>
          <p className="flex-1 font-bold text-right">Ksh. {product.price}</p>
        </div>
        <p className="line-clamp-2 text-sm">{product.description}</p>
        <button className="px-6 py-2 border my-4 rounded-full font-semibold border-black transition-colors hover:bg-darkGreen hover:text-white hover:border-darkGreen">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
