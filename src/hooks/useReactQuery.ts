import { useQuery, UseQueryResult } from 'react-query';

import apiData from 'utils/apiData';

export default function useReactQuery<Type>(
  type: string,
  query: string,
): UseQueryResult<Type, Error> {
  return useQuery(
    [type, { type, query }],
    apiData,
  );
}
