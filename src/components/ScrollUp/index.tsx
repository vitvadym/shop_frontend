import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollUp = () => {
  return (
    <button className='absolute bottom-20 right-20 rounded-full bg-white p-3 shadow-md'>
      <ChevronUpIcon
        strokeWidth={1}
        width={20}
      />
    </button>
  );
};

export default ScrollUp;
