import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Paths } from '../../constants/constants';
import capitalize from '../../utils/capitalize';

const BreadCrumbs = () => {
  const location = useLocation();
  const links: string[] = [];

  location.pathname
    .split('/')
    .filter((path) => path !== '')
    .map((path) => links.push(path));

  return (
    <>
      {location.pathname !== Paths.HOME && (
        <div className='main-container flex gap-4'>
          <Link to={Paths.HOME}>
            <HomeIcon width={18} />
          </Link>
          <ChevronRightIcon width={18} />
          {links.map((link, index) => (
            <span
              key={index}
              className='flex text-secondary'
            >
              {capitalize(link)}
              {index !== links.length - 1 && <ChevronRightIcon width={18} />}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default BreadCrumbs;
