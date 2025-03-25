import { useState } from "react"
import { AddCategory, GifGrid} from "./components";// IMPORTANDO DESDE EL ARCHIVO BARRIR
// api giphy = B6zAvlUqjJmYiBOGcmAmz3kp0xBufkhI
export const GifExpertApp = () => {

  const [categoria, setCategoria] = useState(['']);
//PARA CAMBIAR EL ESTADO SE DEBE HACER IGUAL COMO SE CREA,ES DECIR SI YO USO [] EN EL ESTADO INCIAL, TAMBIEN DEBERIA USARSE EN EL SET
  const addCategoria = (newCategory) =>{
    const mayusculas = categoria.map( category => category.toUpperCase()); //CONVIERTE LAS CATEGORIAS EN MAYUSCULAS
    const newCategoryMayus = newCategory.toUpperCase(); //CONVIERTE EL VALOR DE LA NUEVA VATEGORIA EN MAYUSCULAS
    if(mayusculas.includes(newCategoryMayus)) return; //VALIDA QUE NO EXISTA OTRA CATEGORIA IGUAL
    setCategoria([newCategory, ...categoria ]); 
  }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        //setCategoria={ setCategoria }  FORMA DE ENVIAR EL SET
        onNewCategory = {(newCategory) => addCategoria(newCategory)}
        />
          {
          categoria.map( ( category ) => {
           return( 
           <GifGrid key={category} category={category}/>)
          })
          }
    </>
  )
}
