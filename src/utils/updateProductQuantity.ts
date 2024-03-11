import { IProduct } from '../app/types';
import { QuantityType } from '../constants/constants';

const updateProductQuantity = (product: IProduct, type: string) => {
  if (type === QuantityType.UP) {
    return (product.quantity || 1) + 1;
  }

  if (type === QuantityType.DOWN && product.quantity !== 1) {
    return (product.quantity || 1) - 1;
  }
};

export default updateProductQuantity;
