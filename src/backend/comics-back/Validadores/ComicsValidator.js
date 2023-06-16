import { Component } from "react"

export default class ComicsValidator{
	constructor(value){
		      
		this.value = value;	
		this.result = [];
	}

	isNotEmpty(message){
		if(!this.value){
            this.result.push(message);
        }
        return this;
	}

	isValidUrl(message){

		const regexUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
		if(!regexUrl.test(this.value)){
            this.result.push(message);
        }
        return this;
	}

	isShorterThan(message){
		const regexShorterThan = /^[a-z]{0,15}$/;
		if(!regexShorterThan.test(this.value)){
			this.result.push(message);
		}
		return this;
	}

}