import { Component } from "react"

export default class ComicsValidator{
	constructor(value){
		      
		this.value = value;	
		this.result = [];
	}

	isNotEmpty(message){
		if(!this.value)
        {
            this.result.push(message);
        }
        return this;
	}

	isValidUrl(message){

		const regexUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
		if(!regexUrl.test(this.value))
        {
            this.result.push(message);
        }
        return this;
	}

}