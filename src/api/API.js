import axios from 'axios';
import { apiKey } from 'constants/config';
import { API_CONST } from 'constants/api';

export const runAPI = (query) => {
  const responseData = axios
    .get(
      `${API_CONST.BASE_URL}&api_key=${apiKey}&tags=${query}&per_page=${API_CONST.PER_PAGE}&format=json&nojsoncallback=1`
    )
    .then((response) => {
      const {
        data: {
          photos: { photo },
        },
      } = response;
      return photo;
    });
  return responseData;
};
