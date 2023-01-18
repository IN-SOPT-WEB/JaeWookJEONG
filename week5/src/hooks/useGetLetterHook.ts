import axios from 'axios';
import { useState, useEffect } from 'react';
import { LetterInfo } from '../types';

export const useGetLetterHook = () => {
  const [letterList, setLetterList] = useState<LetterInfo[]>([]);

  useEffect(() => {
    const getLetter = async () => {
      const response = await axios.get('/api/letters');
      setLetterList(JSON.parse(response.data));
    };

    getLetter();
  }, []);

  return { letterList };
};
