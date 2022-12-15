import { useState } from 'react'
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Dragon ball']); //Hook useState mantiene el estado de las variables, y las modifica en virtud de ciertos eventos, un hook no puede estar dentro de una estructura condicional.

    const onAddCategory = (category) => {

        if (categories.includes(category)) return;

        //categorie.push('Naruto') es una forma erronea en React, puesto que el método push() muta el arreglo de React y el enfoque de React es crear nuevas variables al renderizar el HTMl.
        setcategories([category, ...categories])
    }

    return (
        <>
          
            <h1>GitExpertApp</h1>

            {/*<AddCategory setcategories={setcategories}/> Forma alterna menos apropiada puesto que la ejecución de la función que cambia el estado de las categorias se ejecuta en el otro componente*/}
            <AddCategory onNewCategory={onAddCategory} />{/*Màs apropiado por que se manda una función convencial y no una funcion (set) */}

            {
                categories.map(category => <GifGrid key={category} category={category} />)
            }



        </>
    )
}
