import { useState } from "react"

export const AddCategory = ({onNewCategory}) => { //DESCTRUCTURAMOS EL SETCATEGORIA QUE ESTAMOS RECIVIENDO POR GIFEXPERTAPP

    const [value, setValue] = useState('')

    const onInputChange = (event)=>{ setValue(event.target.value); }

    const onSubmit = (event) =>{ 
        event.preventDefault();
        if(value.trim().length <=1) return; //no me permite agregar vacios o menor a una letra
        //setCategoria(callBackCategorias=>[value ,...callBackCategorias]) //SI QUIERO RECUPERAR LAS CATEGORIAS DEBO USAR EL CALLBACK ES DECIR CREO UNA FUNCIO
                                                                        //PUEDE SER CON UNA PALABRE RELACIONADA ESTA PALABRA TRAE O RETORNA LAS CATEGORIAS 
        onNewCategory(value.trim()) //ESTA FORMA SIMPLEMENTE ENVIA EL VALOR AL COMPONENTE PRINCIPAL
        setValue('');
    }
  return (
    <form onSubmit={(event)=>{onSubmit(event)}}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={value}
            onChange={(event)=>{onInputChange(event)}}
        ></input>
    </form>
     )
}
