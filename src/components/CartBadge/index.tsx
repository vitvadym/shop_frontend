import { FC } from 'react';

type Props = {
  badge: number;
};
const CartBadge: FC<Props> = ({ badge }) => {
  return (
    <span className='absolute -right-0 top-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary  text-[10px] text-white'>
      {badge}
    </span>
  );
};

export default CartBadge;
