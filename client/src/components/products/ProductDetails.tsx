import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/productsApi";
import Loader from "../Loader";
import ProductInfo from "./Product/ProductInfo";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(id as string);

  return (
    <div className="w-full flex items-center justify-center">
      {isLoading ? (
        <Loader size={6} />
      ) : product ? (
        <ProductInfo product={product} />
      ) : (
        <div>
          <p>Could not find this product's details.</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
