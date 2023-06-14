import React, { Component } from 'react';

class NewsBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      content: '',
      author: '',
      date: '',
    };
  }

  componentDidMount() {
    // Retrieve news data from localStorage
    const savedNews = localStorage.getItem('newsArray');

    if (!savedNews) {
      const initialNews = []; // Array inicial de noticias si no existe en el localStorage
      localStorage.setItem('newsArray', JSON.stringify(initialNews));
    }
    // If news data exists in localStorage, parse and set it in the state
    if (savedNews) {
      this.setState({ newsArray: JSON.parse(savedNews) });
    }
  }


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, image, content, author, date, newsArray } = this.state;
  
    // Crea un objeto para representar la nueva noticia
    const newNews = {
      title: title,
      image: image,
      content: content,
      author: author,
      date: date,
    };
  
    // Agrega la nueva noticia al arreglo
    const updatedNewsArray = [...newsArray, newNews];
  
    // Actualiza el estado con el nuevo arreglo de noticias
    this.setState({ newsArray: updatedNewsArray });
  
    // Reiniciar los campos del formulario
    this.setState({
      title: '',
      image: '',
      content: '',
      author: '',
      date: '',
    });
  
    // Guarda el arreglo de noticias en el localStorage
    localStorage.setItem('newsArray', JSON.stringify(updatedNewsArray));
  };

  render() {
    const { title, image, content, author, date } = this.state;

    return (
      <div>
        <h2>Add News</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              name="content"
              value={content}
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="text"
              name="date"
              value={date}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewsBack;
