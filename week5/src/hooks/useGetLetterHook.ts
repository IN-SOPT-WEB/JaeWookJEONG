import axios from 'axios';
import { useState, useEffect } from 'react';
import { LetterProps } from '../types';

export const useGetLetterHook = () => {
  const [letters, setLetter] = useState<LetterProps[]>([]);

  useEffect(() => {
    const getLetter = async () => {
      const response = await axios.get('/api/letters');
      setLetter(JSON.parse(response.data));
    };

    getLetter();
  }, []);

  return { letters };
};
