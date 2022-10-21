import React from "react";
import './Meaning.css';
import Phonetic from './Phonetic';
import PartOfSpeech from './PartOfSpeech'

function Meaning(props){
	if(props.wordData){
		return (
			<div className="Meaning">				
				<Phonetic data={props.wordData} />
				<PartOfSpeech data={props.wordData}/>				
			</div>				
		)
	} else {
		return null
	}    
}
export default Meaning