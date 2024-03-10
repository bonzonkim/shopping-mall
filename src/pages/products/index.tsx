import {useQuery} from '@tanstack/react-query';
import {graphqlFetcher, QueryKeys} from '../../queryClient';
import GET_PRODUCTS, { PRODUCTS } from '../../graphql/products.ts';
import ProductItem from '../../components/products/item.tsx';

const ProductList = () => {
  const { data } = useQuery<PRODUCTS>(
    {
      queryKey: [QueryKeys.PRODUCTS],
      queryFn: graphqlFetcher(GET_PRODUCTS)
    }
  )

  return (
  <div>
      <h2>상품목록</h2>
      <ul className={'products'}>
        {data?.products?.map(product => (
        <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  )
};

export default ProductList;
