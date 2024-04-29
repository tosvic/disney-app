// Cardcarry.js
// Card.js
const Card = ({ movies }) => {
    return (
        <>
            {movies.map((item, index) => (
                <Cart key={index} movie={item} />
            ))}
        </>
    );
};

const Cart = ({ movie }) => {
    return (
        <div className="goat">
                    <img src={movie.img}/>
                    <p>{movie.desc}</p>
                    <h4>{movie.type}</h4>
        </div>
    );
};

export default Card;
