import React from "react";

export default function Synonyms(props){
    if(props.synonyms.length>0){
        return (
            <div className="Synonyms">
                <b>Synonyms: </b>
                {props.synonyms.map((el,index)=>{
                    if(index===props.synonyms.length-1){
                        return(
                            <span key={index}>{el}.</span>
                        )
                    }else{
                        return(
                            <span key={index}>{el}, </span>
                        )                            
                    }
                    
                })}
            </div>
        )
        } else {
            return null
    }  
}