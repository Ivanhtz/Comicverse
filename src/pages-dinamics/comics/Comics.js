import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import comic from "../../data/comic"
import { Link, Outlet } from "react-router-dom";
import "./Comics.css";



export default function Comics() {

	let arrayComics;
	let comicsStorage = JSON.parse(localStorage.getItem("comics"));

	if(comicsStorage.length > 0){
		arrayComics = JSON.parse(localStorage.getItem("comics"));
	}else{
		arrayComics =  comic;
		localStorage.setItem("comics", JSON.stringify(comic));
	}

		return (
			<section id="comics">
				<header>
					<Typography variant="h3" component="h1">Lista de Comics</Typography>
				</header>
				<div className="divListaComics">
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
				</div>
			</section>
		)
}
