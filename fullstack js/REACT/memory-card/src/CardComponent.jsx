import "./card.css";

function CardComponent({ url, name, updateList, pokeList, shuffle, setScore, setBestScore, score, bestScore}) {

    function resetClick() {
        pokeList.forEach(pokemon => {
            pokemon.clicked = false;
        });
    }

    function click() {
        const temp = pokeList.slice();
        const clickedPokemon = temp.find(pokemon => pokemon.name === name);
    
        if (clickedPokemon) {
            if (clickedPokemon.clicked) {
                if (bestScore <= score) {
                    setBestScore(score);
                }
                setScore(0);
                resetClick();
            } else {
                setScore(score + 1);
                clickedPokemon.clicked = true;
            }
        }
    
        updateList(temp);
        shuffle();
    }

    return (
        <div className="card" onClick={click}>
            <img src={url} alt="" />
            <h3>{name}</h3>
        </div>
    );
}

export default CardComponent;