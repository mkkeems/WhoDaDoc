import { PageContainer } from '../../components/PageContainer';
import SearchForm from '../../features/SearchForm/SearchForm';
// import Navbar from '../../components/Navbar/Navbar';
import {
  SectionWrap,
  SectionContent,
  TestimonialWrap,
} from '../HomePage/styles';
import DocImg from '../../assets/doc-img1.png';

const HomePage = () => {
  return (
    <PageContainer>
      {/* <Navbar /> */}
      <SectionWrap>
        <SectionContent>
          <h1>We will find you local doctors you will love</h1>
          <SearchForm />
        </SectionContent>
      </SectionWrap>
      <SectionWrap className="white">
        <TestimonialWrap>
          <div className="center-text">
            <h2>Testimonial</h2>
            <p>
              “Who Da Doc is my favorite app and has made my doctor’s visits in
              Korea so much easier! I used to dread going to the doctor but now
              I skip my way to my local clinics, knowing that I am in good
              hands.“
            </p>
            <p>
              <i>Jenny, from the Block</i>
            </p>
          </div>
          <img src={DocImg} alt="doc-img" />
        </TestimonialWrap>
      </SectionWrap>
    </PageContainer>
  );
};

export default HomePage;
