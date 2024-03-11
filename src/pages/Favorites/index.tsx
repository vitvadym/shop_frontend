import NoFavourites from '../../components/EmptyFavourites';
import Cart from '../../components/ProductCart';
import { useFavorites } from '../../utils/useFavorites';

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div className='main-container'>
      <h1 className='mb-4 text-xl font-bold'>Favourites</h1>
      {!favorites?.length && <NoFavourites />}
      <div className='grid place-items-center gap-3 gap-y-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {favorites?.length > 0 &&
          favorites.map((product) => (
            <Cart
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
