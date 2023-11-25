import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchHospitals = async (requestBody) => {
  const response = await axios.post(
    'https://whodadoc-back.onrender.com/search',
    requestBody,
  );

  return response;
};

const useHospitalsQuery = (requestBody) => {
  return useQuery({
    queryKey: requestBody
      ? ['hospitalsList', ...Object.values(requestBody)]
      : ['hospitalsList', 'all'],
    queryFn: async () => fetchHospitals(requestBody),
    staleTime: Infinity,
    enabled: !!requestBody,
  });
};

export default useHospitalsQuery;
