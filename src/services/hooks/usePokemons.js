import { useEffect, useState } from "react";
import { getPokeData, getPokemons } from "../getPokemons";


export function usePokemons(){
    const [poke,setPoke] = useState([])

    const showPokemons=(i=0)=>{
        const page= i*20;
        getPokemons(page).then((res) => {
            getPokeData(res).then((data)=>{
                setPoke(data);
            })
        })
    }
    useEffect(()=>{
        showPokemons()
    },[])

    return {poke,showPokemons}
}