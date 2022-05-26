//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({categoria}) =>{
   /* const [images, setImages] = useState (['']);
    useEffect( () => {
        getGifs( categoria )
            .then( setImages )
    },[categoria])
*/
const {data:images,loading} = useFetchGifs(categoria);

return (<>
        <h3>{categoria}</h3>
        {
            loading && <p>Cargando...</p>
        }
   { <div className="card-grid">
       { images.map( img => (
                <GifGridItem key={img.id} {...img }></GifGridItem>
                )
            )
        }
       

    </div>}</>);
}

export default GifGrid;