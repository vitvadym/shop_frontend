import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  availableAmount: number;
  image: string;
  link: string;
};

const Category: FC<Props> = ({ title, availableAmount, image, link }) => {
  return (
    <div>
      <Link to={link}>
        <img
          src={image}
          alt='categoryy image'
          className='h-[200px] w-[200px] object-contain  duration-300 hover:scale-105'
        />
      </Link>

      <div className=' pt-3'>
        <h3 className='text-xl font-semibold '>{title}</h3>

        <p className='text-secondary'>{`${availableAmount ? `${availableAmount} models` : 'no available amount'}`}</p>
      </div>
    </div>
  );
};

export default Category;
