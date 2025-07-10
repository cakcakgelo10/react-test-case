import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './HomePage';

vi.mock('../hooks/useNews', () => ({
  useNews: () => ({
    data: { articles: [], totalResults: 0 },
    isLoading: false,
    isError: false,
    error: null,
  }),
}));

const renderHomePage = () => {
  const queryClient = new QueryClient();
  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe('HomePage Component', () => {
  it('should render the main title and search bar correctly', () => {
    renderHomePage();

    const mainTitle = screen.getByText(/berita terkini/i);
    const searchInput = screen.getByPlaceholderText(/cari berita.../i);

    expect(mainTitle).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});