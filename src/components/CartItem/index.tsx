import { FC } from 'react';
import { IProduct } from '../../app/types';
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import formatCapacitySpec from '../../utils/formatCapacitySpec';
import { useCart } from '../../utils/useCart';
import { QuantityType } from '../../constants/constants';

type Props = {
  product: IProduct;
};

const CartItem: FC<Props> = ({ product }) => {
  const {
    image,
    price,
    category,
    itemId,
    name,
    capacity,
    color,
    id,
    quantity,
  } = product;
  const { removeFromCart, handleToggleQty } = useCart();

  return (
    <div className='flex flex-wrap items-center rounded-lg border border-elements bg-white p-3 shadow-sm sm:gap-y-4 lg:gap-6'>
      <button
        onClick={() => removeFromCart(product)}
        className='p-4 text-secondary duration-200 hover:text-primary'
      >
        <TrashIcon width={24} />
      </button>
      <Link
        to={`/${category}/${itemId}`}
        className='relative block h-32 w-32'
      >
        <img
          src={`/${image}`}
          alt='product image'
          className='h-full w-full object-contain  p-3'
        />
      </Link>

      <div className='flex flex-1 flex-col justify-between py-4'>
        <div>
          <Link
            to={`/${category}/${itemId}`}
            className='mb-1 inline-block text-lg font-bold transition duration-100 lg:text-xl'
          >
            {name}
          </Link>

          <span className='block'>
            Capacity: {formatCapacitySpec(capacity)}
          </span>
          <span className=' block'>Color: {color}</span>
        </div>
      </div>

      <div className='flex w-full justify-between  p-4 sm:w-auto '>
        <div className='flex items-center gap-2'>
          <button
            disabled={quantity === 1}
            onClick={() => handleToggleQty(QuantityType.DOWN, id)}
          >
            <MinusCircleIcon
              width={30}
              strokeWidth={quantity === 1 ? 0.1 : 0.6}
            />
          </button>
          <span className='w-5 text-center'>{product.quantity}</span>
          <button onClick={() => handleToggleQty(QuantityType.UP, id)}>
            <PlusCircleIcon
              strokeWidth={0.6}
              width={30}
            />
          </button>
        </div>

        <div className='ml-4 md:ml-8 lg:ml-16'>
          <span className=' block font-bold md:text-lg'>${price}</span>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
