import { FC, Fragment } from 'react';
import { IProductDetail } from '../../app/types';

type Props = Pick<IProductDetail, 'description'>;

const ProductDescription: FC<Props> = ({ description }) => {
  return (
    <>
      {description?.map((paragraph, index) => (
        <Fragment key={index}>
          <h3 className='mb-5 font-semibold'>{paragraph.title}</h3>
          {paragraph.text.map((text, index) => (
            <p
              key={index}
              className='mb-5 text-secondary'
            >
              {text}
            </p>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default ProductDescription;
