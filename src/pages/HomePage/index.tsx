import MainSlider from '../../components/MainSlider';
import SimilarProducts from '../../components/SimilarProducts';
import { useGetAllProductsQuery } from '../../app/services/productsApi';
import { CarouselTitle } from '../../constants/constants';
import Skeleton from '../../components/Skeleton';
import Category from '../../components/Category';
import { links } from '../../constants/constants';

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  const { brandNew, hotPrices, products } = data || {};

  return (
    <main className='main-container'>
      <MainSlider />
      {isLoading ? (
        <div className='flex gap-3'>
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <SimilarProducts products={brandNew || []}>
          {CarouselTitle.BRAND_NEW}
        </SimilarProducts>
      )}
      <h3 className='mb-5 text-3xl font-bold text-primary'>Shop by category</h3>
      <div className='grid place-items-center gap-3 gap-y-7 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        <Category
          availableAmount={products?.totalPhonesCount || 0}
          link={links[1].link}
          image={links[1].image}
          title={links[1].name}
        />
        <Category
          availableAmount={products?.totalTabletsCount || 0}
          link={links[2].link}
          image={links[2].image}
          title={links[2].name}
        />
        <Category
          availableAmount={products?.totalAccessoriesCount || 0}
          link={links[3].link}
          image={links[3].image}
          title={links[3].name}
        />
      </div>

      {isLoading ? (
        <div className='flex gap-3'>
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <SimilarProducts products={hotPrices || []}>
          {CarouselTitle.HOT_PRICES}
        </SimilarProducts>
      )}
    </main>
  );
};

export default Home;
