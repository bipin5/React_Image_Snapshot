import axios from 'axios';
import { apiKey } from '../constants/config';

const API = (query) => {
  const baseURL =
    'https://api.flickr.com/services/rest/?method=flickr.photos.search';

  const apiURL = `${baseURL}&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

  const responseData = axios.get(apiURL).then((response) => {
    const {
      data: {
        photos: { photo },
      },
    } = response;
    return photo;
  });
  return responseData;
};

export default API;
