import React from "react";
import './Photo.css'

export default function Photo(props){
	if(props.data.data.photos){
		return (
			<div className="Photo">
					{props.data.data.photos.map((el,index)=>{
						return(
							<img key={index} src={el.src.landscape} alt={el.alt} />
						)
					})}
			</div>
		)
	} else{
		return null
	}

}