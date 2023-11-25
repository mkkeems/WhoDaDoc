import axios from 'axios';

const fetchHospitals = async (requestBody) => {
  const response = await axios.post(
    'https://whodadoc-back.onrender.com/search',
    requestBody,
  );

  return response;
};

export default fetchHospitals;
