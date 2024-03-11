import {
  ShoppingCartIcon,
  HeartIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

import { NavLink } from 'react-router-dom';
import { links } from '../../constants/constants';
import { useEffect, useState } from 'react';
import MobileMenu from '../MobileMenu';
import { useCart } from '../../utils/useCart';
import { useFavorites } from '../../utils/useFavorites';
import { useWindowResize } from '../../utils/useWindowResize';
import CartBadge from '../CartBadge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { products } = useCart();
  const { favorites } = useFavorites();
  const windowSize = useWindowResize();

  const setActive = (isActive: boolean) => {
    return `navLink ${isActive && 'active'}`;
  };

  useEffect(() => {
    if (windowSize.width >= 1024) {
      setIsMenuOpen(false);
    }
  }, [windowSize.width]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='relative mb-3 border-b border-elements bg-white'>
      <div className='max-w-screen-3xl mx-auto flex items-center justify-between px-4'>
        <NavLink
          to='/'
          className='px-2 py-3 text-xl font-semibold text-primary'
          aria-label='logo'
        >
          TechBazar
        </NavLink>

        <nav className='hidden gap-12 font-semibold lg:flex'>
          {links.map(({ name, link }) => (
            <NavLink
              key={link}
              to={link}
              className={({ isActive }) => setActive(isActive)}
              aria-label={name}
            >
              {name}
            </NavLink>
          ))}
          <div className='hidden space-x-3 lg:flex'>
            <NavLink
              to='/favorites'
              className={({ isActive }) => setActive(isActive)}
            >
              <HeartIcon
                strokeWidth={2}
                width={24}
              />
              {favorites?.length > 0 && <CartBadge badge={favorites?.length} />}
            </NavLink>

            <NavLink
              to='/cart'
              className={({ isActive }) => setActive(isActive)}
            >
              <ShoppingCartIcon
                strokeWidth={2}
                width={24}
              />
              {products?.length > 0 && <CartBadge badge={products?.length} />}
            </NavLink>
          </div>
        </nav>
        {isMenuOpen && (
          <MobileMenu
            isOpen={isMenuOpen}
            onActive={setActive}
            onClose={toggleMenu}
          />
        )}
        <button
          onClick={toggleMenu}
          className={` ${isMenuOpen && 'hidden'} inline-flex items-center px-2 py-2.5 lg:hidden `}
        >
          <Bars3Icon width={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
