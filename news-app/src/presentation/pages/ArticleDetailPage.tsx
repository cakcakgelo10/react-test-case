import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Image, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'; 
import type { Article } from '../../domain/entities/Article';

const { Paragraph, Title } = Typography;

const ArticleDetailPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state as Article;

  if (!article) {
    navigate('/');
    return null;
  }

  return (
    <div style={{ padding: '20px 50px' }}>
      <Button
        onClick={() => navigate(-1)}
        icon={<ArrowLeftOutlined />}
        style={{ marginBottom: '24px' }}
      >
        Kembali
      </Button>

      <div style={{ background: '#fff', padding: 24, borderRadius: '8px' }}>
        <Title level={2}>{article.title}</Title>
        <Paragraph style={{ color: 'gray' }}>
          Oleh {article.author || 'Tidak diketahui'} | Dipublikasikan pada {new Date(article.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </Paragraph>
        <Image
          width="100%"
          src={article.urlToImage || 'https://via.placeholder.com/800x400'}
          style={{ marginBottom: 24, borderRadius: '8px' }}
        />
        <Paragraph>
          {article.content || 'Konten tidak tersedia.'}
        </Paragraph>
        <Button type="primary" href={article.url} target="_blank">
          Baca Selengkapnya di Sumber Asli
        </Button>
      </div>
    </div>
  );
};

export default ArticleDetailPage;