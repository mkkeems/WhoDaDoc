import { PageContainer } from "../../components/PageLayout";
import SearchForm from "../../features/SearchForm/SearchForm";

const HomePage = () => {
  return (
    <PageContainer>
      <h1>Hello, Tell me where it hurts</h1>
      <SearchForm />
    </PageContainer>
  );
};

export default HomePage;
