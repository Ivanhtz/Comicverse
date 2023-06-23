import "./About.css";
import { Card, CardContent, CardMedia, Typography, Container } from "@mui/material";

export default function About() {
	return (
		<>
			<div id="about">
				<header>
					<Typography variant="h3" component="h1">Sobre nosotros</Typography>
				</header>
				<div className="wrapperAbout">
					<section className="mainAbout">
						<div className="imageAbout">
							<figure>
								<img src="https://png.pngtree.com/png-vector/20220830/ourmid/pngtree-comic-bubble-boom-speech-rjdx-png-image_6130748.png" alt="Foto de una estantería de comics" />
							</figure>
						</div>
						<div className="infoAbout">
							<Typography variant="body1" color="text.secondary" >

									Somos una empresa dedicada a la venta de comics internacionales.
									En nuestro catálogo podrás ver artículos de lo más variados para
									satisfacer cualquier gusanillo comiquero que tengas en cada momento.

							</Typography>
						</div>
					</section>
					<section className="mapa">
						<header>
							<h2>¿Dónde estamos?</h2>
						</header>
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7092.245572941186!2d-0.9014845314837362!3d41.635818701845885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5969622c6eea8d%3A0x8187c22863167647!2sHiberus%20Tecnolog%C3%ADa!5e0!3m2!1ses!2ses!4v1687447360900!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</section>
				</div>
			</div>
		</>
	)
}