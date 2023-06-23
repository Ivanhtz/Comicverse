import React from 'react';
import { Link, useParams } from 'react-router-dom';
import noticias from '../../data/news';
import "./News.css"
const New = () => {
    const { id } = useParams();
    const noticia = noticias.find((noticia) => noticia.id == id);
  
    if (!noticia) {
      return <div>Noticia no encontrada</div>;
    }

    return (
        <section style={{margin:'auto'}}>
            <section class="hero">
                <div>
                    <h1>{noticia.author}</h1>
                    <p>{noticia.content}</p>
                    <Link to={`/noticias`}> <a class="cta" href="">Volver</a> </Link>
                </div>
                <img src={noticia.image} alt=""/>
            </section>
           
        </section>
        
    );
}

export default New;
