import { useAppSelector } from '../app/hooks';
import {
  selectProducts,
  selectTotalPrice,
} from '../app/features/cart/cartSlice';
import {
  addProduct,
  removeProduct,
  toggleQuantity,
  countTotal,
} from '../app/features/cart/cartSlice';
import { useAppDispatch } from '../app/hooks';
import { IProduct } from '../app/types';

export const useCart = () => {
  const products = useAppSelector(selectProducts);
  const total = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();

  const isProductInCart = (itemId: string) =>
    products?.some((p) => p.itemId === itemId);

  const addToCart = (product: IProduct) => {
    if (isProductInCart(product.itemId)) {
      return;
    }
    dispatch(addProduct(product));
    dispatch(countTotal());
  };

  const removeFromCart = (product: IProduct) => {
    if (!isProductInCart(product.itemId)) {
      return;
    }
    dispatch(removeProduct(product));
    dispatch(countTotal());
  };

  const handleToggleQty = (type: string, id: number) => {
    dispatch(toggleQuantity({ type, id }));
    dispatch(countTotal());
  };

  return {
    products,
    isProductInCart,
    addToCart,
    removeFromCart,
    handleToggleQty,
    total,
  };
};
