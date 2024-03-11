import { FC } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';

import { Link } from 'react-router-dom';

import SpecsBrief from '../TechSpecs';

import { IProduct } from '../../app/types';
import { useCart } from '../../utils/useCart';
import { useFavorites } from '../../utils/useFavorites';
import { CartNotifications } from '../../constants/constants';

type Props = {
  product: IProduct;
};

const Cart: FC<Props> = ({ product }) => {
  const { fullPrice, image, name, price, itemId, category } = product;

  const { addToCart, isProductInCart } = useCart();
  const { handleToggleFavorite, isProductInFavorites } = useFavorites();

  const handleAddToCartAndNotify = () => {
    addToCart(product);

    if (!isProductInCart(itemId)) {
      toast(CartNotifications.ADD_TO_CART);
    }
  };

  const handleToggleFavoriteAndNotify = () => {
    handleToggleFavorite(product);

    if (!isProductInFavorites(itemId)) {
      toast(CartNotifications.ADD_TO_FAVORITES);
    }
  };

  return (
    <div className='max-w-[300px] rounded-md border border-elements bg-white px-11 py-4 font-medium duration-150 hover:shadow-md'>
      <Link to={`/${category}/${itemId}`}>
        <img
          src={`/${image}`}
          alt='product image'
          className='h-[200px] w-full object-contain duration-300 hover:scale-105'
        />
        <h3 className='mt-3 font-semibold text-primary'>{name}</h3>
        <p className='mb-1.5 mt-1.5  space-x-2 '>
          <span className='font-bold'>${fullPrice}</span>
          <span className='test-xs text-secondary line-through'>${price}</span>
        </p>
        <SpecsBrief {...product} />
      </Link>
      <div className='mt-4 flex gap-2'>
        <button
          onClick={handleAddToCartAndNotify}
          className={`button ${isProductInCart(itemId) && 'active'}`}
        >
          {isProductInCart(itemId) ? 'Added to cart' : 'Add to cart'}
        </button>
        <button
          onClick={handleToggleFavoriteAndNotify}
          className='button-like'
        >
          {isProductInFavorites(itemId) ? (
            <HeartIconSolid
              width={20}
              color='orange'
            />
          ) : (
            <HeartIcon width={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Cart;
