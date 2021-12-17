import React, { Component } from 'react';
import Pokecard from './pokecard';
import './pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
		if (this.props.isWinner) {
			title = <h2 className="Pokedex-winner">Winning Hand</h2>;
		} else {
			title = <h2 className="Pokedex-loser">Losing Hand</h2>;
		}
        return (
            <div className='Pokedex'>
                <h1>Pokedex Random Draw:</h1>
                {title}
                <h3>Total XP: {this.props.exp}</h3>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;