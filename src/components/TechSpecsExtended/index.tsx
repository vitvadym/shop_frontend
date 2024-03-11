import { FC } from 'react';
import { IProductDetail } from '../../app/types';
import formatCapacitySpec from '../../utils/formatCapacitySpec';

type Props = Partial<IProductDetail>;

const SpecsExtended: FC<Props> = ({
  camera,
  cell,
  capacity,
  ram,
  processor,
  resolution,
  screen,
  zoom,
}) => {
  return (
    <div className='font-medium'>
      <p className='mt-2 flex items-center justify-between text-sm'>
        <span className='text-secondary'>Screen</span>
        <span>{screen}</span>
      </p>
      <p className='mt-2 flex items-center justify-between text-sm'>
        <span className='text-secondary'>Resolution</span>
        <span>{resolution}</span>
      </p>
      <p className='mt-2 flex items-center justify-between text-sm'>
        <span className='text-secondary'>Processor</span>
        <span>{processor}</span>
      </p>
      <p className='mt-2 flex items-center justify-between  text-sm'>
        <span className='text-secondary'>Ram</span>
        <span>{formatCapacitySpec(ram || '0')}</span>
      </p>
      <p className='mt-2 flex items-center justify-between  text-sm'>
        <span className='text-secondary'>Buld in memory</span>
        <span>{formatCapacitySpec(capacity || '0')}</span>
      </p>
      {camera && (
        <p className='mt-2 flex items-center justify-between  text-sm'>
          <span className='text-secondary'>Camera</span>
          <span>{camera}</span>
        </p>
      )}
      {zoom && (
        <p className='mt-2 flex items-center justify-between  text-sm'>
          <span className='text-secondary'>Zoom</span>
          <span>{zoom}</span>
        </p>
      )}
      {cell && cell.length > 1 && (
        <p className='mt-2 flex items-center justify-between  text-sm'>
          <span className='text-secondary'>Cell</span>
          <span>
            {cell?.map((spec, index) =>
              index !== cell?.length - 1 ? `${spec}, ` : spec,
            )}
          </span>
        </p>
      )}
    </div>
  );
};

export default SpecsExtended;
