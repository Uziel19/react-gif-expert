//importaciones de react

//importaciones de terceros


//funciones que no son propiamente componentes o hooks
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";//usualmente estos irian antes

//useEffect es un hook de react que sirve para disparar efectos secundarios



export const GifGrid = ({ category }) => {
  //q (query) es el termino de busqueda

  // console.log('GifGrid');

  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // }

  // //efecto - lista de dependencias (son las condiciones por las cuales se quiere volver a  ejecutar este callback (efecto))
  // useEffect(() => { //no podemos usar async aqui el ya que en el useEffect solo recibe una funcion
  //   // getGifs();//Esto es una promise

  //   // getGifs(category)
  //   //     .then(newImages => setImages(newImages));

  //   getI  mages();
  // }, []); // si se deja vacio el arreglo de dependencias sign ifica que este hook solo se va a disparar la primera vez que se crea y se construye mi compónente


  //nosotros nunca debemos colocar la ejecucion de una fn  directamente en unfunctional component


  // setCounter(counter + 1); // si esto se tiene se vuelve a redibujar en el proceso de construccion del mismo (ciclo infinito)


  // console.log(images);
 
  //un custom hook nos va a servir para ahorrarnos mucha logica o mas bien codigo en un componente
//podemos regresar lo que sea de un custom hook
// debemos poner la palabra use 

  const {images, isLoading} = useFetchGifs(category);//resultado final de nuestro custom hook

  console.log({isLoading});
 
  return (

    <>

      <h3>{category}</h3>
    {/* <LoadingMessage isLoading={isLoading} />  otra forma de mostrar el mensaje de loading (custom Hook)*/}


    {

      isLoading && (<h2>Cargando...</h2>)  // if corto con una sola condicion (AND logico)

      // isLoading
      //  ? <h2>Cargando...</h2> //return explicito que regresa un obj
      //   : null //no se renderiza en react

    }



 {/* cuando nosotros estamos trabajando dentro de nuestro jsx aca no podemo usar la palabra reservada class */}
      <div className="card-grid">

        {

          images.map(image => (  // en esta construccion se debe poner un key || { id, title }

            //React ya sabe que se debe mandar el key

            //<li key={id}>{title}</li>

            //esparcir todas las propertis del image en el componente (para que se reciba cada una de las propiedades que tiene la img como props) 

            <GifItem
            
                 key={image.id}
                   {...image}
                 
                 
                 
                 />


          ))

        }


      </div>



    </>

  )
}


