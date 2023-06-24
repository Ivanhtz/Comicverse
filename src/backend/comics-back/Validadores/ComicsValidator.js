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

		const regexUrl = /^https?:\/\/[^\s\/$.?#].[^\s]*.(jpg|jpeg|png|gif|bmp)$/;
		if(!regexUrl.test(this.value)){
            this.result.push(message);
        }
        return this;
	}

	isShorterThan(message){
		const regexShorterThan = /^[a-zA-Z0-9:\-\s]{0,100}$/;
		if(!regexShorterThan.test(this.value)){
			this.result.push(message);
		}
		return this;
	}

}