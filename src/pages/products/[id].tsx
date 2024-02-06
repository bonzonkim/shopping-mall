import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams<"id">();
  return (
  <div>
      {id}번 상품상세
  </div>
  )
}

export default ProductDetail;
