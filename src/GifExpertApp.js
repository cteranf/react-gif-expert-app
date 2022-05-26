import React, {useState} from "react";
import { AddCategoria } from "./components/AddCategoria";
import GifGrid from "./components/GifGrid";
const Gifexpertapp = ()=>{
    
    const [categorias, setCategorias] = useState(['One Punch']);
    
    
    return (
    <>
    <h2 className="titulo animate__animated animate__fadeInLeft">Buscador de Gifs</h2>
    <AddCategoria setCategorias={setCategorias}></AddCategoria>
    <hr/>
    
    
        {
            categorias.map( categoria => (
                <GifGrid 
                key = { categoria } 
                categoria={ categoria }  ></GifGrid>
                )
                
            )
        }
  

    </>
    )

}

export default Gifexpertapp;