import React from "react";
import './Meaning.css'

function Meaning(props){
	if(props.data){
		return (
			<div className="Meaning">
				<h3>{props.data.data[0].word}</h3>
				<h4>{props.data.data[0].meanings[0].partOfSpeech}</h4>
				{props.data.data[0].meanings[0].definitions.map(function(el, index){
					if(index<3){
						return(
							<h5 key={index}>{el.definition}</h5>)
						}
						})}
			</div>
				
		)
	} else {
		return null
	}    
}
export default Meaning