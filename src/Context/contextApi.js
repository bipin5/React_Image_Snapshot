import { createContext, useState } from 'react';
import API from '../api/API';
import Images from '../Components/Images/Images';
export const ImageContext = createContext();

export default function ImageContextProvider({ children }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSearchResult = (query) => {
    API(query).then((data) => {
      setImages(data);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  };
  return (
    <ImageContext.Provider
      value={{
        images,
        loading,
        selectedImage,
        setLoading,
        setSelectedImage,
        onSearchResult,
      }}
    >
      {children}
      <Images onSelectImage={selectedImage} />
    </ImageContext.Provider>
  );
}
