import axios from 'axios';
import { Character, ResponseData } from '../types';

const apiData = async ({
  queryKey,
}: {
  queryKey: any;
}): Promise<ResponseData | Character> => {
  const [, { type, query }]: [string, { type: string, query: string }] = queryKey;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/${type}/${query}`,
  );
  return response.data;
};

export default apiData;
