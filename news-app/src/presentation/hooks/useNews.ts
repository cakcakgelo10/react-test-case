import { useQuery } from '@tanstack/react-query';
import { getEverything } from '../../data/api/newsApi';

export const useNews = (query: string, page: number) => {
  return useQuery({
    queryKey: ['news', query, page],
    queryFn: () => getEverything({ q: query, page, pageSize: 10 }),
  });
};