import { Routes, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd'; 
import HomePage from './presentation/pages/HomePage';
import ArticleDetailPage from './presentation/pages/ArticleDetailPage';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          News App
        </Title>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div style={{ background: 'transparent', padding: 24, minHeight: 380 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/article" element={<ArticleDetailPage />} />
            </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        News App ©{new Date().getFullYear()} By Reza
      </Footer>
    </Layout>
  );
}

export default App;