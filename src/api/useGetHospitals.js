import { useQuery } from '@tanstack/react-query';
import fetchHospitals from './fetchHospitals';

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
