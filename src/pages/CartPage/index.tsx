import { useCart } from '../../utils/useCart';
import CartItem from '../../components/CartItem';
import EmptyCart from '../../components/EmptyCart';

const CartPage = () => {
  const { products, total } = useCart();

  return (
    <div className='main-container'>
      <h1 className='mb-4 text-2xl font-bold text-primary'>Cart</h1>
      {!products.length && <EmptyCart />}
      <div className='space-y-5'>
        {products.length > 0 &&
          products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
            />
          ))}
        {products.length > 0 && (
          <div className='justify-end md:flex'>
            <div className='flex flex-col gap-4 rounded-md border border-elements bg-white px-20 py-5 shadow-sm'>
              <div className='flex flex-col items-center'>
                <p className='text-lg font-bold'>${total}</p>
                <p className='w-fit text-secondary'>
                  {`Total for ${products.length} ${products.length > 1 ? 'items' : 'item'} `}
                </p>
              </div>
              <button className='w-full rounded-lg bg-accent px-8 py-3 text-center text-sm font-semibold text-white duration-300 md:w-fit '>
                Check out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
