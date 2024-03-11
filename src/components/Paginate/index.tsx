import { FC } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: FC<Props> = ({
  perPage,
  total,
  currentPage,
  onChangePage,
}) => {
  const pages: number[] = [...Array(Math.ceil(total / perPage))].map(
    (_, i) => i + 1,
  );

  const handleNextPagePage = () => {
    if (+currentPage < pages.length) {
      onChangePage(currentPage + 1);
    }
  };

  const handlePrevPagePage = () => {
    if (+currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };
  return (
    <ul className='flex justify-center gap-3 p-4 text-xs font-medium'>
      <li>
        <button
          onClick={handlePrevPagePage}
          className='inline-flex size-8 items-center justify-center rounded-full border border-secondary bg-white text-secondary'
        >
          <ChevronLeftIcon
            strokeWidth={currentPage > 1 ? 1 : 0.3}
            width={18}
          />
        </button>
      </li>
      {pages.map((page, index) => (
        <li key={index}>
          <button
            onClick={() => onChangePage(page)}
            className={`inline-flex size-8 items-center  justify-center rounded-full border border-elements
             ${page === +currentPage ? 'bg-primary text-white' : 'bg-white text-primary'}`}
          >
            {page}
          </button>
        </li>
      ))}

      <li>
        <button
          disabled={currentPage === pages.length}
          onClick={handleNextPagePage}
          className='inline-flex size-8 items-center justify-center rounded-full border border-secondary bg-white text-secondary'
        >
          <ChevronRightIcon
            strokeWidth={currentPage === pages.length ? 0.3 : 1}
            width={18}
          />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
