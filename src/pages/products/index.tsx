import { useQuery } from '@tanstack/react-query';
import { fetcher, QueryKeys } from '../../queryClient';

const ProductList = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () => 
      fetcher({
        method: 'GET',
        path: '/products',
      }),
  });


  console.log(data);

  return (<div>상품목록</div>)
};

export default ProductList;
