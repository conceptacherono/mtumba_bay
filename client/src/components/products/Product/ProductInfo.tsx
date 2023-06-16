import React from "react";
import { ProductType } from "../../../interfaces/Product";
import Loader from "../../Loader";
import ProductCard from "../../../lib/ui/ProductCard";
import { useGetProductsQuery } from "../../../services/productsApi";

type Props = {
  product: ProductType;
};

const ProductInfo = ({ product }: Props) => {
  const [selectedSize, setselectedSize] = React.useState<string>(sizes[0]);
  const [quantity, setquantity] = React.useState<number>(1);
  const [relatedProducts, setRelatedProducts] = React.useState<ProductType[]>(
    []
  );

  const { data, isLoading, refetch } = useGetProductsQuery(product.category);

  React.useEffect(() => {
    refetch();

    if (data) {
      setRelatedProducts(data);
    }
  }, [product, data, refetch]);

  return (
    <section>
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain"
          />
        </div>

        <div className="py-8 md:py-0">
          <h1 className="font-bold text-xl md:text-2xl">{product.title}</h1>
          <p className="font-semibold py-4">Ksh. {product.price}</p>
          <p className="text-gray-700 text-sm leading-6">
            {product.description}
          </p>

          <div className="flex gap-4 my-4 flex-wrap">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => setselectedSize(size)}
                className={`flex items-center justify-center p-4 border ${
                  selectedSize === size && "border-black bg-gray-200"
                } w-16 cursor-pointer transition-all duration-165 hover:border-black`}
              >
                {size}
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center">
            <div className="lg:flex-1 ">
              <p className="py-2 text-gray-500">
                Height of model: 189 cm. / 6' 2″ Size 41
              </p>
              <button className="lg:w-full w-full  py-4 transition-all bg-lightGreen text-white text-lg font-semibold hover:bg-darkGreen">
                Add to cart - Ksh. {Math.round(product.price * quantity)}
              </button>
            </div>
            <div className="lg:flex-1">
              <p className="py-2 text-gray-500">Quantity:</p>
              <div className="items-center flex w-min justify-center border border-black">
                <button
                  className="py-4 px-8 text-2xl leading-0 disabled:cursor-not-allowed"
                  disabled={quantity === 1}
                  onClick={() =>
                    quantity > 1 && setquantity((quantity) => quantity - 1)
                  }
                >
                  -
                </button>
                <span className="text-2xl font-semibold w-5">{quantity}</span>
                <button
                  className="py-4 px-8 text-2xl leading-0"
                  onClick={() => setquantity((quantity) => quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-16">
        <h3 className="text-xl font-bold">Related Products:</h3>
        {isLoading ? (
          <Loader />
        ) : relatedProducts && relatedProducts.length > 0 ? (
          <div className="grid-layout-listings gap-6 mt-2">
            {relatedProducts.map(
              (relatedProduct) =>
                relatedProduct.id !== product.id && (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                )
            )}
          </div>
        ) : (
          <div>No related products</div>
        )}
      </div>
    </section>
  );
};

const sizes: string[] = ["XS", "S", "M", "L", "XXL", "3XL"];

export default ProductInfo;
