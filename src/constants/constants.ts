export enum Paths {
  HOME = '/',
  CART = '/cart',
  FAVORITES = '/favorites',
  ERROR = '*',
  PRODUCTS_LIST = '/:category',
  PRODUCT_DETAIL = '/:category/:itemId',
}

export enum CarouselTitle {
  YOU_MAY_ALSO_LIKE = 'You may also like',
  BRAND_NEW = 'Brand new models',
  HOT_PRICES = 'Hot prices',
}

export enum CartNotifications {
  ADD_TO_CART = 'Product added to cart',
  ADD_TO_FAVORITES = 'Product added to favorites',
}
export const PRODUCTS = '/products';

export const links = [
  { name: 'Home', link: '/' },
  {
    name: 'Phones',
    link: '/phones',
    image: '/img/category-images/phones_main.png',
  },
  {
    name: 'Tablets',
    link: '/tablets',
    image: '/img/category-images/tablets_main.png',
  },
  {
    name: 'Accessories',
    link: '/accessories',
    image: '/img/category-images/accessories_main.png',
  },
] as const;

export enum QuantityType {
  UP = 'UP',
  DOWN = 'DOWN',
}

export const mainSliderImages = [
  '/img/main-slider/slider_image_1.png',
  '/img/main-slider/slider_image_2.jpg',
  '/img/main-slider/slider_image_3.jpg',
] as const;
