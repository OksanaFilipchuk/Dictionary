import React from "react";
import axios from "axios";
import { useState } from "react";
import Meaning from './Meaning';
import './Dictionary.css';
import Photo from './Photo';

function Dictionary(){
	let [loaded, setLoaded]= useState(false);
	let [word, setWord] = useState(null);
	let [searchingWord, setSearchingWord] = useState(null);
	let [response, setResponse] = useState(null);
	let [pexelResponse, setPexelResponse] = useState(null)

	function changeWord(event){
		event.preventDefault();
		setWord(event.target.value)
	}
	function handleSubmit(event){
		event.preventDefault();
		setSearchingWord(word);
		setLoaded(false);
	}
	function handleResponse(response){
		setResponse(response);
    setLoaded(true);
 
	}
	function handlePexelResponse(response){
    if(response.status === 200){
      setPexelResponse(response);
    }		
	}

	if(loaded){
		return(
			<div className="Dictionary">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="word" onChange={changeWord} />
					<input type="submit" value="search" />
				</form>				
				<Meaning wordData={response.data}/>
				{/* <Photo data={pexelResponse} /> */}
			</div>
		)
	}else{
		if(searchingWord){
			let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchingWord}`;
			axios.get(url).then(handleResponse)
      .catch(function (error) {
        console.log(error.toJSON());
      });
			let pexelKey = "563492ad6f91700001000001a381b6324f694c1fa1df13e5b287dfc0";
			let pexelUrl =  `https://api.pexels.com/v1/search?query=${searchingWord}&per_page=1`;			
			axios.get(pexelUrl, { headers: {"Authorization" : `Bearer ${pexelKey}`} })
        .then(handlePexelResponse)
        .catch(function (error) {
          console.log(error.toJSON());
        });
		}		
		return(
			<div className="Dictionary">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="word" onChange={changeWord} />
					<input type="submit" value="search" />
				</form>
			</div>
		)
	}		
}
export default Dictionary