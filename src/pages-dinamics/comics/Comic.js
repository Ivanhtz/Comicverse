import { Navigate, useParams } from "react-router-dom";
import comic from "../../data/comic"
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import "./Comic.css";

const Comic = () => {
	let { id } = useParams();
	let comicLocalStorage = JSON.parse(localStorage.getItem("comics"));
	let comicSeleccionado = comicLocalStorage.find((comic) => comic.id == id);

	if (!comicSeleccionado) {
		return <Navigate to='/not-found'/>;
	  }

	return (
		<>
			<Container maxWidth="sm"  className="comicIndividual">
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