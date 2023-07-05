import React from "react";
import { ProductType } from "../interfaces/Product";

type Props = {
  array: ProductType[];
  productId: number;
};

const useFindProductInCart = ({ array, productId }: Props) => {
  const [isInCart, setIsInCart] = React.useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = React.useState<number>(1);

  React.useEffect(() => {
    const findInCart = (): boolean => {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === productId) {
          setCartQuantity(array[i].quantity as number);
          return true;
        }
      }
      return false;
    };

    setIsInCart(findInCart);
  }, [array, productId]);

  return { isInCart, cartQuantity };
};

export default useFindProductInCart;
