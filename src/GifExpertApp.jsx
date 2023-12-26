import { useState } from "react"
import { AddCategory,GifGrid } from "./components"; //asi apunta al index archivo de barril
// import { GifGrid } from "./components/GifGrid";

//Ya no es necesario importar react aqui
export function GifExpertApp() {

    // console.log('GifExpertApp');

    //los hooks no tienen nombre trabajan en react basados en su posicion
    const [categories,setCategories] = useState(['One Punch']);//punto inicial de nuestro estado (Es ideal que siempre se tenga un valor inicial)

    const onAddCategory = (newCategory) =>{// se utiliza el evento aqui (se recibe el string)
     
        if(categories.includes(newCategory)) return;

      setCategories([newCategory,...categories]);

    // setCategories(cat => [...cat,'Valorant']);

    }
 

    return (
        //Fragmento
        <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* Tambien podemos mandar fn en las props */}
        {/* cuando lleva la palabra on es porque que esta emitiendo algo */}
        <AddCategory  /** Va ejecutar el evento**/
        // setCategories={ setCategories }  esto oculta la implementacion del mismo(es un poco dificil de comprender de como funciona nuestro componente)
        
        onNewCategory={ (value) => onAddCategory(value)} //es un evento

        />


        {/* Listado de Gif */}

{/* //El elemento que se esta iterando debe tener la llave (no se puede en el fragmento) */}


       
        
            {/* No hay que usar el indice con las llaves */}

            {/* esperamos que nuestros componentes hagan un unico trabajo y que lo hagan bien */}

            {/* Tiene mas sentido para fer de que este componente solo emita el nuevo valor*/}

            {/* return <li key={ (category) }>{category}</li> //property key - unique(puede ser lo que sea) */}


            {/* Buscamos que nuestros componentes sean faciles de ver */}

            {
            
            categories.map(category => (  // en esta construccion se debe poner un key
            
            //React ya sabe que se debe mandar el key

        
            <GifGrid
                 key={category} 
                 category={category}
                
            />
 

            ))
            
            }

            {/* <li>ABC</li> */}
          

            {/* Gif Item */}

        </>
    )
}
