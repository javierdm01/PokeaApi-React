import { useRef } from "react"
import { useBerries } from "../services/hooks/useBerries"
export function Berries(){
    const {berries, showBerries} = useBerries()
    const page= useRef(0)


    const handleNextPage=()=>{
        page.current ++
        showBerries(page.current)
    }
    const handlePreviousPage=()=>{
        if(page.current==0) return
        page.current --
        showBerries(page.current)

    }
    return (
        <>
            <h1 className="presentation_text">Berries</h1>
            <div className="poke_container">
                {
                    berries && berries.map((berrie, index)=>(
                        <div className="poke_card" key={index}>
                            <img className="poke_berries" src={berrie.sprites.default} alt="" />
                            <h2>{berrie.name}</h2>
                            <h3>{berrie.category.name}</h3>
                        </div>
                    ))
                }
                <a onClick={handlePreviousPage} className="header__link blue">Previous</a>
                <a onClick={handleNextPage} className="header__link red">Next</a>
            </div>
        </>
    )
    

}