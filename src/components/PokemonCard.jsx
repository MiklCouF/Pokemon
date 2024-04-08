
import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {



    return (
        <>

            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}


            <figcaption>{pokemon.name}</figcaption>
        </>
    );

};

PokemonCard.propTypes = {

    pokemon: PropTypes.shape({

        name: PropTypes.string.isRequired,

        imgSrc: PropTypes.string.isRequired,

    })

}

export default PokemonCard;