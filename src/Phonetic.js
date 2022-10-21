import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import './Phonetic.css'

export default function Phonetic(props){

  return(
    <div className="Phonetic">
      <h3>{props.data[0].word}</h3>      
			<p>{props.data[0].phonetic}</p>
      <ReactAudioPlayer
        src={props.data[0].phonetics[0].audio}								
        controls
				style={{ width: '250px' }}
        />
        
    </div>
    
  )
}