export default class ComicValidacionesDTO{
	title;
	image;
	content;
	author;

	constructor(title, image, content, author){
		this.title = title ?? '';
		this.image = image ?? '';
		this.content = content ?? '';
		this.author = author ?? '';
	}
}