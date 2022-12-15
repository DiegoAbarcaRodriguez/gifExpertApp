import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => { // Hook que dispara operaciones secundaria, en función de un evento o un suceso acontecidó, si las dependecias se dejan como: [] denota que el callback unicamente se ejecutará una vez cuando el componente se cree 
        getImages();
    }, []);


    return (
        {
            images,
            isLoading
        }
    )
}
