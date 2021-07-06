export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/${pokemon}`
       const response = await fetch(url);
       const data = await response.json()
       return data;

    } catch (err){
        
    }
}