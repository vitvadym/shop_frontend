import noFavorites from '../../assets/add-to-favorites-icon.png';

const NoFavorites = () => {
  return (
    <div className='main-container flex-col justify-center p-4'>
      <h1 className='mb-3 p-2 text-center text-3xl font-semibold'>
        You have no favourites=(
      </h1>
      <div className='flex max-h-[300px] justify-center'>
        <img
          className=' object-contain'
          src={noFavorites}
          alt='empty favourites'
        />
      </div>
    </div>
  );
};

export default NoFavorites;
