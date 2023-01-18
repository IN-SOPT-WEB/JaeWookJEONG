import { rest } from 'msw';
import { LetterInfo } from '../types';

const letterList = [
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
  rest.post<LetterInfo>('/api/write', async (req, res, ctx) => {
    const { username, password, content, hint } = await req.json();

    const newLetter = {
      username,
      password,
      content,
      hint,
    };

    letterList.push(newLetter);
    localStorage.setItem('letters', JSON.stringify(letterList));

    return res(ctx.status(200), ctx.delay(400));
  }),
];

export default handlers;
