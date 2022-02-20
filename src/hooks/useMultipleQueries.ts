import { useQueries } from 'react-query';

import apiData from 'utils/apiData';

export default function useMultipleQueries(
  type: string,
  idsArray: string[],
) {
  return useQueries(
    idsArray.map((id) => ({
      queryKey: [type, { type, query: id }],
      queryFn: apiData,
    })),
  );
}