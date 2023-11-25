import { styled } from 'styled-components';
import { useState } from 'react';

function SearchResultList() {

    const clickHandler = (item, setDetail) => {
        setDetail(item.address);
    };

    const [detail, setDetail] = useState(null);

    return <SearchResultListContainer>
        <Toggle>Toggle</Toggle>
        <Header>Find your Doctor</Header>

        {MOCK_DATA.map((item) => (
            <SearchResultListBox key={item.id}>
                <Name onClick={() => clickHandler(item, setDetail)}>{item.name}</Name>
                <p>Specialised with</p><h3>{item.treatable_symptoms}</h3>
                {detail && <InformationForClinic><p>{detail}</p></InformationForClinic>}
            </SearchResultListBox>
        ))}
    </SearchResultListContainer>;
}

export default SearchResultList;

const InformationForClinic = styled.div`
width: 30px;
height: 100px;
border: 2px solid blue;
background: skyblue;
position: absolute;
right: -300px;
top: 0px;
min-height: 100vh;
width: 300px
`

const Header = styled.h1`
color: white;
`

const Toggle = styled.button`
position: absolute;
right: -40px;
`

const SearchResultListContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
background: blue;
padding: 20px 10px;
min-height: 100vh;
`
const SearchResultListBox = styled.div`
background: white;
border: 1px solid black;
width: 90%;
margin: 1px;
`
const Name = styled.a`
font-size: 1.5rem;
`

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
]
