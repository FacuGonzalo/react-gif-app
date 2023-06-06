import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setImages(imgs)
      setIsLoading(false)
    });
  }, []);

  return {
    images: images,
    isLoading: isLoading
  }
}
