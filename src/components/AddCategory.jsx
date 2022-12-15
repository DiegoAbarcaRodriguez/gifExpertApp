import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim() <=1) return; //Evita que le código se siga ejecuntado

        //setcategories(c=>[inputValue,...c]); //Función definida como Prop y pasada desde el componente GifExpertApp /* Es menos práctico para la función de estado de un hook, en su lugar es mejor pasar una función convencional la cual manda a llamar está función de set en el componente padre */
        onNewCategory(inputValue.trim());

        setInputValue('');//Limpia el input cada que se ejecute un enter.
    }

    return (
        <form onSubmit={onSubmit}> {/*Evento ejecutado al momento de dar enter en el input */}
            <input type="text" placehoder="Buscar gifts" onChange={onInputChange} value={inputValue} />
        </form>
    )
}
