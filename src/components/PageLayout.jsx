import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { PageContainer } from './PageContainer';

const PageLayout = () => {
  return (
    <PageContainer>
      <Navbar />
      <Outlet />
    </PageContainer>
  );
};

export default PageLayout;
