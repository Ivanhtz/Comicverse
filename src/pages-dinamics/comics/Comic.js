import { useParams } from "react-router-dom";
import comic from "../../data/comic"
import { Link } from "react-router-dom";

const Comic = () =>{
    let {id} = useParams();
	let comicSeleccionado = comic.find((c) => c.id == id);
	console.log(comicSeleccionado);
    
    return (
        <>
            <header>
                <h1>Esta es la noticia {id}</h1>
            </header>    
			{
			<article key={comicSeleccionado.id}>
				<header>
					<h2>{comicSeleccionado.title}</h2>
				</header>
				<figure>
					<img src={comicSeleccionado.image}/>
				</figure>
				<p>
					{comicSeleccionado.content}
				</p>
				<span>Autor: {comicSeleccionado.author}</span>
				<Link to="/comics">
					<button>Volver</button>
				</Link>
			</article>
			}
        </>
    )
}

export default Comic;