

export const getBerries=async(page)=>{
    const query= await fetch(`https://pokeapi.co/api/v2/berry/?offset=${page}&limit=20`)
    const res= await query.json()
    return res.results
}

export const getPokeBerries= async(data)=>{
    
    const iterable=[]
    for(const item of data){
        const query = await fetch(item.url)
        const res= await query.json()
        const query_berry= await fetch(res.item.url)
        const res_berry= await query_berry.json()
        iterable.push(res_berry)
    }
    return iterable
}