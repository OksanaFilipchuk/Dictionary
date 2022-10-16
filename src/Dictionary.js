import React from "react";
import axios from "axios";
import { useState } from "react";
import Meaning from './Meaning'

function Dictionary(){
	let [loaded, setLoaded]= useState(false);
	let [word, setWord] = useState(null);
	let [searchingWord, setSearchingWord] = useState(null);
	let [response, setResponse] = useState(null);

	function changeWord(event){
		event.preventDefault();
		setWord(event.target.value)
	}
	function handleSubmit(event){
		event.preventDefault();
		setSearchingWord(word);
	}
	function handleResponse(response){
		setResponse(response);
		setLoaded(true);
		console.log(response)
	}

	if(loaded){
		return(
			<div>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="word" onChange={changeWord} />
					<input type="submit" value="search" />
				</form>				
				<Meaning data = {response}/>
			</div>
		)
	}else{
		if(searchingWord){
			let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchingWord}`;
			axios.get(url).then(handleResponse);
		}		
		return(
			<div>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="word" onChange={changeWord} />
					<input type="submit" value="search" />
				</form>
			</div>
		)
	}



		
}
export default Dictionary