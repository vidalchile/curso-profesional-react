/*
* MODULE DEPENDECIES
*/
import React from 'react';
import PokeAvatar from './PokeAvatar';

export default class  PokeRows extends React.Component{
	render() {	
		return <div className="pokerow">
		<PokeAvatar number={this.props.number}/>
		{this.props.name}
		</div>
	}
}