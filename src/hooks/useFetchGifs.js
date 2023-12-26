//como este archivo no regresa un jsx element este lleva la extension .js
// un hook no es mas que una funcion que regresa algo

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// esto lo de los customHooks pueden tener tambien estados independientes
// se extrajo la logica de cargar y de manejar las imagenes y almacenarlas aqui

export const useFetchGifs = (category) => { // es una fn nadamas por que no retorna un jsx // podemos recibir un obj o los argumentos posicionales asi como nosotros queramos que funcione

     const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true);//se carga por primera vez

     const getImages = async () => {

         const newImages = await getGifs(category);
         setImages(newImages);
         setIsLoading(false); // cuando dejamos de cargar
   }

  useEffect(() => { 

    getImages();
 
}, []);




    return {
        images,
        isLoading
    }

}


