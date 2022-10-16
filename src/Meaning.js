import React from "react";

function Meaning(props){
	if(props.data){
		return (
			<div className="Meaning">
				<h3>{props.data.data[0].word}</h3>
				{props.data.data[0].meanings[0].definitions.map(function(el, index){
					if(index<3){
						return(
							<h4 key={index}>{el.definition}</h4>)
						}
						})}
			</div>
				
		)
	} else {
		return null
	}    
}
export default Meaning