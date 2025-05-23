import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGif = (category) => {
      const [images, setImages] = useState([]);
      const [isLoading, setIsLoading] = useState(true);      
    
       const getImages = async () =>{
         const newImages = await getGif(category);
         setImages(newImages);
         setIsLoading(false);
       }
    
      useEffect(()=>{
        getImages();
        //getGif(category).then(newImages => setImages(newImages))
      },[ ]);

      return{
        images,
        isLoading
      }

}
