
import { useEffect, useState } from "react";
import { getBerries,getPokeBerries } from "../getBerries";


export function useBerries(){
    const [berries,setBerries] = useState([])

    const showBerries=(i=0)=>{
        const page= i*20;
        getBerries(page).then((res) => {
            getPokeBerries(res).then((data)=>{
                setBerries(data);
            })
        })
    }
    useEffect(()=>{
        showBerries()
    },[])

    return {berries,showBerries}
}