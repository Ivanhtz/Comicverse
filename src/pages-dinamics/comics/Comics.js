import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import comic from "../../data/comic"
import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getComics, crearNoticia, actualizarNoticia, eliminarNoticia } from '../../services/comics';
import "./Comics.css";



export default function Comics() {

	const [comics, setComics] = useState([]);

	//El use Effect es como el componente DidMount 
    useEffect(() => {
      // Obtener noticias al cargar el componente
      obtenerComics()
    }, [])

	//Esto es la funcion 
    const obtenerComics = async () => {
        const data = await getComics();
        if (data) {
            setComics(data);
        }
      };


	let arrayComics;
	let comicsStorage = JSON.parse(localStorage.getItem("comics"));

	if (comicsStorage && comicsStorage.length > 0) {
		arrayComics = comicsStorage;
	} else {
		arrayComics = comic;
		localStorage.setItem("comics", JSON.stringify(comic));
	}

		return (
			<section id="comics">
				<header>
					<Typography variant="h3" component="h1">Lista de Comics</Typography>
				</header>
				{/* <div className="divListaComics">
					{
						arrayComics.map(c =>
							<Link to={`/comics/${c.id}`} style={{ textDecoration: "none", color: "black" }}>
								<Card key={c.id} sx={{ maxWidth: 345, minHeight: 400 }}>
									<CardMedia image={c.image} sx={{ height: 180 }} />
									<CardContent>
										<Typography gutterBottom component="div" variant="h6">
											{c.title}
										</Typography>
										<Typography variant="body2" color="text.secondary" className="truncate">
											{c.content}
										</Typography>	
										<Typography sx={{marginTop: "1rem"}} variant="body1" color="text.secondary">
											Autor: {c.author}
										</Typography>
									</CardContent>
								</Card>
							</Link>
						)
					}
				</div> */}

				<div className="divListaComics">
					{
						comics.map(c =>
							<Link to={`/comics/${c.id}`} style={{ textDecoration: "none", color: "black" }}>
								<Card key={c.id} sx={{ maxWidth: 345, minHeight: 400 }}>
									<CardMedia image={c.image} sx={{ height: 180 }} />
									<CardContent>
										<Typography gutterBottom component="div" variant="h6">
											{c.title}
										</Typography>
										<Typography variant="body2" color="text.secondary" className="truncate">
											{c.content}
										</Typography>	
										<Typography sx={{marginTop: "1rem"}} variant="body1" color="text.secondary">
											Autor: {c.author}
										</Typography>
									</CardContent>
								</Card>
							</Link>
						)
					}
				</div>
			</section>
		)
}


