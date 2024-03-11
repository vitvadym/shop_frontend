import emptyCart from '../../assets/empty_cart.jpeg';

const EmptyCart = () => {
  return (
    <div className='main-container flex justify-center p-4'>
      <div className=' rounded-md'>
        <img
          className='rounded-md object-contain object-center'
          src={emptyCart}
          alt='empty favourites'
        />
      </div>
    </div>
  );
};

export default EmptyCart;
