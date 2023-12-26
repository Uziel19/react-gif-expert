import { useState } from "react";

//cada componente puede tener su propio estado (hooks || useStates)
export const AddCategory = ({onNewCategory}) => {

  // console.log('AddCategory');

const [inputValue,setInputValue] = useState('');
/* se esta renderizando el input como read-only si sele pasa solo el value */
{/*Estos son conocidos como propertys*/ }

const onInputChange = ({target}) =>{
    // console.log(target.value);
    setInputValue(target.value);

}
//Hay que tratar de priorizar la lectura de nuestro codigo tambien
const onSubmit = (event) => {
  
    event.preventDefault();

    if(inputValue.trim().length <=1) return; 
    // setCategories( categories =>  [inputValue,...categories]);// se obtiene el arreglo actual del estado

    onNewCategory(inputValue.trim());
    console.log(inputValue);
    setInputValue(''); //limpia la caja de texto
 
}
  return (

    <form onSubmit={onSubmit}>

        <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}//mandamos la referencia a la funcion
        
        />
    </form>
  )
}

