import { Link } from 'react-router-dom';
import notFound from '../../assets/not_found.jpeg';

const ErrorPage = () => {
  return (
    <div className='mx-auto max-w-screen-xl p-4 md:px-8'>
      <div className='grid gap-8 sm:grid-cols-2'>
        <div className='flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32'>
          <p className='mb-4 text-sm font-semibold uppercase text-primary md:text-base'>
            Error 404
          </p>
          <h1 className='mb-2 text-center text-2xl font-bold text-primary sm:text-left md:text-3xl'>
            Page not found
          </h1>

          <p className='mb-8 text-center text-primary sm:text-left md:text-lg'>
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to='/'
            className='inline-block rounded-lg bg-accent px-8 py-3 text-center
            text-sm font-semibold text-white duration-200 hover:shadow-md'
          >
            Go home
          </Link>
        </div>

        <div className='h-80 overflow-hidden rounded-md shadow-md md:h-auto'>
          <img
            src={notFound}
            loading='lazy'
            alt='not_found'
            className='h-full w-full object-contain '
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
