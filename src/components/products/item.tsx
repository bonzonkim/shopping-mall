import { Product } from '../../types';
import {Link} from "react-router-dom";

const ProductItem = ({ category, image, price, rating, title, id }: Product) => {
  return (
      <li className="product-item">
          <Link to={`/products/${id}`}>
        <p className={'product-item_category'}>{category}</p>
        <p className={'product-item_title'}>{title}</p>
        <img className={'product-item_image'} src={image} width={150} height={'300px'} />
        <span className={'product-item_price'}>${price}</span>
        <span className={'product-item_rating'}>{rating.rate}</span>
          </Link>
      </li>
      )
}

export default ProductItem;
