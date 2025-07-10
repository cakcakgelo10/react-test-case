import React, { useState } from 'react';
import { useNews } from '../hooks/useNews';
import { Card, List, Spin, Typography, Alert, Input, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import type { Article } from '../../domain/entities/Article'; 

const { Title } = Typography;
const { Search } = Input;

const HomePage: React.FC = () => {
  const navigate = useNavigate(); 
  
  const [query, setQuery] = useState('tesla');
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useNews(query, page);

  const handleSearch = (value: string) => {
    if (value.trim() !== '') {
      setQuery(value);
      setPage(1);
    }
  };
  
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleCardClick = (article: Article) => {
    navigate('/article', { state: article });
  };

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}><Spin size="large" /></div>;
  }

  if (isError) {
    return <Alert message="Error" description={error.message} type="error" showIcon style={{ margin: '20px 50px' }} />;
  }

  return (
    <div style={{ padding: '20px 50px' }}>
      <Title>Berita Terkini</Title>

      <Search
        placeholder="Cari berita..."
        onSearch={handleSearch}
        enterButton
        size="large"
        style={{ marginBottom: '20px' }}
      />

      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
        dataSource={data?.articles}
        renderItem={(article) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt={article.title} src={article.urlToImage || 'https://via.placeholder.com/400x300'} />}
              onClick={() => handleCardClick(article)} 
            >
              <Card.Meta title={article.title} description={article.description?.substring(0, 100) + '...'} />
            </Card>
          </List.Item>
        )}
      />

      <Pagination
        current={page}
        total={data?.totalResults}
        pageSize={10} 
        onChange={handlePageChange}
        style={{ marginTop: '20px', textAlign: 'center' }}
        showSizeChanger={false}
        showTotal={(total, range) => `${range[0]}-${range[1]} dari ${total} berita`}
      />
    </div>
  );
};

export default HomePage;