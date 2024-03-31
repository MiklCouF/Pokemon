function PokemonCard() {

    const pokemonList = [

        {
            name: "bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },

        {
            name: "mew",
        },
    ];


    let pokemon = pokemonList[1];

    return (
        <>

            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}
            <p>{pokemon.name}</p>

        </>
    );

};


export default PokemonCard;