import { FC } from 'react';
import { IProduct } from '../../app/types';
import formatCapacitySpec from '../../utils/formatCapacitySpec';

type Props = Partial<IProduct>;

const SpecsBrief: FC<Props> = ({ capacity, ram, screen }) => {
  return (
    <>
      <p className='mt-2 flex items-center justify-between text-sm '>
        <span className='text-secondary'>Screen</span>
        {screen}
      </p>
      <p className='mt-1.5 flex items-center justify-between text-sm'>
        <span className='text-secondary'>Capacity</span>
        <span>{formatCapacitySpec(capacity || '0')}</span>
      </p>
      <p className='mt-1.5 flex items-center justify-between text-sm'>
        <span className='text-secondary'>RAM</span>
        <span>{formatCapacitySpec(ram || '0')}</span>
      </p>
    </>
  );
};

export default SpecsBrief;
