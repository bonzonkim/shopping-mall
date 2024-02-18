import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {Product} from "../../types.ts";
import {fetcher, QueryKeys} from "../../queryClient.ts";
import ProductDetail from '../../components/products/detail.tsx';

const ProductDetailPage = () => {
  const { id } = useParams<"id">();
  const { data } = useQuery<Product>({
    queryKey: [QueryKeys.PRODUCTS, id],
    queryFn: () =>
      fetcher({
        method: 'GET',
        path: `/products/${id}`,
      })
  })
  if (!data) return null;

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail item={data}/>
    </div>
  )
}

export default ProductDetailPage;
