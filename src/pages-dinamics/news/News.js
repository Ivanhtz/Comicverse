import noticias from "../../data/news";
import { Link } from "react-router-dom";
const { Component } = require("react");

class News extends Component {

    render() {

        return (
            <section>
                <header>
                    <h1>Lista de Noticias</h1>
                </header>
                <section style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap' ,}}>
                {
                    noticias.map((noticia=>
                        <article  style={{margin:'auto',width:'45%',maxHeight:'70%', marginBottom: '20px', padding: '10px', border: '1px solid black' }} key={noticia.id}>
                            <header style={{height:'225px', backgroundImage: `url(${noticia.image})` }}>
                                <h2 style={{ color: 'green', fontSize: '20px' }}>{noticia.title}</h2>
                            </header>
                            <p>
                                {noticia.content}
                            </p>
                            <Link to={`/noticias/${noticia.id}`}>Ver detalles {noticia.id}</Link>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>{noticia.author}</span>
                        </article>
                    ))
                }
                </section>
            </section>
        )
    }
}

export default News;