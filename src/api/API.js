import axios from 'axios';
import { useState, useEffect } from 'react';

const API = ({ query, category }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelRequest = false;

    setIsLoading(true);

    const fetchPhotos = async () => {
      const apiURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query},${category}&per_page=24&format=json&nojsoncallback=1`;
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
