import Portugal from './assets/image/Portugal.webp';
import Korea from './assets/image/Korea.webp';
import Ghana from './assets/image/Ghana.png';
import Uruguay from './assets/image/Uruguay.png';

interface QuizListInfo {
  src: string;
  alt: string;
  answer: string;
}

interface QuizAnswerInfo {
  id: number;
  answer: string;
}

const quizList: QuizListInfo[] = [
  {
    src: Portugal,
    alt: 'portugal',
    answer: '포르투갈',
  },
  {
    src: Korea,
    alt: 'Korea',
    answer: '대한민국',
  },
  {
    src: Ghana,
    alt: 'Ghana',
    answer: '가나',
  },
  {
    src: Uruguay,
    alt: 'Uruguay',
    answer: '우루과이',
  },
];

const quizAnswer: QuizAnswerInfo[] = [
  { id: 1, answer: '대한민국' },
  { id: 2, answer: '포르투갈' },
  { id: 3, answer: '우루과이' },
  { id: 4, answer: '가나' },
  { id: 5, answer: '일본' },
];

export { quizList, quizAnswer };
