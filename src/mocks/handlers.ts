import { graphql } from 'msw';
import { v4 as uuid } from 'uuid';
import GET_PRODUCTS from '../graphql/products';

const mock_products = Array.from({ length: 20 }).map(
  (_, i) => ({
    id: uuid(),
    imageUrl: `https://picsum.photos/id/${i + 1}/200/150`,
    price: 5000,
    title: `임시상품 ${i + 1}`,
    createdAt: new Date(1645735501883+(i * 1000 * 60)).toString()
  })
)

export const handlers = [
  graphql.query(GET_PRODUCTS, (_req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      }),
    )
  }),

  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    const found = mock_products.find(item => item.id === req.id)
    console.log(req.id, found)
    if (!found) return res()
    return res(ctx.data(found))
  }),
];
