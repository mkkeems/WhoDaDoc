import SearchResultList from '../features/SearchResultList/SearchResultList';
import Map from '../features/Map/Map';
import { styled } from 'styled-components';

const SearchResultsPage = () => {
  return <>
    <Divider>
      <LeftSide><SearchResultList /></LeftSide>
      <RightSide><Map /></RightSide>

    </Divider>

  </>;
};


export default SearchResultsPage;

const Divider = styled.div`
display: flex;
`
const LeftSide = styled.div`
flex:3`

const RightSide = styled.div`
flex:7`