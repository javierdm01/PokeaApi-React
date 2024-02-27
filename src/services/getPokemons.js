
export const getPokemons=async(page)=>{
    const query= await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`)
    const res= await query.json()
    return res.results
}

export const getPokeData= async(data)=>{
    
    const iterable=[]
    for(const item of data){
        const query = await fetch(item.url)
        const res= await query.json()
        iterable.push(res)
    }
    return iterable
}