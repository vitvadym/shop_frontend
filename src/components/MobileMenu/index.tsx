import { FC } from 'react';
import {
  HeartIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { links } from '../../constants/constants';
import { NavLink } from 'react-router-dom';

import { useCart } from '../../utils/useCart';
import { useFavorites } from '../../utils/useFavorites';
import CartBadge from '../CartBadge';

type Props = {
  onActive: (arg: boolean) => string;
  onClose: () => void;
  isOpen: boolean;
};
const MobileMenu: FC<Props> = ({ onActive, onClose, isOpen }) => {
  const { products } = useCart();
  const { favorites } = useFavorites();

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 bg-primary bg-opacity-35 lg:hidden 
      ${isOpen && 'no-scroll'}`}
    >
      <div className='absolute left-6 right-6 top-28 z-30 flex-col items-center justify-center rounded-md bg-white py-4 font-semibold shadow-md'>
        <div className='flex place-content-end px-5'>
          <button
            onClick={onClose}
            className='px-2 py-1'
          >
            <XMarkIcon width={24} />
          </button>
        </div>
        <ul className='flex flex-col items-center justify-center'>
          {links.map(({ name, link }) => (
            <NavLink
              key={link}
              to={link}
              onClick={onClose}
              className={({ isActive }) => onActive(isActive)}
            >
              {name}
            </NavLink>
          ))}
        </ul>
        <div className='flex justify-center gap-3'>
          <NavLink
            to='/favorites'
            onClick={onClose}
            className={({ isActive }) => onActive(isActive)}
          >
            <HeartIcon
              strokeWidth={2}
              width={24}
            />
            {favorites?.length > 0 && <CartBadge badge={favorites.length} />}
          </NavLink>
          <NavLink
            to='/cart'
            onClick={onClose}
            className={({ isActive }) => onActive(isActive)}
          >
            <ShoppingCartIcon
              strokeWidth={2}
              width={24}
            />
            {products?.length > 0 && <CartBadge badge={products.length} />}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
