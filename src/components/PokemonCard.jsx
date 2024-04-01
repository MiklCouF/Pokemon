function PokemonCard({pokemon}) {

    return (
        <>

         {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}


            <figcaption>{pokemon.name}</figcaption>
        </>
    );

};


export default PokemonCard;