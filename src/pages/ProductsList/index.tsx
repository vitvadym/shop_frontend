import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useGetProductsByParamsQuery } from '../../app/services/productsApi';

import Loader from '../../components/Loader';
import Cart from '../../components/ProductCart';

import formatCategoryTitle from '../../utils/formatCategoryTitle';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IProduct } from '../../app/types';

import Pagination from '../../components/Paginate';

const ProductsList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const limit = searchParams.get('limit') || 8;
  const page = searchParams.get('page') || 1;
  const sort = searchParams.get('sort') || 'year';
  const order = searchParams.get('order') || 'asc';

  const [params, setParams] = useState({
    category,
    limit,
    sort,
    order,
    page,
  });

  const { data, isLoading, isFetching } = useGetProductsByParamsQuery({
    category: category || '',
    query: search || '',
  });

  useEffect(() => {
    navigate(
      {
        search: `limit=${params.limit}&sort=${params.sort}&order=${params.order}&page=${params.page}`,
      },
      {
        replace: true,
        preventScrollReset: true,
      },
    );
  }, [navigate, params.limit, params.order, params.page, params.sort]);

  const handleChangeParams = (event: ChangeEvent<HTMLSelectElement>) => {
    setParams({
      ...params,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangePage = useCallback((page: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page,
    }));
  }, []);

  return (
    <div className='mx-auto max-w-screen-xl p-4'>
      <h1 className='mb-4 text-xl font-bold'>
        {category && formatCategoryTitle(category)}
      </h1>
      <div className='flex gap-5 p-3 text-sm'>
        <div className='w-32'>
          <label className='block text-secondary'>Items on page</label>
          <select
            onChange={handleChangeParams}
            className='w-full rounded-lg px-3 py-2 text-secondary outline-none'
            name='limit'
            defaultValue={params.limit}
          >
            <option value='4'>4</option>
            <option value='8'>8</option>
            <option value='16'>16</option>
          </select>
        </div>
        <div className='w-32'>
          <label className='block text-secondary'>Sort by</label>
          <select
            onChange={handleChangeParams}
            name='sort'
            defaultValue={params.sort}
            className='w-full rounded-lg px-3 py-2 text-secondary outline-none'
          >
            <option value='price'>Price</option>
            <option value='year'>Year</option>
          </select>
        </div>
        <div className='w-32'>
          <label className='block text-secondary'>Order</label>
          <select
            onChange={handleChangeParams}
            defaultValue={params.order}
            name='order'
            className='w-full rounded-lg px-3 py-2 text-secondary outline-none'
          >
            <option value='desc'>descending</option>
            <option value='asc'>ascending</option>
          </select>
        </div>
      </div>
      <div className='grid place-items-center gap-3 gap-y-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {(isLoading || isFetching) && <Loader />}
        {data &&
          data?.products.map((product: IProduct) => (
            <Cart
              key={product.id}
              product={product}
            />
          ))}
      </div>
      <Pagination
        perPage={+params.limit}
        total={124}
        currentPage={+params.page}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

export default ProductsList;
