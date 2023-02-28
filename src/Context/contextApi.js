import { createContext, useState } from 'react';
import { runAPI } from '../api/API';
import Images from '../Components/Images/Images';
export const ImageContext = createContext();

function ImageContextProvider({ children }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSearchResult = (query) => {
    runAPI(query).then((data) => {
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
        setLoading,
        onSearchResult,
        selectedImage,
        setSelectedImage,
      }}
    >
      {children}
      <Images onSelectImage={selectedImage} />
    </ImageContext.Provider>
  );
}
export default ImageContextProvider;
