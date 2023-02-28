import axios from 'axios';
import { apiKey } from '../constants/config';
const baseURL =
  'https://api.flickr.com/services/rest/?method=flickr.photos.search';

export const runAPI = (query) => {
  console.log({ query });
  // const apiURL = ;
  const responseData = axios
    .get(
      `${baseURL}&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
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
