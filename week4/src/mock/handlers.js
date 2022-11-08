import { rest } from 'msw';

const handlers = [
  rest.get('/api/products', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(400),
      ctx.json({
        items: [
          { id: 1, user: '김남준', github: 'namjunkim12' },
          { id: 2, user: '김서현', github: 'seobbang' },
          { id: 3, user: '김현수', github: 'borimong' },
          { id: 4, user: '김형겸', github: 'Brokyeom' },
          { id: 5, user: '나림', github: 'R1mmm' },
          { id: 6, user: '류성경', github: 'Seong-Gyeong' },
          { id: 7, user: '문서연', github: 'seoyeun0106' },
          { id: 8, user: '박현지', github: 'iamphj3' },
          { id: 9, user: '서지수', github: 'seojisoosoo' },
          { id: 10, user: '이주함', github: 'joohaem' },
          { id: 11, user: '유준상', github: 'YOOJS1205' },
          { id: 12, user: '정현욱', github: 'hyunwookchung' },
          { id: 13, user: '송하윤', github: 'hayounSong' },
          { id: 14, user: '송우영', github: 'wooyoung0830' },
          { id: 15, user: '서혜은', github: 'henization' },
          { id: 16, user: '윤지영', github: 'NaveOWO' },
          { id: 17, user: '이서영', github: 'leeseooo' },
          { id: 18, user: '장명지', github: 'Dangpy' },
          { id: 19, user: '정재욱', github: 'Dev-jwJeong' },
          { id: 20, user: '최유진', github: 'choichoijin' },
          { id: 21, user: '최은형', github: 'ilmerry' },
          { id: 22, user: '한예원', github: 'talkingOrange' },
          { id: 23, user: '홍명헌', github: 'myeongheonhong' },
          { id: 24, user: '홍서희', github: 'Happhee' },
        ],
      })
    );
  }),
];

export default handlers;
