import { useEffect, useState } from 'react';
import { mainSliderImages } from '../../constants/constants';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const MainSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex === mainSliderImages.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(mainSliderImages.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  return (
    <>
      <div className='group relative mx-auto flex h-[500px] max-w-full items-center justify-center'>
        <button
          onClick={prevImage}
          className='absolute left-7 top-[50%] hidden  translate-y-[-50%] rounded-full bg-white bg-opacity-50 p-2 shadow-md group-hover:block'
        >
          <ChevronLeftIcon width={20} />
        </button>
        <div
          style={{
            backgroundImage: `url(${mainSliderImages[currentImageIndex]})`,
          }}
          className='h-full w-full rounded-md bg-cover bg-center duration-300'
        />
        <button
          onClick={nextImage}
          className='absolute right-7 top-[50%] hidden translate-y-[-50%] rounded-full bg-white bg-opacity-60 p-2 shadow-md duration-300 group-hover:block'
        >
          <ChevronRightIcon width={20} />
        </button>
      </div>

      <div className='mb-4 flex items-center justify-center'>
        <ul className='flex gap-4 p-4'>
          {mainSliderImages.map((_, index) => (
            <li
              onClick={() => goToImage(index)}
              key={index}
              className={`h-1 w-4 cursor-pointer bg-elements duration-200 
              ${currentImageIndex === index && 'bg-primary'}`}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainSlider;
