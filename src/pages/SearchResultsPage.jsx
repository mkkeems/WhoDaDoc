import { useState, useEffect } from 'react';
import SearchResultList from '../features/SearchResultList/SearchResultList';
import Map from '../features/Map/Map';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import useHospitalsQuery from '../api/useGetHospitals';

const SearchResultsPage = () => {
  const location = useLocation();

  const [searchRequestBody, setSearchRequestBody] = useState(location.state);
  useEffect(() => {
    if (location.state) {
      setSearchRequestBody(location.state);
    }
  }, [location.state]);

  const {
    // isLoading: hospitalListLoading,
    data: hospitalsList,
    // isFetching,
    // isSuccess,
  } = useHospitalsQuery(searchRequestBody);

  console.log({ hospitalsList });

  return (
    <>
      <Divider>
        <LeftSide>
          <SearchResultList />
        </LeftSide>
        <RightSide>
          <Map data={hospitalsList?.data} />
        </RightSide>
      </Divider>
    </>
  );
};

export default SearchResultsPage;

const Divider = styled.div``;
const LeftSide = styled.div`
position: absolute;
width: 38vw;
z-index: 1;
`
const RightSide = styled.div`
  width: 100vw;
  height: 100vh;
`;
