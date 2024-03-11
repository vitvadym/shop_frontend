export interface IProduct {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  quantity?: number;
}

export type Description = {
  title: string;
  text: string[];
};

export interface IProductDetail {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
}

export interface IProductsResponse {
  products: IProduct[];
  totalPhonesCount: number;
  totalTabletsCount: number;
  totalAccessoriesCount: number;
}

export interface IProductTransformedResponse {
  products: IProductsResponse;
  brandNew: IProduct[];
  hotPrices: IProduct[];
}

export interface IProductDetailResponse {
  singleProductBrief: IProduct;
  singleProductDetail: IProductDetail;
  similarProducts: IProduct[];
}
