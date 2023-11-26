import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import theme from '../../styles/theme';
import Button from '../../components/Button';

function SearchResultList({ data }) {
  const [detail, setDetail] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [resultsData, setResultsData] = useState(MOCK_DATA);

  // console.log({ dataFromSearchResultListProps: data })
  console.log({ resultsData });
  console.log('kjslkfjksldhfkhslk');
  useEffect(() => {
    if (data) {
      setResultsData(data);
    }
  }, [data]);

  // data = data['data'];

  const clickDetailHandler = (item, setDetail) => {
    setDetail({
      address: item.address,
      doctor: item.doctor,
      specialised: item.treatable_symptoms,
      url: item.url,
    });
  };

  const clickToggleHandler = () => {
    setToggle(!toggle);
    toggle !== true && setDetail(null);
  };

  const clickButtonHandler = (item, setDetail) => {
    setDetail({
      address: item.address,
      doctor: item.doctor,
      specialised: item.treatable_symptoms,
      url: item.url,
    });
  };

  const clickXhandler = () => {
    setDetail(null);
  };

  const ClinicDetails = () => {
    return (
      <>
        {detail && (
          <InformationForClinic>
            <InfoWrapper>
              <img src={detail.url} width={200} height={200} />
              <h2 style={{ paddingTop: '30px' }}>Name: {detail.doctor}</h2>
              <P>
                <strong>🏥 Address</strong>
                <br />
                {detail.address}
              </P>
              <P>
                <strong>☎️ Phone Number</strong>
                <br />
                000 0000 0000
              </P>
              <P>
                <strong>🩺 Specialised with</strong> <br />{' '}
                {detail.specialised.join()}
              </P>
              <p style={{ paddingBottom: '50px' }}>
                <strong>🗣 English Speaking</strong>
              </p>
              <a
                href="https://calendly.com/medical_appointments/book"
                target="_blank"
                rel="noreferrer"
              >
                <Button type="button" className="buttonForInfo">
                  Book now
                </Button>
              </a>
              <Toggle onClick={() => clickXhandler()}>X</Toggle>
            </InfoWrapper>
          </InformationForClinic>
        )}
      </>
    );
  };

  return (
    <>
      <SearchResultListContainer $toggle={toggle}>
        <Toggle onClick={() => clickToggleHandler()}>
          {toggle ? '>' : '<'}
        </Toggle>
        <HeaderWrap>
          <Header>{data?.length} Internal Medicine Clinics Nearby</Header>
        </HeaderWrap>

        {resultsData.map((item, index) => (
          <SearchResultListBox key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Name onClick={() => clickDetailHandler(item, setDetail)}>
                {item.name}
              </Name>
              <Button
                onClick={() => clickButtonHandler(MOCK_DATA[index], setDetail)}
                type="button"
                className="buttonForInfo"
              >
                Clinic Info
              </Button>
            </div>

            <Distance>235m away</Distance>
            <Skills>
              treats{' '}
              {item.treatable_symptoms
                ? item.treatable_symptoms.join()
                : item.symptoms}
            </Skills>
            <TextForList>51 Reviews (4.7)</TextForList>
            <TextForList>Insurance Coverage</TextForList>
            <TextForList>
              walk in available • reservation recommended
            </TextForList>
            <div style={{ marginTop: '10px' }}>
              <Tag>Efficient</Tag>
              <Tag>Highly rated</Tag>
              <Tag>Clean</Tag>
              <Tag>Kid-friendly</Tag>
            </div>
          </SearchResultListBox>
        ))}
      </SearchResultListContainer>
      ;
      <ClinicDetails />
    </>
  );
}

export default SearchResultList;

const P = styled.p`
  padding-bottom: 10px;
`;

const InfoWrapper = styled.div`
  border-radius: 10px;
  background: white;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const Tag = styled.span`
  padding: 4px;
  color: ${theme.colors.blue};
  border-radius: 12px;
  border: 1px solid ${theme.colors.blue};
  font-size: 14px;
  margin-right: 10px;
`;

const Distance = styled.p`
  color: ${theme.colors.blue};
  margin: 1px;
`;

const Skills = styled.p`
  color: ${theme.colors.orange};
  margin: 1px;
`;

const TextForList = styled.p`
  color: #666666;
`;

const InformationForClinic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: 30px;
  height: 100px;
  border: 1px solid ${theme.colors.blue};
  background: ${theme.colors.lightOrange};
  position: absolute;
  right: -300px;
  top: 0px;
  min-height: 100vh;
  width: 300px;
  overflow: visible;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.lightOrange};
  width: 100%;
  padding: 20px;
`;
const Header = styled.h2`
  font-weight: 900;
`;

const Toggle = styled.button`
  position: absolute;
  right: -1px;
  top: 0;
  z-index: 3;
  width: 20px;
  height: 30px;
  background-color: white;
  border: 2px solid black;
`;

const SearchResultListContainer = styled.div`
  position: relative;
  left: ${({ $toggle }) => ($toggle ? '-660px' : '0')};
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px 0px;
  min-height: 100vh;
  max-height: 100vh;

  overflow-y: scroll;
`;
const SearchResultListBox = styled.div`
  background: white;
  border: 1px solid black;
  width: 100%;
  padding: 10px;
`;
const Name = styled.div`
  padding-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MOCK_DATA = [
  {
    id: 1,
    name: 'H Plus Yangji Hospital',
    treatable_symptoms: ['스케일링', '충치', '사랑니'],
    address: '서울 강남구 도산대로',
    doctor: '강하늘',
    url: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Chung-Ang University Hospital',
    treatable_symptoms: ['감기', '기침', '인후통'],
    address: '서울 강남구 신사동',
    doctor: '박경남',
    url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Ewha Womans University Mokdong Hospital',
    treatable_symptoms: ['두통', '현기증', '시력저하'],
    address: '서울 동대문구',
    doctor: '김은경',
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    name: 'Gangbuk Samsung Hospital',
    treatable_symptoms: ['복통', '두통', '치통'],
    address: '인천광역시 월미도',
    doctor: '한예지',
    url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 5,
    name: 'Hanyang University Seoul Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '경기도 파주시 문산읍',
    doctor: '김지선',
    url: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3Dw',
  },
  {
    id: 6,
    name: '기흥피부과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '경기도 기흥',
    doctor: '강아름',
    url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 7,
    name: '치과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '경기도 남양주시 와부읍',
    doctor: '박지혜',
    url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    name: '내과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '서울 여의도',
    doctor: '정수연',
    url: 'https://plus.unsplash.com/premium_photo-1661757221486-183030ef8670?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 9,
    name: '이비인후과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '서울 양평동',
    doctor: '이순신',
    url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 10,
    name: '치과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '서울 종로구 숭인동',
    doctor: '김여울',
    url: 'https://images.unsplash.com/photo-1579165466949-3180a3d056d5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
  },
];
