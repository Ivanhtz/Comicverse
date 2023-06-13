import React from 'react';
import { Link, useParams } from 'react-router-dom';
import noticias from '../../data/news';
const New = () => {
    const { id } = useParams();
    const noticia = noticias.find((noticia) => noticia.id == id);
  
    if (!noticia) {
      return <div>Noticia no encontrada</div>;
    }

    return (
        <section style={{margin:'auto'}}>
            <header style={{height:'225px',backgroundImage:`url(${noticia.image})`}}>
                
            </header>
            <article>
                <h1>{noticia.title}</h1>
                <span><small>{noticia.date}</small> | {noticia.author}</span> 
                <hr></hr>
                <p>{noticia.content}</p>
               
            </article>
            <Link to={`/noticias`}>Volver</Link>
        </section>
    );
}

export default New;
