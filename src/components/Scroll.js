import React from 'react'


const Scrool = (props) =>{
	return(
		<div style = {{overflowY: 'scroll', border:'2px solid black', height:'700px'}}>
			{props.children}
		</div>
	);
}

export default Scrool