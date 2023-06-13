import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  console.log(params);
  return (
    <div className="h-full w-full flex items-center justify-center">
      ProductDetails page
    </div>
  );
};

export default ProductDetails;
