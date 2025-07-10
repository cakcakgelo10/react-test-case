import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
  },
});

export default apiClient;

import type { Article } from '../../domain/entities/Article';

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const getEverything = async (params?: { q?: string; page?: number; pageSize?: number }) => {
  const response = await apiClient.get<NewsApiResponse>('/everything', { params });
  return response.data;
};