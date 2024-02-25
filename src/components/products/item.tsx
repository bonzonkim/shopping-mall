import { PRODUCT } from '../../graphql/products';
import {Link} from "react-router-dom";

const ProductItem = ({ id, imageUrl, price, title, description, createdAt }: PRODUCT) => {
  return (
      <li className="product-item">
          <Link to={`/products/${id}`}>
        <p className={'product-item_title'}>{title}</p>
        <img className={'product-item_image'} src={imageUrl} width={150} height={'300px'} />
        <span className={'product-item_price'}>${price}</span>
          </Link>
      </li>
      )
}

export default ProductItem;
