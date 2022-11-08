import { rest } from 'msw';

const handlers = [
  rest.get('/api/products', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(400),
      ctx.json({
        items: [{ name: 'product-1' }, { name: 'product-2' }],
      })
    );
  }),
];

export default handlers;
