import SearchResultList from '../features/SearchResultList/SearchResultList';
import Map from '../features/Map/Map';
import { styled } from 'styled-components';

const SearchResultsPage = () => {
  return <>
    <Divider>
      <LeftSide>
        <SearchResultList />
      </LeftSide>
      <RightSide>
        <Map />
      </RightSide>
    </Divider>
  </>;
};


export default SearchResultsPage;

const Divider = styled.div`

`
const LeftSide = styled.div`
position: absolute;
z-index: 1;
`
const RightSide = styled.div`
width: 100vw;
height: 100vh;
`