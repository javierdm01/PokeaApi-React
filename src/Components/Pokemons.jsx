import { useRef } from "react"
import { usePokemons } from "../services/hooks/usePokemons"


export function Pokemons(){
    const {poke, showPokemons} = usePokemons()
    const page= useRef(0)


    const handleNextPage=()=>{
        page.current ++
        showPokemons(page.current)
    }
    const handlePreviousPage=()=>{
        if(page.current==0) return
        page.current --
        showPokemons(page.current)

    }
    return (
        <>
            <h1 className="presentation_text">Pokemons</h1>
            <div className="poke_container">
                {
                    poke && poke.map((pokemons, index)=>(
                        <div className="poke_card" key={index}>
                            <img src={pokemons.sprites.front_default} alt="" />
                            <h2>{pokemons.name}</h2>
                            <h3>{pokemons.types[0].type.name}</h3>
                        </div>
                    ))
                }
                <a onClick={handlePreviousPage} className="header__link blue">Previous</a>
                <a onClick={handleNextPage} className="header__link red">Next</a>
            </div>
        </>
    )
}