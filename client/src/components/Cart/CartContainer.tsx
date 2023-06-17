import { ProductType } from "../../interfaces/Product";
import { CartItem, CartSummary, OrderInformation } from "../../lib";

type Props = {
  productsInCart: ProductType[];
};

const CartContainer = ({ productsInCart }: Props) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          {productsInCart.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-2xl">Order Summary</h2>
          <CartSummary />
        </div>
      </div>
      <OrderInformation />
    </div>
  );
};

export default CartContainer;
