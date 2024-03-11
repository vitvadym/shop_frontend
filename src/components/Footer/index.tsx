import { Link } from 'react-router-dom';

import telegramLogo from '../../assets/telegram_icon.png';
import gitLogo from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin.png';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import scrollToTop from '../../utils/scrollToTop';

const Footer = () => {
  const handleScrollToTop = () => {
    scrollToTop();
  };
  return (
    <footer className='border-t border-elements bg-white px-4 md:px-8'>
      <div className='relative mx-auto flex max-w-screen-2xl flex-col items-center pt-4 '>
        <nav className='mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium md:justify-start md:gap-6'>
          <Link
            to='/phones'
            className='text-secondary transition duration-100 hover:text-primary'
          >
            Phones
          </Link>

          <Link
            to='/tablets'
            className='text-secondary transition duration-100 hover:text-primary'
          >
            Tablets
          </Link>
          <Link
            to='/accessories'
            className='text-secondary transition duration-100 hover:text-primary'
          >
            Accessories
          </Link>
          <button
            onClick={handleScrollToTop}
            className='absolute right-4 rounded-full border border-secondary bg-white p-2'
          >
            <ChevronUpIcon
              strokeWidth={1}
              width={14}
            />
          </button>
        </nav>

        <div className='flex gap-4'>
          <Link to='/'>
            <img
              src={telegramLogo}
              alt='telegram logo'
              className='w-5'
            />
          </Link>
          <Link to='/'>
            <img
              src={linkedinLogo}
              alt='linkedin logo'
              className='w-5'
            />
          </Link>
          <Link to='/'>
            <img
              src={gitLogo}
              alt='github logo'
              className='w-5'
            />
          </Link>
        </div>
        <div className='py-2 text-center text-sm text-secondary'>
          © 2024 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
