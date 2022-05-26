import React, {useState} from "react";
import { AddCategoria } from "./components/AddCategoria";
import GifGrid from "./components/GifGrid";
const Gifexpertapp = ()=>{
    
    const [categorias, setCategorias] = useState(['One Punch']);
    
    //console.log(categorias);
   
    return (
    <>
    <h2>Gif Expert</h2>
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