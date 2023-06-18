import { useParams } from "react-router-dom";
import comic from "../../data/comic"
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import "./Comic.css";

const Comic = () => {
	let { id } = useParams();
	let comicSeleccionado = comic.find((c) => c.id == id);

	return (
		<>
			<Container maxWidth="sm"  className="comicIndividual">
				<header>
					<h1>Esta es la noticia {id}</h1>
				</header>
				{
					<article key={comicSeleccionado.id}>
						<header>
							<h2>{comicSeleccionado.title}</h2>
						</header>
						<figure>
							<img className="imagenComicIndividual" src={comicSeleccionado.image} />
						</figure>
						<Typography variant="body2" color="text.primary">
							{comicSeleccionado.content}
						</Typography>
						<p>Autor: {comicSeleccionado.author}</p>
						<Link to="/comics">
							<Button variant="contained">Volver</Button>
						</Link>
					</article>

				}
			</Container>
		</>
	)
}

export default Comic;