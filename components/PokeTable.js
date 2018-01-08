/*
* MODULE DEPENDECIES
*/
import React from 'react';
import PokeRows from './PokeRows';

export default class PokeTable extends React.Component{
	render(){
		return <ul className="poketablet">
		{
			this.props.pokemons.map((pokemon) => {
				return <PokeRows key={pokemon.number} name={pokemon.name} number={pokemon.number} />
			})
		}
		</ul>
	}
}