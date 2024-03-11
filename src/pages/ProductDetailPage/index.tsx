import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

import { useGetProductByIdQuery } from '../../app/services/productsApi';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Loader from '../../components/Loader';
import SpecsExtended from '../../components/TechSpecsExtended';
import SpecsBrief from '../../components/TechSpecs';
import ProductDescription from '../../components/ProductDescription';
import GoBack from '../../components/GoBack';
import SimilarProducts from '../../components/SimilarProducts';

import changeItemId from '../../utils/chageItemId';
import formatCapacitySpec from '../../utils/formatCapacitySpec';
import formatColorSpec from '../../utils/formatColorSpec';

import { useCart } from '../../utils/useCart';
import { useFavorites } from '../../utils/useFavorites';
import { CarouselTitle } from '../../constants/constants';

const ProductDetail = () => {
  const { category, itemId } = useParams();

  const navigate = useNavigate();

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const { addToCart, isProductInCart } = useCart();
  const { handleToggleFavorite, isProductInFavorites } = useFavorites();

  const { data, isLoading, isSuccess, isFetching } = useGetProductByIdQuery({
    category: category || '',
    itemId: itemId || '',
  });

  const { singleProductBrief, singleProductDetail, similarProducts } =
    data || {};

  const handeChangeImage = (index: number) => {
    setCurrentImgIndex(index);
  };

  const handleNextImage = () => {
    if (
      singleProductDetail &&
      currentImgIndex === singleProductDetail.images.length - 1
    ) {
      setCurrentImgIndex(0);
    } else {
      setCurrentImgIndex(currentImgIndex + 1);
    }
  };

  const handleSelectCapacityAndColor = (target: string) => {
    const newId = changeItemId({
      target,
      initItemId: itemId || '',
      initCapacity: singleProductDetail?.capacity || '',
      initColor: singleProductDetail?.color || '',
    });

    navigate(`/${category}/${newId}`);
  };

  return (
    <div className='main-container'>
      {(isLoading || isFetching) && <Loader />}
      {isSuccess && (
        <>
          <GoBack />
          <h2 className='text-gray-800 mb-5 text-2xl font-bold lg:text-3xl'>
            {singleProductDetail?.name}
          </h2>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='flex  flex-col-reverse justify-center gap-10 md:flex-row'>
              <div className='flex justify-center gap-2 md:flex-col'>
                {singleProductDetail?.images.map((image, index) => (
                  <div
                    className=''
                    key={image}
                  >
                    <img
                      src={`/${image}`}
                      alt='product image'
                      className={`h-20 w-20 cursor-pointer rounded-md border border-elements object-contain p-1 duration-200 
                    ${currentImgIndex === index && 'border-primary'}`}
                      onClick={() => handeChangeImage(index)}
                    />
                  </div>
                ))}
              </div>
              <div className='flex justify-center gap-4'>
                <div className='flex'>
                  <img
                    src={`/${singleProductDetail?.images[currentImgIndex]}`}
                    alt='product image'
                    className='aspect-square h-[500px] object-contain'
                    onClick={handleNextImage}
                  />
                </div>
              </div>
            </div>

            <div className='p-2'>
              <div className='mb-4  md:mb-6'>
                <div className='mb-3 flex justify-between text-sm font-semibold text-secondary md:text-base'>
                  <p>Available colors</p>
                  <p className='text-xs text-secondary'>ID: 3522325</p>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {singleProductDetail?.colorsAvailable.map((color) => (
                    <button
                      key={color}
                      title={color}
                      onClick={() => handleSelectCapacityAndColor(color)}
                      className={`button-select-color 
                    bg-${formatColorSpec(color)} 
                    ${color === singleProductDetail?.color && 'ring-primary'}`}
                    ></button>
                  ))}
                </div>
              </div>

              <div className='mb-8 md:mb-10'>
                <span className='mb-3 inline-block text-sm font-semibold text-secondary md:text-base'>
                  Capacity
                </span>

                <div className='flex gap-3'>
                  {singleProductDetail?.capacityAvailable.map(
                    (capacityAvailable) => (
                      <button
                        key={capacityAvailable}
                        onClick={() =>
                          handleSelectCapacityAndColor(capacityAvailable)
                        }
                        className={`flex  items-center justify-center rounded-md border border-elements
                      px-2 py-1 text-center text-sm  font-medium duration-200 hover:border-primary
                     ${capacityAvailable === singleProductDetail?.capacity && 'bg-primary text-white'}`}
                      >
                        {formatCapacitySpec(capacityAvailable)}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className='mb-4'>
                <div className='flex items-center gap-2'>
                  <span className='text-gray-800 text-xl font-bold md:text-2xl'>
                    ${singleProductDetail?.priceRegular}
                  </span>
                  <span className='mb-0.5 text-secondary line-through'>
                    ${singleProductDetail?.priceDiscount}
                  </span>
                </div>
              </div>

              <div className='mb-5 gap-2.5'>
                <div className='flex max-w-[300px] items-center gap-5 font-semibold'>
                  <button
                    onClick={() =>
                      singleProductBrief && addToCart(singleProductBrief)
                    }
                    className={`button ${isProductInCart(itemId || '') && 'active'}`}
                  >
                    {isProductInCart(itemId || '')
                      ? 'Added to cart'
                      : 'Add to cart'}
                  </button>

                  <button
                    onClick={() =>
                      singleProductBrief &&
                      handleToggleFavorite(singleProductBrief)
                    }
                    className='button-like'
                  >
                    {isProductInFavorites(itemId || '') ? (
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
              <div className='max-w-[300px] font-medium'>
                <SpecsBrief
                  capacity={singleProductDetail?.capacity}
                  screen={singleProductDetail?.screen}
                  ram={singleProductDetail?.ram}
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-7 md:grid-cols-2'>
            <div className='mt-5'>
              <h2 className='mb-6 text-xl font-bold'>About</h2>
              <ProductDescription
                description={singleProductDetail?.description || []}
              />
            </div>

            <div className='mt-5'>
              <h2 className='mb-5 text-xl font-bold'>Tech specs</h2>
              <SpecsExtended {...singleProductDetail} />
            </div>
          </div>
          <SimilarProducts products={similarProducts || []}>
            {CarouselTitle.YOU_MAY_ALSO_LIKE}
          </SimilarProducts>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
