import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import './PartOfSpeech.css'

export default function PartOfSpeech(props){
  return(
    <div className="PartOfSpeech">
      {props.data[0].meanings.map((el, index)=>{				
        return(
          <div key={index} className="PartOfSpeechDefinition">
            <h4>{el.partOfSpeech}</h4>
            <p><b>Definition: </b>{el.definitions[0].definition}</p>   
            <Example example={el.definitions[0].example}/>        
            <Synonyms synonyms={el.synonyms}/>
          </div>
        )
        })}
    </div>
  )
}