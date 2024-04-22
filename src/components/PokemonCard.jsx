
import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {




    return (
        <article>
            <figcaption><h1>{pokemon.name}</h1></figcaption>

            {pokemon.imgSrc ? (
                <p>
                    <img src={pokemon.imgSrc} alt={pokemon.name} /></p>
            ) : <p>???</p>}
        </article>
    );
}

PokemonCard.propTypes = {

    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired
    })
}

export default PokemonCard