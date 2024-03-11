import { ChevronLeftIcon } from '@heroicons/react/24/outline';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const GoBack = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(`/${category}`);
  };
  return (
    <div
      className='mb-4 inline-flex cursor-pointer items-center gap-1 font-normal text-secondary duration-200 hover:text-primary'
      onClick={handleGoBack}
    >
      <ChevronLeftIcon width={18} />
      Back
    </div>
  );
};

export default GoBack;
