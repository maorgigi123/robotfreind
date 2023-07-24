import React from 'react'
import {CardLoadObj} from './cardLoadObj'

const CardLoad = () =>{
	let cardArray = [];
	for (let i = 0; i < 5; i++) {
        cardArray.push(<CardLoadObj
        	key = {i}
        	/>);
    } 

	return(
		<div>
			{cardArray}
		</div>
		
	);
}

export default CardLoad;