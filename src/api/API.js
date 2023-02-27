import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiKey } from '../constants/config';

const API = ({ query, category }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseURL =
    'https://api.flickr.com/services/rest/?method=flickr.photos.search';
  useEffect(() => {
    let cancelRequest = false;

    setIsLoading(true);

    const fetchPhotos = async () => {
      const apiURL = `${baseURL}&api_key=${apiKey}&tags=${query},${category}&per_page=24&format=json&nojsoncallback=1`;
      try {
        const response = await axios.get(apiURL);
        const data = response.data;

        if (!cancelRequest) {
          setData(data.photos.photo);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
      return () => {
        cancelRequest = true;
      };
    };
    fetchPhotos();
  }, [query, category]);
  return { data, isLoading };
};

export default API;
