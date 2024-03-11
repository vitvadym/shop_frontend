import { useAppSelector } from '../app/hooks';
import { selectFavorites } from '../app/features/cart/cartSlice';
import { toggleFavorite } from '../app/features/cart/cartSlice';
import { useAppDispatch } from '../app/hooks';
import { IProduct } from '../app/types';

export const useFavorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  const isProductInFavorites = (itemId: string) =>
    favorites?.some((p: IProduct) => p.itemId === itemId);

  const handleToggleFavorite = (product: IProduct) => {
    dispatch(toggleFavorite(product));
  };

  return {
    favorites,
    handleToggleFavorite,
    isProductInFavorites,
  };
};
