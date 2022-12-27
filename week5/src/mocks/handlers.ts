import { rest } from 'msw';
import { LetterProps } from '../types';

const letters = [
  {
    username: '정재욱',
    password: '1129',
    content: '안녕하세요?',
    hint: '생일',
  },
];
const handlers = [
  rest.get('/api/letters', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(400), ctx.json(localStorage.getItem('letters')));
  }),
  rest.post<LetterProps>('/api/write', async (req, res, ctx) => {
    const { username, password, content, hint } = await req.json();

    const newLetter = {
      username,
      password,
      content,
      hint,
    };

    const text = localStorage.getItem('letters');
    localStorage.setItem('letters', JSON.stringify(letters));

    return res(ctx.status(200), ctx.delay(400));
  }),
];

export default handlers;
