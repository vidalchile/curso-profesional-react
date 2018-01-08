/*
* MODULE DEPENDECIES
*/
import React from 'react';
import PokeTable from './components/PokeTable';

var pokemons = [
	{number:1, name:'Bulbasaur'},
	{number:2, name:'Ivysaur'},
	{number:3, name: 'Venusaur'}
];

React.render(
 	<PokeTable pokemons={pokemons} />,
 	document.getElementById('container')
);