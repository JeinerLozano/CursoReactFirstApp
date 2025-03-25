import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGif(category);


  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>cargando...</h2>) //esto es un if,medice si isloading es true muestre cargando
        }
        <div className="card-grid">
          {images.map( (image) =>(
            <GifItem key={image.id}
              { ...image } // envia todas las propiedades del objeto o arreglo  
            />
          ))
          }
        </div>
    </>
  )
}
