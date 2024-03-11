import { FC, useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { IProduct } from '../../app/types';
import Cart from '../ProductCart';

type Props = {
  products: IProduct[];
  children?: React.ReactNode;
};
const SimilarProducts: FC<Props> = ({ products, children }) => {
  const [currentWithCarousel, setCurrentWithCarousel] = useState(0);
  const [offset, setOffset] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && products && products.length > 0) {
      setCurrentWithCarousel(
        (carouselRef.current.clientWidth * products.length) / 4 - 1250,
      );
    }
  }, [products]);

  const handleNext = () => {
    setOffset((prev) => prev + currentWithCarousel / products.length);
  };

  const handlePrev = () => {
    setOffset((prev) => prev - currentWithCarousel / products.length);
  };

  const isDisabledLeft = offset <= 0;
  const isDisabledRight = offset >= currentWithCarousel;

  return (
    <div className='mx-auto max-w-screen-xl overflow-hidden py-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-3xl font-bold'>{children}</h3>
        <div className='flex gap-2'>
          <button
            onClick={handlePrev}
            disabled={isDisabledLeft}
            className={`rounded-full border border-elements p-2`}
          >
            <ChevronLeftIcon
              width={14}
              strokeWidth={isDisabledLeft ? 0.1 : 1}
            />
          </button>
          <button
            onClick={handleNext}
            disabled={isDisabledRight}
            className={`rounded-full border border-elements p-2 `}
          >
            <ChevronRightIcon
              width={14}
              strokeWidth={isDisabledRight ? 0.1 : 1}
            />
          </button>
        </div>
      </div>
      {products.length > 0 && (
        <div
          ref={carouselRef}
          style={{ transform: `translateX(-${offset}px)` }}
          className={`flex h-[500px] items-center justify-between gap-3 duration-200`}
        >
          {products?.map((product) => (
            <div
              key={product.id}
              className='min-w-[300px] py-2'
            >
              <Cart product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
