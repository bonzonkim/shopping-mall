import { Product } from '../../types';

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
  }
} : {
    item: Product
  }
) => {
  return (
    <div className="product-detail">
            <span className={'product-detail_category'}>{category}</span>
            <p className={'product-detail_title'}>{title}</p>
            <img className={'product-detail_image'} src={image} width={150} height={'300px'} />
            <p className={'product-detail_description'}>{description}</p>
            <span className={'product-detail_price'}>${price}</span>
        </div>
  )
}

export default ProductDetail;
