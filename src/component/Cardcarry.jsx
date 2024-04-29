import './css/movie.css'
// CardCarry.js
import Card from "./Card";

const movies = [
    { img:"../../src/assets/IMG-20240321-WA0016.jpg", desc:"lorem20", type: "shows" },
    { img:"../../src/assets/IMG-20240321-WA0020.jpg", desc:"lorem20", type: "DISNEYLAND R PARIS" },
    { img:"../../src/assets/IMG-20240321-WA0018.jpg", desc:"lorem20", type: "DISNEYLAND R PARIS" },
    { img:"../../src/assets/IMG-20240321-WA0021.jpg", desc:"lorem20", type: "SHOP" }
];

const CardCarry = () => {
    return (
        <>
            <div className='mad'>
                <Card movies={movies} />
            </div>
            
        </>
    );
};

export default CardCarry;
