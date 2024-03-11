import { api } from './api';
import { PRODUCTS } from '../../constants/constants';
import {
  IProductDetailResponse,
  IProductsResponse,
  IProductTransformedResponse,
} from '../types';

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProductTransformedResponse, void>({
      query: () => ({
        url: `${PRODUCTS}`,
        method: 'GET',
      }),
      transformResponse: (data: IProductsResponse) => {
        const brandNew = data.products.filter(
          (product) => product.year >= 2021,
        );

        const hotPrices = data.products
          .map((product) => ({
            ...product,
            discount: product.fullPrice - product.price,
          }))
          .filter((product) => product.discount > 90);

        return {
          products: data,
          brandNew,
          hotPrices,
        };
      },
    }),
    getProductById: builder.query<
      IProductDetailResponse,
      { itemId: string; category: string }
    >({
      query: ({ itemId, category }) => ({
        url: `${PRODUCTS}/${category}/${itemId}`,
        method: 'GET',
      }),
    }),
    getProductsByParams: builder.query<
      IProductsResponse,
      { category: string; query?: string }
    >({
      query: ({ category, query }) => ({
        url: `${PRODUCTS}/${category}${query}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetProductsByParamsQuery,
  useGetAllProductsQuery,
} = productApi;
