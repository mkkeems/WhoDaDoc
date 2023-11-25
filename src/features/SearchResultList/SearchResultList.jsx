import { styled } from 'styled-components';
import { useState } from 'react';
import theme from '../../styles/theme';
import Button from '../../components/Button';


function SearchResultList() {
  const clickDetailHandler = (item, setDetail) => {
    setDetail(item.address);
  };

  const clickToggleHandler = () => {
    setToggle(!toggle);
  };

  const clickXhandler = () => {
    setDetail(null);
  };

  const clickButtonHandler = () => {
    alert('You clicked the button!');
  };

  const [detail, setDetail] = useState(null);
  const [toggle, setToggle] = useState(false);

  return (
    <SearchResultListContainer $toggle={toggle}>
      <Toggle onClick={() => clickToggleHandler()}>{toggle ? '>' : '<'}</Toggle>
      <HeaderWrap>
        <Header>12 Internal Medicine Clinics Nearby</Header>
      </HeaderWrap>

      {MOCK_DATA.map((item) => (
        <SearchResultListBox key={item.id}>
          <Name onClick={() => clickDetailHandler(item, setDetail)}>
            {item.name}
          </Name>
          <p>235m away</p>
          <p>treats {item.treatable_symptoms}</p>
          <p>51 Reviews (4.7)</p>
          <p>Insurance Coverage</p>
          <p>walk in available • reservation recommended</p>
          <span>Efficient</span>
          <span>Highly rated</span>
          <span>Clean</span>
          <span>Kid-friendly</span>
          <Button
            onClick={() => clickButtonHandler(item)}
            type="submit"
            className="submit"
          >
            Clinic Info
          </Button>
          {detail && (
            <InformationForClinic>
              <p>{detail}</p>
              <Toggle onClick={() => clickXhandler()}>X</Toggle>
            </InformationForClinic>
          )}
        </SearchResultListBox>
      ))}
    </SearchResultListContainer>
  );
}

export default SearchResultList;

const InformationForClinic = styled.div`
  z-index: 5;
  width: 30px;
  height: 100px;
  border: 2px solid blue;
  background: skyblue;
  position: absolute;
  right: -300px;
  top: 0px;
  min-height: 100vh;
  width: 300px;
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
  overflow: auto;
`;

const SearchResultListBox = styled.div`
  background: white;
  border: 1px solid black;
  width: 100%;
  margin: 1px;
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
  },
  {
    id: 2,
    name: 'Chung-Ang University Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '대구광역시',
  },
  {
    id: 3,
    name: 'Ewha Womans University Mokdong Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '1',
  },
  {
    id: 4,
    name: 'Gangbuk Samsung Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '2',
  },
  {
    id: 5,
    name: 'Hanyang University Seoul Hospital',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '3',
  },
  {
    id: 6,
    name: '피부과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '4',
  },
  {
    id: 7,
    name: '치과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '5',
  },
  {
    id: 8,
    name: '내과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '6',
  },
  {
    id: 9,
    name: '피부과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '7',
  },
  {
    id: 10,
    name: '치과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '8',
  },
  {
    id: 11,
    name: '내과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '9',
  },
  {
    id: 12,
    name: '피부과',
    treatable_symptoms: ['a', 'b', 'c'],
    address: '0',
  },
];
