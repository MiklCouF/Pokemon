function PokemonCard({pokemon}) {

    return (
        <>

         {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}

<p>{pokemon.name}</p>
            <figcaption>ed</figcaption>
        </>
    );

};


export default PokemonCard;