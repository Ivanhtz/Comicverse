import React from 'react';

class Comic extends React.Component {
  render() {
    const { titulo, imagen, contenidoResumido, autor, editorial } = this.props;

    return (
      <div className="comic">
        <h2>{titulo}</h2>
        <img src={imagen} alt={titulo} />
        <p>{contenidoResumido}</p>
        <p>Autor: {autor}</p>
        <p>Editorial: {editorial}</p>
      </div>
    );
  }
}

export default Comic;
