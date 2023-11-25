import { styled } from 'styled-components';
import { useState } from 'react';
import theme from '../../styles/theme';
import Button from '../../components/Button';

function SearchResultList() {
  const [detail, setDetail] = useState(null);
  const [toggle, setToggle] = useState(false);

  const clickDetailHandler = (item, setDetail) => {
    setDetail({
      address: item.address,
      doctor: item.doctor,
      specialised: item.treatable_symptoms,
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
              <img
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww"
                width={200}
                height={200}
              />
              <h2 style={{ paddingTop: '30px' }}>Name: {detail.doctor}</h2>
              <p>Address : {detail.address}</p>
              <p>Phone Number : 000 0000 0000</p>
              <p>Specialised with {detail.specialised}</p>
              <p>English Speaking</p>
              <a
                href="https://calendly.com/medical_appointments/book"
                target="_blank"
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
          <Header>12 Internal Medicine Clinics Nearby</Header>
        </HeaderWrap>

        {MOCK_DATA.map((item) => (
          <SearchResultListBox key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Name onClick={() => clickDetailHandler(item, setDetail)}>
                {item.name}
              </Name>
              <Button
                onClick={() => clickButtonHandler(item, setDetail)}
                type="button"
                className="buttonForInfo"
              >
                Clinic Info
              </Button>
            </div>

            <Distance>235m away</Distance>
            <Skills>treats {item.treatable_symptoms}</Skills>
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

const InfoWrapper = styled.div`
  border-radius: 10px;
  background: white;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  left: ${({ $toggle }) => ($toggle ? '-470px' : '0')};
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
    address: '서울특별시',
    doctor: '김김김',
  },
  {
    id: 2,
    name: 'Chung-Ang University Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '대구광역시',
    doctor: '이이이',
  },
  {
    id: 3,
    name: 'Ewha Womans University Mokdong Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '동대문구',
    doctor: '박박박',
  },
  {
    id: 4,
    name: 'Gangbuk Samsung Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '인천',
    doctor: '서서서',
  },
  {
    id: 5,
    name: 'Hanyang University Seoul Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '파주',
    doctor: '하하하',
  },
  {
    id: 6,
    name: '피부과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '졸려',
    doctor: '이름이',
  },
  {
    id: 7,
    name: '치과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '으아아아',
    doctor: '뭐야',
  },
  {
    id: 8,
    name: '내과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: 'ㅋㅋㅋㅋ',
    doctor: '자고싶다',
  },
  {
    id: 9,
    name: '피부과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: 'ㅎㅎㅎㅎ',
    doctor: '김김김',
  },
  {
    id: 10,
    name: '치과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: 'ㅁㅇ러ㅣㅏㅇㅁㄹ',
    doctor: '김김김',
  },
  {
    id: 11,
    name: '내과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '9',
    doctor: '김김김',
  },
  {
    id: 12,
    name: '피부과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '0',
    doctor: '김김김',
  },
];
