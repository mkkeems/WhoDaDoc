import { PageContainer } from '../../components/PageLayout';
import SearchForm from '../../features/SearchForm/SearchForm';
import Navbar from '../../components/Navbar/Navbar';
import { TopSectionWrap, SectionContent } from '../HomePage/styles';

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSectionWrap>
        <SectionContent>
          <h1>We will find you local doctors you will love</h1>
          <SearchForm />
        </SectionContent>
      </TopSectionWrap>
    </PageContainer>
  );
};

export default HomePage;
