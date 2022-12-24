import { rest } from 'msw';
import { LetterProps } from '../types';

const letters = [
  {
    name: '정재욱',
    password: '1129',
    content: '안녕하세요?',
    hint: '생일',
  },
];
const handlers = [
  rest.get('/api/letters', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(400), ctx.json(letters));
  }),
  rest.post<LetterProps>('/api/write', async (req, res, ctx) => {
    const { name, password, content, hint } = await req.json();

    const newLetter = {
      name,
      password,
      content,
      hint,
    };

    letters.push(newLetter);
    return res(ctx.status(200), ctx.delay(400));
  }),
];

export default handlers;
