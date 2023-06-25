export default class ComicDTO{
	id;
	title;
	image;
	content;
	author;

	constructor(id = -1, title, image, content, author){

		this.id = id ?? -1;
		this.title = title ?? '';
		this.image = image ?? '';
		this.content = content ?? '';
		this.author = author ?? '';
	}
}